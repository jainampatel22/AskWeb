"use client"

import type React from "react"
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react"
import axios from "axios"
import { use, useEffect, useState, useRef } from "react"

interface PageProps {
  params: Promise<{ url: string | string[] | undefined }>
}

export default function QuestionPage({ params }: PageProps) {
  const [question, setQuestion] = useState("")
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  // Convert params to a usable format
  const resolvedParams = use(params)
  const paramUrl = Array.isArray(resolvedParams.url) ? resolvedParams.url.join(",") : resolvedParams.url

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!paramUrl || !question.trim()) return

    setLoading(true)
    setMessages((prev) => [...prev, `You: ${question}`])
    setQuestion("")

    try {
      const res = await axios.post("https://askweb-backend.onrender.com/api/ask", {
        url: paramUrl,
        question,
      })

      const newResponse = res.data.answer || "No response received"
      setMessages((prev) => [...prev, newResponse])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage = "Sorry! We are receiving high traffic. Get back to us after some minutes."
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative flex flex-col h-screen backdrop-blur-sm">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-white/20 p-4 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AskWeb 
              </h1>
              <p className="text-sm text-gray-600">Ask anything about the website</p>
            </div>
          </div>
        </header>

        {/* Chat Container */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
          <div className="w-full max-w-4xl space-y-6 overflow-y-auto h-full custom-scrollbar">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="p-6 bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 mb-8 max-w-md">
                  <Sparkles className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Start a Conversation</h2>
                  <p className="text-gray-600">Ask me anything about the content and I'll help you find the answers!</p>
                </div>
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.startsWith("You:") ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-5 duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-6 py-4 rounded-3xl shadow-lg backdrop-blur-md border transition-all duration-300 hover:shadow-xl ${
                    msg.startsWith("You:")
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-indigo-300/30 rounded-br-lg"
                      : "bg-white/80 text-gray-800 border-white/30 rounded-bl-lg"
                  }`}
                >
                  <p className="text-sm sm:text-base leading-relaxed">
                    {msg.startsWith("You:") ? msg.substring(4) : msg}
                  </p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start animate-in fade-in-0 duration-500">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl rounded-bl-lg px-6 py-4 shadow-lg border border-white/30">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[0, 0.15, 0.3].map((delay, i) => (
                        <div
                          key={i}
                          className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 animate-bounce"
                          style={{ animationDelay: `${delay}s` }}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Section */}
        <footer className="bg-white/60 backdrop-blur-md border-t border-white/20 p-6 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 py-4 px-6 rounded-2xl border-2 border-transparent bg-white/80 backdrop-blur-sm focus:outline-none focus:border-indigo-400 focus:bg-white/90 pr-16 placeholder:text-gray-500 text-base shadow-lg transition-all duration-300 hover:shadow-xl"
                disabled={loading}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
              />
              <button
                onClick={handleSubmit}
                disabled={loading || !question.trim()}
                className={`absolute right-2 rounded-xl h-12 w-12 flex items-center justify-center transition-all duration-300 transform ${
                  question.trim() && !loading
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <ArrowRight size={20} className={`transition-transform duration-300 ${loading ? "animate-pulse" : ""}`} />
              </button>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes slide-in-from-bottom-5 {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .slide-in-from-bottom-5 {
          animation-name: slide-in-from-bottom-5;
        }

        .duration-500 {
          animation-duration: 500ms;
        }

        .fade-in-0 {
          animation-name: fadeIn;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}