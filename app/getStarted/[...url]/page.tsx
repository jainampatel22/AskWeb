"use client";

import { ArrowRight } from "lucide-react";
import axios from "axios";
import { use, useEffect, useState, useRef } from "react";
import Header from "@/component/Header";

interface PageProps {
  params: Promise<{ url: string | string[] | undefined }>;
}

export default function QuestionPage({ params }: PageProps) {
  const [question, setQuestion] = useState(""); // Store input
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Convert params to a usable format
  const resolvedParams = use(params);
  const paramUrl = Array.isArray(resolvedParams.url)
    ? resolvedParams.url.join(",")
    : resolvedParams.url;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paramUrl || !question.trim()) return;

    setLoading(true);
    setMessages((prev) => [...prev, `You: ${question}`]);
    setQuestion("");

    try {
      const res = await axios.post("http://localhost:4000/api/ask", {
        url: paramUrl,
        question,
      });

      const newResponse = res.data.answer || "No response received";
      setMessages((prev) => [...prev, newResponse]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />

        {/* Chat Container */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl mt-4 p-1  space-y-2 overflow-y-auto h-[80vh] custom-scrollbar">
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`p-3 rounded-lg text-lg ${
                  msg.startsWith("You:")
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200"
                }`}
              >
                {msg}
              </p>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Section */}
        <footer className="border-t bg-white  bottom-0 p-4 w-full">
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto relative"
          >
            <div className="relative flex items-center">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Start Typing..."
                className="flex-1 py-3 px-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent pr-12 bg-gray-50 placeholder:text-gray-500"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !question.trim()}
                className={`absolute right-1.5 rounded-xl h-9 w-9 p-0 flex items-center justify-center transition-all ${
                  question.trim()
                    ? "bg-gray-400 hover:bg-gray-700 text-white shadow-sm"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <ArrowRight />
              </button>
            </div>
          </form>
        </footer>
      </div>

      {/* Hide scrollbar globally */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
