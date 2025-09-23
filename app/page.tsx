"use client"
import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import Link from "next/link"
export default function HomePage() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (    
    <main className="relative flex flex-col items-center justify-start pt-32 min-h-screen bg-custom text-white p-6">
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
    </main>
  )
}
