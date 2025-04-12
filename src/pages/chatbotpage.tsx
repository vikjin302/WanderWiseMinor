import Chatbot from "../components/chatbot";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-full">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-6 w-full">
        <Chatbot />
      </div>
      <Footer />
    </div>
  );
}
