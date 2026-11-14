
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "How can I file a complaint?",
    keywords: ["complaint", "file", "submit", "grievance"],
    answer:
      "You can file a complaint through the Complaint Corner. Enter your complaint details, select the relevant category, describe the issue and upload supporting documents if available. Then submit your complaint.",
    action: "Go to Complaint Corner",
    path: "/user/complaint",
  },
  {
    question: "How can I track my complaint?",
    keywords: ["track", "status", "pending", "complaint status"],
    answer:
      "You can track your submitted complaints through the Complaint Status section. You can view the current status and updates related to your complaint.",
    action: "Check Complaint Status",
    path: "/user/complaint-status",
  },
  {
    question: "What are the different complaint statuses?",
    keywords: ["pending", "under review", "assigned", "resolved", "status meaning"],
    answer:
      "Pending: Your complaint is submitted and awaiting action.\n\nUnder Review: The complaint is being examined.\n\nAssigned: It has been forwarded to the concerned department.\n\nResolved: The authority has completed the necessary action.",
  },
  {
    question: "How can I find government schemes?",
    keywords: ["scheme", "schemes", "scholarship", "benefit", "government program"],
    answer:
      "Civic AI helps you discover government schemes based on your personal details and eligibility. Visit Find Schemes, provide the required information and explore the schemes suitable for you.",
    action: "Find Government Schemes",
    path: "/user/find-scheme",
  },
  {
    question: "How do I check scheme eligibility?",
    keywords: ["eligibility", "eligible", "qualify", "scheme eligibility"],
    answer:
      "Scheme eligibility depends on factors such as age, income, education, location and category. Enter the requested details in Find Schemes to discover suitable government programs.",
    action: "Find Schemes",
    path: "/user/find-scheme",
  },
  {
    question: "How can I submit an RTI application?",
    keywords: ["rti", "right to information", "information request"],
    answer:
      "You can submit an RTI application through the RTI section. Enter the concerned public authority, provide the information you are requesting and submit your application. You can also view your submission receipt.",
    action: "Apply for RTI",
    path: "/user/rti",
  },
  {
    question: "How can I download my RTI receipt?",
    keywords: ["receipt", "download receipt", "rti receipt"],
    answer:
      "After successfully submitting your RTI application, you can view your application receipt and use the Download Receipt option to save it as a PDF.",
    action: "Go to RTI",
    path: "/user/rti",
  },
  {
    question: "How can I update my profile?",
    keywords: ["profile", "update profile", "personal details", "edit details"],
    answer:
      "You can view and update your personal information from the My Profile section. Make sure your details are accurate so that you can receive relevant scheme recommendations.",
    action: "My Profile",
    path: "/user/profile",
  },
  {
    question: "Is my personal information safe?",
    keywords: ["privacy", "safe", "security", "personal information", "data"],
    answer:
      "Civic AI uses the information you provide to support its services, such as complaint submission and scheme recommendations. Please avoid sharing passwords or sensitive information in the chatbot.",
  },
  {
    question: "How can I contact support?",
    keywords: ["help", "support", "contact", "assistance"],
    answer:
      "You can use the relevant sections of your dashboard to access Civic AI services. For assistance with a particular application, check its status or contact the concerned authority.",
  },
];

const suggestions = [
  "How can I file a complaint?",
  "How can I track my complaint?",
  "How can I find government schemes?",
  "How can I submit an RTI application?",
  "How can I update my profile?",
];

function Chatbot() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 Welcome to Civic AI. How can I help you today?",
    },
  ]);

  const [question, setQuestion] = useState("");

  const handleQuestion = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      type: "user",
      text: text,
    };

    const normalized = text.toLowerCase();

    
const matchedFaq = faqs
  .flatMap((faq) =>
    faq.keywords.map((keyword) => ({
      faq,
      keyword,
    }))
  )
  .filter(({ keyword }) => {
    const regex = new RegExp(
      `\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "i"
    );

    return regex.test(normalized);
  })
  .sort(
    (a, b) => b.keyword.length - a.keyword.length
  )[0]?.faq;


    let botMessage;

    if (
      ["hi", "hello", "hey"].includes(normalized.trim())
    ) {
      botMessage = {
        type: "bot",
        text: "Hello! 👋 How can I assist you with Civic AI today?",
      };
    } else if (matchedFaq) {
      botMessage = {
        type: "bot",
        text: matchedFaq.answer,
        action: matchedFaq.action,
        path: matchedFaq.path,
      };
    } else {
      botMessage = {
        type: "bot",
        text: "Sorry, I couldn't understand your question. Please try asking about complaints, complaint status, government schemes, RTI applications or your profile.",
      };
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);

    setQuestion("");
  };

  return (
    <div className="flex flex-col h-full bg-white">

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.type === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-xl p-3 text-sm whitespace-pre-line ${
                msg.type === "user"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}

              {msg.action && (
                <button
                  onClick={() => navigate(msg.path)}
                  className="block mt-3 px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  {msg.action} →
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-xs text-gray-500 font-semibold">
              SUGGESTED QUESTIONS
            </p>

            {suggestions.map((item, index) => (
              <button
                key={index}
                onClick={() => handleQuestion(item)}
                className="block w-full text-left text-sm p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition"
              >
                {item} →
              </button>
            ))}
          </div>
        )}

      </div>

      {/* Input Section */}
      <div className="p-3 border-t flex gap-2">

        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && handleQuestion(question)
          }
          placeholder="Ask anything..."
          className="flex-1 outline-none text-sm px-3 py-2"
        />

        <button
          onClick={() => handleQuestion(question)}
          disabled={!question.trim()}
          className="bg-green-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          ➤
        </button>

      </div>
    </div>
  );
}

export default Chatbot;
