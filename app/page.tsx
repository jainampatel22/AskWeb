"use client"
// import Header from "@/component/Header";
import { motion } from "framer-motion"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div>
      {/* Responsive header */}
      <div className="w-full h-20 z-50 border-b bg-white flex justify-between items-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-3xl font-bold">
          <Link href="/">WebSeer</Link>
        </h1>
        <Link href="/getStarted">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl w-24 sm:w-28 text-bold h-10 sm:h-12 hover:bg-white hover:text-white hover:border border-white text-bold">
            New Chat
          </button>
        </Link>
      </div>

      <main className="bg-gradient-to-b from-white to-gray-50/50 pt-16 sm:pt-28">
    <div className="hidden sm:block">
        <div className="absolute inset-0 -z-10 min-h-screen w-full bg-white bg-[linear-gradient(to_right,#e5e5e5_2px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_2px,transparent_1px)] bg-[size:6rem_4rem]" />
        </div>
        <section className="w-full px-4 py-6 sm:py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-6 sm:space-y-10 text-center">
          {/* Hero content */}
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Chat With{" "}
              <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Website&apos;s
              </span>
            </h1>
            <h6 className="max-w-[600px] text-sm sm:text-base md:text-xl/relaxed xl:text-xl/relaxed pt-10 sm:pt-0 text-gray-600 px-2">
              Engage visitors like never before—our AI-powered chat seamlessly interacts with your website, answering
              queries and taking actions in real time!
              <br />
              <p className="text-gray-400 text-xs sm:text-sm mt-5 mb-16 sm:mb-0 sm:mt-3">Powered by your favourite LLM&apos;s.</p>
            </h6>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-20 sm:mt-24 sm:-ml-5 text-center"
          >
            <Link href="/getStarted">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
                Get Started Now
              </button>
            </Link>
          </motion.div>
        </section>
        <motion.div
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 2.3, duration: 0.8 }}
    
        className="block mb-10 sm:hidden grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-8 max-w-3xl mx-auto">
{
  [
    { title: "Fast", description: "Real-time streamed responses" },
    {
      title: "Modern",
      description: "Next.js 15, Tailwind CSS, Postgress, Prisma",
    },
    { title: "Smart", description: "Powered by Your Favourite LLM's" },

  ].map(({title,description})=>(
    <div key={title} className="text-center">
<div className="text-2xl font-semibold font-gray-900">
{title}
</div>
<div className="text-sm text-gray-600 mt-1">{description}</div>

    </div>
  ))
}
          </motion.div>
 
      </main>
    </div>
  )
}