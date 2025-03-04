'use client'

import { motion } from "framer-motion";
import Link from "next/link";

export default function getStarted() {
  const steps = [
    { 
      title: "Pick the website of your choice.", 
      icon: "/icon-gradient-triangle (1).svg",
      description: "enter any website you'd like to explore."
    },
    { 
      title: "Enter only the domain name.", 
      icon: "/icon-gradient-square.svg",
      description: "No need for http:// or www. Just type the main domain and you're good to go."
    },
    { 
      title: "Boom! You are ready to ask questions.", 
      icon: "/icon-gradient-circle.svg",
      description: "Get instant answers about any website content, features, or information you need."
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b  ">
      
      <div className="w-full h-20 z-50 border-b bg-white flex justify-between items-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-3xl font-bold">
          <Link href="/">WebSeer</Link>
        </h1>
        {/* <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl w-24 sm:w-28 text-bold h-10 sm:h-12 hover:bg-white hover:text-white hover:border border-white text-bold">
          New Chat
        </button> */}
      </div>

      <div className="mx-auto -mt-14 max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        {/* Heading Section with subtle animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 sm:py-24 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Works</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            Three simple steps to unlock a world of information from any website.
          </p>
        </motion.div>

        {/* Steps Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 sm:mt-16"
        >
          <div className="-mt-14 ml-3 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)"
                }}
              >
                {/* Step number indicator */}
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                
                {/* Icon with gradient background */}
                <div className="mb-6 w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 flex items-center justify-center">
                  <img 
                    src={step.icon} 
                    alt={`Step ${index + 1} Icon`} 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                
                {/* Content */}
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h2>
                <p className="text-gray-600 mt-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
            Get Started Now
          </button>
        </motion.div> */}
      </div>
    </div>
  );
}