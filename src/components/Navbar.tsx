import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu toggle
import { cn } from "@/lib/utils"; // ShadCN utility for conditional classes
import { Button } from "@/components/ui/button"; // ShadCN Button Component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#80CBC4] shadow-lg px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-3xl font-extrabold text-[#37474F] tracking-wide" style={{ fontFamily: "Baumans,sans-serif" }}>
          WanderWise
        </Link>

        
        <div className="hidden md:flex space-x-4 text-black">
          <NavButton to="/">Home</NavButton>
          <NavButton to="/pages/localguide">Local Guide Finder</NavButton>
          <NavButton to="/pages/travelmate">Find Travel Mate</NavButton>
          <NavButton to="/pages/booktravel">Book Tours</NavButton>
          <NavButton to="/pages/chatbotpage">AI Assistant</NavButton>
        </div>

        
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      <div className={cn("md:hidden transition-all duration-300", isOpen ? "block" : "hidden")}>
        <div className="flex flex-col items-center space-y-4 py-4 bg-white shadow-md">
          <NavButton to="/" mobile onClick={() => setIsOpen(false)}>Home</NavButton>
          <NavButton to="/pages/localguide" mobile onClick={() => setIsOpen(false)}>Local Guide Finder</NavButton>
          <NavButton to="/pages/travelmate" mobile onClick={() => setIsOpen(false)}>Find Travel Mate</NavButton>
          <NavButton to="/pages/booktravel" mobile onClick={() => setIsOpen(false)}>Book Tours</NavButton>
          <NavButton to="/pages/chatbotpage" mobile onClick={() => setIsOpen(false)}>AI Assistant</NavButton>
        </div>
      </div>
    </nav>
  );
}


function NavButton({ to, children, mobile, onClick }: { to: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }) {
  return (
    <Link to={to} onClick={onClick}>
      <Button
        className={cn(
          "px-4 py-2 rounded-lg transition-all duration-200",
          mobile ? "w-full text-center text-gray-700 bg-gray-100 hover:bg-blue-500" : "bg-[#FBF8EF] text-black hover:bg-[#FFB433] hover:text-gray-700"
        )}
      >
        {children}
      </Button>
    </Link>
  );
}
