

import { motion } from "framer-motion";
import { Globe, Search, MessageSquare, ArrowRight } from "lucide-react";

export default function HowItWorks() {
const steps = [
    { 
      title: "Choose Your Website", 
      icon: Globe,
      description: "Simply enter any website domain you'd like to explore. No complicated setup required.",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Enter Domain Name", 
      icon: Search,
      description: "Just type the main domain name. Skip the http:// or www - we'll handle the rest automatically.",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      title: "Start Asking Questions", 
      icon: MessageSquare,
      description: "Get instant, intelligent answers about website content, features, and any information you need.",
      gradient: "from-green-500 to-teal-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

    return (<>
     <div className="bg-white">
      <div className="hidden sm:block">
        <div className="absolute inset-0 -z-10 min-h-screen w-full bg-white bg-[linear-gradient(to_right,#e5e5e5_2px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_2px,transparent_1px)] bg-[size:6rem_4rem]" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Unlock the power of any website with our intelligent analysis tool. 
            Three simple steps to transform how you explore the web.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow for flow indication */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Demo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              See WebSeer in Action
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Watch how our intelligent web analysis transforms complex websites into clear, actionable insights.
            </p>
            
            <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Globe className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-base sm:text-lg">Demo video placeholder</p>
                  <p className="text-xs sm:text-sm opacity-75 mt-2">Your demo video would go here</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-full px-6 sm:px-8 py-4 shadow-lg border border-gray-200">
            <span className="text-gray-700 font-medium text-sm sm:text-base">Ready to explore?</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
            >
              Start Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
    
    </>)
}