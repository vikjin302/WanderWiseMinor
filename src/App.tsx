import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";

import ChatbotPage from "./pages/chatbotpage";
import TravelBookingPage from "./pages/booktravel";
import TravelMate from "./pages/travelmate";
import LocalFinder from "./pages/localguide";
import ChatPage from "./pages/chat";
import BookingInterface from "./pages/booking";
import Profile from "./pages/profile";
import CompanyProfile from "./pages/company";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/chatbotpage" element={<ChatbotPage/>}/>
            <Route path="/pages/booktravel" element={<TravelBookingPage/>}/>
            <Route path="/pages/travelmate" element={<TravelMate/>}/> 
            <Route path="/pages/localguide" element={<LocalFinder/>}/>
            <Route path="/pages/chat" element={<ChatPage/>}/>
            <Route path="/pages/booking" element={<BookingInterface/>}/>
            <Route path='/pages/profile' element={<Profile/>}/>
            <Route path="/pages/company" element={<CompanyProfile/>}/>
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}
