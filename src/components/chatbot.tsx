import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// Define message type
type Message = {
  text: string;
  sender: "user" | "bot";
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the latest message when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to handle sending user messages
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(""); // Clear input field

    try {
      const response = await fetch("http://localhost:5001", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage: Message = { text: data.reply, sender: "bot" };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-900 text-white">
      {/* Chat Header */}
      <header
        className="bg-[#FFB433] text-white text-xl font-semibold p-4 text-center shadow-md"
        style={{ fontFamily: "Spinnaker" }}
      >
        AI Chatbot
      </header>

      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg shadow-md text-sm sm:text-base font-medium 
                ${msg.sender === "user" ? "bg-blue-500 text-white rounded-br-none" : "bg-gray-700 text-white rounded-bl-none"}
              `}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Box */}
      <div className="bg-gray-800 p-4 border-t border-gray-700 flex items-center space-x-3">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 rounded-full border-gray-600 bg-gray-700 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all"
        >
          <Send size={20} />
        </Button>
      </div>
    </div>
  );
}
