"use client";

import { ArrowRight } from "lucide-react";
import axios from "axios";
import { use, useEffect, useState } from "react";

interface PageProps {
  params: Promise<{ url: string | string[] | undefined }>;
}

export default function QuestionPage({ params }: PageProps) {
  const [question, setQuestion] = useState(""); // Store input
  const [response, setResponse] = useState(""); // Store API response
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

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
      const res = await axios.post("http://localhost:4000/api/ask", { url: paramUrl, question });
      console.log("Response:", res.data.answer);

      const newResponse = res.data.answer || "No response received";
      
      setMessages((prev) => [...prev, newResponse]);
  
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error sending request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {messages.length > 0 && (
          <div className="w-full max-w-4xl p-4">
           {messages.length > 0 && (
  <div className="w-full max-w-4xl p-4">
    {messages.map((msg, index) => (
      <p key={index} className={`p-2 my-2 rounded-md ${msg.startsWith("You:") ? "bg-blue-500 text-white" : "bg-gray-100"}`}>
        {msg}
      </p>
    ))}
  </div>
)}

          </div>
        )}

        <footer className="border-t bg-white p-4 mt-10 w-full">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto relative">
            <div className="relative flex items-center">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Start Typing..."
                className="flex-1 py-3 px-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 bg-gray-50 placeholder:text-gray-500"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !question.trim()}
                className={`absolute right-1.5 rounded-xl h-9 w-9 p-0 flex items-center justify-center transition-all ${
                  question.trim()
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <ArrowRight />
              </button>
            </div>
          </form>
        </footer>
      </div>
    </>
  );
}
