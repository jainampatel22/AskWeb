"use client";

import axios from "axios";
import { use, useState } from "react";

interface PageProps {
  params: Promise<{ url: string | string[] | undefined }>;
}

export default function QuestionPage({ params }: PageProps) {
  const resolvedParams = use(params); // Unwrap params
  const [question, setQuestion] = useState(""); // Store input
  const [response, setResponse] = useState(""); // Store API response

  // Convert params to a usable format
  const paramUrl = Array.isArray(resolvedParams.url)
    ? resolvedParams.url.join(",")
    : resolvedParams.url;

  const handleSubmit = async () => {
    if (!paramUrl || !question) return; // Ensure both values exist
console.log(paramUrl)
    try {
      const res = await axios.post("http://localhost:4000/api/ask", { url: paramUrl, question });
      console.log("Response:", res.data);
      setResponse(res.data.answer || "No response received");
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error sending request");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      
      {response && <p>Response: {response}</p>}
    </div>
  );
}
