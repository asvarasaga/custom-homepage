"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { database } from "@/lib/firebase";
import { ref, onValue } from "firebase/database";
import { unsubscribe } from "diagnostics_channel";
export default function HomePage() {
  const [time, setTime] = useState("")
  interface RealtimeData {
  voltage: number;
  current: number;
  power: number;
  energy: number;
  frequency: number;
  pf: number;
  monthCost: number;
}
interface Statisticdata {
  totalCost: number;
  todayEnergy: number;
  todayCost: number;
  monthEnergy: number;
  monthCost: number;
}

const [power, setPower] = useState<RealtimeData | null>(null);
const [statistics, setStatistics] = useState<Statisticdata | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
  const realtimeRef = ref(database, "power-monitor/realtime");
  const statisticsRef = ref(database, "power-monitor/statistics");

  const unsubrealtime = onValue(realtimeRef, (snapshot) => {  
    setPower(snapshot.val());
  });
  const unsubStatistics = onValue(statisticsRef, (snapshot) => {
    setStatistics(snapshot.val());
  });

  return () => {
    unsubrealtime();
    unsubStatistics();
  };
}, []);


  return (    
    <main className="relative flex flex-col items-center justify-start pt-32 min-h-screen bg-custom text-white p-6 ">
      {/* Jam di kanan atas */}
      <div className="absolute top-6 right-8 text-2xl font-dunerise">
        {time}
      </div>

      {/* Search Bar */}
      <form 
        action="https://www.google.com/search"
        method="GET"
        className="flex items-center w-full max-w-2xl bg-white rounded-full shadow-md px-1 py-1"
      >
        {/* Ikon Search di kiri */}
        <div className="flex items-center justify-center w-10 h-7 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </div>

        {/* Input Search */}
        <input
          type="text"
          name="q"
          placeholder="Search the web"
          className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 px-2 font-iceland text-xl"
        />
        <Link href="https://copilot.microsoft.com/" className="ml-2">
        <img src="copilot.png" alt="copilot" width={50} height={50} />
        
        </Link>
      </form>
      {/* Monitoring Listrik */}
      {power && statistics && (
  <div className="absolute bottom-8 right-8 w-[520px] rounded-3xl border border-white/20 bg-black/30 backdrop-blur-xl shadow-2xl p-5">
    <h2 className="text-2xl font-bold mb-4 text-center">
      ⚡ Monitoring Listrik
    </h2>

    <div className="grid grid-cols-3 gap-3">
      <div className="bg-white/10 rounded-xl p-4">
        <p className="text-gray-300">Voltage</p>
        <p className="text-2xl font-bold">
          {Number(power.voltage).toFixed(1)} V
        </p>
      </div>

      <div className="bg-white/10 rounded-xl p-4">
        <p className="text-gray-300">Current</p>
        <p className="text-2xl font-bold">
          {Number(power.current).toFixed(3)} A
        </p>
      </div>

      <div className="bg-white/10 rounded-xl p-4">
        <p className="text-gray-300">Power</p>
        <p className="text-2xl font-bold text-yellow-400">
          {Number(power.power).toFixed(1)} W
        </p>
      </div>

      <div className="bg-white/10 rounded-xl p-4">
        <p className="text-gray-300">Energy</p>
        <p className="text-2xl font-bold">
          {Number(power.energy).toFixed(3)} kWh
        </p>
      </div>

      <div className="bg-white/10 rounded-xl p-4">
        <p className="text-gray-300">Frequency</p>
        <p className="text-2xl font-bold">
          {Number(power.frequency).toFixed(1)} Hz
        </p>
      </div>

      <div className="bg-white/10 rounded-xl p-4">
        <p className="text-gray-300">Power Factor</p>
        <p className="text-2xl font-bold">
          {Number(power.pf).toFixed(2)}
        </p>
      </div>

    </div>
    <div className="bg-white/10 rounded-xl p-4 gap-3 mt-4 justify-center items-center flex">
        <p className="text-gray-300">this month cost</p>
        <p className="text-2xl font-bold text-yellow-400">
          {Number(statistics.monthCost).toFixed(2)} IDR
        </p>
      </div>
  </div>
)}
    </main>
  )
}
