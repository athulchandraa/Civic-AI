import React from 'react'
import { useEffect, useRef, useState } from "react";

function ChatBot() {

   const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 Welcome to Civics AI. How can I help you today?",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();

    const text = message.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: text },
    ]);

    setMessage("");

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:"Welcome to Civic AI",
      },
    ]);
    
  };


  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
          className="flex h-14 w-14 items-center justify-center
          rounded-full bg-green-700 text-2xl text-white
          shadow-xl transition hover:scale-110 hover:bg-green-800"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex h-[min(520px,calc(100dvh-32px))]
        w-[min(370px,calc(100vw-32px))] flex-col
        overflow-hidden rounded-2xl border border-gray-200
        bg-white shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between
          bg-green-800 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center
              justify-center rounded-full bg-white text-xl">
                🤖
              </div>

              <div>
                <h3 className="font-semibold">
                  Civics AI
                </h3>
                <p className="text-xs text-blue-100">
                  Citizen Assistant
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="rounded-lg px-3 py-1 text-2xl
              hover:bg-blue-700"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto
          bg-gray-50 p-4">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap
                  break-words rounded-2xl px-4 py-3 text-sm ${
                    item.role === "user"
                      ? "rounded-br-sm bg-green-700 text-white"
                      : "rounded-bl-sm border bg-white text-gray-800"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t
            bg-white p-3"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask anything..."
              aria-label="Type your message"
              className="min-w-0 flex-1 rounded-xl border
              border-gray-300 px-3 py-3 text-sm outline-none
              focus:border-green-600 focus:ring-2
              focus:ring-blue-100"
            />

            <button
              type="submit"
              disabled={!message.trim()}
              aria-label="Send message"
              className="flex h-11 w-11 shrink-0
              items-center justify-center rounded-xl
              bg-green-700 text-white hover:bg-green-800
              disabled:opacity-50"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4 20-7Z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChatBot