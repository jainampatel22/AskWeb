"use client"
// import Header from "@/component/Header";
import { motion } from "framer-motion"

import HowItWorks from "@/component/HowItworks"
export default function LandingPage() {
  return (
     <div className="bg-gradient-to-b from-gray-50/50 to-white min-h-screen">
  

      <main className="bg-white pt-20 pb-10 sm:pt-28">
        <section className="w-full px-4 py-6 sm:py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-6 sm:space-y-10 text-center">
          {/* Hero content */}
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="mt-10 sm:mt-20 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Chat With{" "}
              <span className="block text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Website&apos;s
              </span>
            </h1>
            <h6 className="mt-6 sm:mt-10 max-w-full sm:max-w-[600px] text-sm sm:text-base md:text-xl xl:text-xl pt-6 sm:pt-0 text-gray-600 px-2 mx-auto">
              Engage visitors like never before—our AI-powered chat seamlessly interacts with your website, answering
              queries and taking actions in real time!
              <br />
              <span className="block text-gray-400 text-xs sm:text-sm mt-5 mb-8 sm:mb-0 sm:mt-3">Powered by your favourite LLM&apos;s.</span>
            </h6>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-10 sm:mt-16 text-center w-full"
          >
            {/* Add any call-to-action or hero image here */}
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 pt-8 max-w-3xl mx-auto mb-10"
        >
          {[
            { title: "Fast", description: "Real-time streamed responses" },
            {
              title: "Modern",
              description: "Next.js 15, Tailwind CSS, Postgres, Prisma",
            },
            { title: "Smart", description: "Powered by Your Favourite LLM's" },
          ].map(({ title, description }) => (
            <div key={title} className="text-center">
              <div className="text-2xl font-semibold text-gray-900">
                {title}
              </div>
              <div className="text-sm text-gray-600 mt-1">{description}</div>
            </div>
          ))}
        </motion.div>
      </main>
<div className="bg-white">

      <HowItWorks />
  
</div>
    </div>
  )
}