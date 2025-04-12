import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Send, Smile, Search, MoreVertical, Phone, Video, Pin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Message {
  sender: string;
  message: string;
  timestamp?: string;
}

const sampleChats: Record<"Local Guide" | "Travel Agent" | "Travel Mate", Message[]> = {
  "Local Guide": [
    { sender: "Local Guide", message: "Hey! How can I help you explore the city?", timestamp: "9:00 AM" },
    { sender: "You", message: "I'm looking for some local food recommendations!", timestamp: "9:02 AM" },
    { sender: "Local Guide", message: "Great choice! Let me suggest some amazing local spots.", timestamp: "9:03 AM" }
  ],
  "Travel Agent": [
    { sender: "Travel Agent", message: "Welcome! Looking for travel packages?", timestamp: "Yesterday" },
    { sender: "You", message: "Yes, I'm interested in European tours", timestamp: "Yesterday" },
    { sender: "Travel Agent", message: "I have some excellent options for you!", timestamp: "Yesterday" }
  ],
  "Travel Mate": [
    { sender: "Travel Mate", message: "Excited to plan our trip!", timestamp: "2 days ago" },
    { sender: "You", message: "Me too! Where should we start?", timestamp: "2 days ago" },
    { sender: "Travel Mate", message: "Let's look at some destinations first!", timestamp: "2 days ago" }
  ],
};

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<keyof typeof sampleChats>("Local Guide");
  const [messages, setMessages] = useState<Message[]>(sampleChats["Local Guide"]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMessages(sampleChats[selectedChat] || []);
  }, [selectedChat]);

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      const now = new Date();
      const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages((prev) => [...prev, { sender: "You", message: newMessage, timestamp }]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const filteredChats = Object.entries(sampleChats).filter(([name]) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <div className="container mx-auto flex flex-grow py-6 px-4 gap-6">
        {/* Sidebar */}
        <div className="w-1/4 flex flex-col bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search chats..."
                className="pl-9 bg-gray-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="flex-grow">
            <div className="px-3">
              {filteredChats.map(([chat, messages]) => (
                <div
                  key={chat}
                  className={`cursor-pointer p-3 rounded-lg mb-2 transition-all duration-200 hover:bg-gray-50
                    ${selectedChat === chat ? "bg-blue-50 border border-blue-100" : ""}`}
                  onClick={() => setSelectedChat(chat as keyof typeof sampleChats)}
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://randomuser.me/api/portraits/lego/${chat.length}.jpg`} />
                      <AvatarFallback>{chat.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-gray-900">{chat}</h3>
                        <span className="text-xs text-gray-500">{messages[messages.length - 1].timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {messages[messages.length - 1].message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="w-3/4 flex flex-col bg-white rounded-xl shadow-sm border border-gray-100">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`https://randomuser.me/api/portraits/lego/${selectedChat.length}.jpg`} />
                <AvatarFallback>{selectedChat.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-gray-900">{selectedChat}</h2>
                <span className="text-sm text-green-500">Online</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <Pin className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-grow p-4">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                  {msg.sender !== "You" && (
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={`https://randomuser.me/api/portraits/lego/${selectedChat.length}.jpg`} />
                      <AvatarFallback>{selectedChat.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`max-w-[70%] ${msg.sender === "You" ? "items-end" : "items-start"}`}>
                    <div
                      className={`p-3 rounded-2xl ${
                        msg.sender === "You"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {msg.message}
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{msg.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
              <Button variant="ghost" size="icon" className="shrink-0">
                <Smile className="h-5 w-5 text-gray-500" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button onClick={handleSend} className="shrink-0" size="icon">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}