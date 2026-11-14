
import { useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";
import Chatbot from "./ChatBot";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className="absolute bottom-16 right-0
          w-[350px] sm:w-[380px]
          h-[500px] max-h-[75vh]
          bg-white rounded-2xl shadow-2xl
          border border-gray-200
          flex flex-col overflow-hidden
          animate-in fade-in slide-in-from-bottom-4 duration-300"
        >

          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-700
          text-white p-4 flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <FiMessageCircle size={22} />
              </div>

              <div>
                <h3 className="font-semibold">
                  Civic AI
                </h3>
                <p className="text-xs text-blue-100">
                  Citizen Assistant
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full"
            >
              <FiX size={22} />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 min-h-0">
            <Chatbot />
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full
        bg-green-600 hover:bg-green-700
        text-white shadow-xl
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110"
        aria-label="Toggle Civic AI chatbot"
      >
        {isOpen ? (
          <FiX size={26} />
        ) : (
          <FiMessageCircle size={26} />
        )}
      </button>

    </div>
  );
};

export default ChatbotWidget;
