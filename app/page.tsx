
// import Header from "@/component/Header";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";


    export default function LandingPage() {
      return (
       <div>
        <div className="w-full h-20 z-50 bg-white flex border-b">
        <h1 className="text-3xl font-bold p-5">
    AskWeb
</h1>
<button className="ml-[78%] bg-black text-white rounded-2xl w-28 mt-4 h-12 hover:bg-white hover:text-black hover:border border-black">New Chat</button>
        </div>
       
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 flex items-center justify-center pt-28">
      
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#e5e5e5_2px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_2px,transparent_1px)] bg-[size:6rem_4rem]" />
  
        <section className="w-full px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-10 text-center">
          {/* Hero content */}
          <header className="space-y-6">
            <h1 className="-mt-9 text-4xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Chat With Website's
            </h1>
            <p className="max-w-[600px] text-sm text-gray-600 md:text-xl/relaxed xl:text-xl/relaxed">
            Engage visitors like never before—our AI-powered chat seamlessly interacts with your website, answering queries and taking actions in real time!
              <br />
              <span className="text-gray-400 text-sm">
                Powered by your favourite LLM&apos;s.
              </span>
            </p>
          </header>
  
       
          <Link href='/getStarted'>
          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-gray-900 to-gray-800 rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900/20 to-gray-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
           
              </button>
          </Link>
     
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-8 max-w-3xl mx-auto">
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
          </div>
        </section>
      </main>
      </div>
       );
    }