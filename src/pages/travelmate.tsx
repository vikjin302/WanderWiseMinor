import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const travelers = [
  {
    id: 1,
    name: "Aman Gupta",
    age: 25,
    gender: "Male",
    travelers: 2,
    destination: "Manali",
    travelDate: "2025-04-10",
    preferences: "Adventure, Budget Stay",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 23,
    gender: "Female",
    travelers: 1,
    destination: "Goa",
    travelDate: "2025-04-15",
    preferences: "Beach, Party",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function TravelMate() {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [people, setPeople] = useState("");
  const [preferences, setPreferences] = useState("");
  const navigate = useNavigate();

  // Filter logic
  const filteredTravelers = travelers.filter((t) => {
    return (
      (search === "" || t.destination.toLowerCase().includes(search.toLowerCase())) &&
      (gender === "" || gender === "All" || t.gender === gender) && // Fixed gender filter
      (age === "" || t.age.toString() === age) &&
      (date === undefined || t.travelDate === format(date, "yyyy-MM-dd")) &&
      (people === "" || t.travelers.toString() === people) &&
      (preferences === "" || t.preferences.toLowerCase().includes(preferences.toLowerCase()))
    );
  });
  

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8EF]">
      <div className="w-full">
      <Navbar />
      </div>
      
      <div className="container mx-auto py-10 px-4 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-6" style={{ fontFamily: "Spinnaker" }}>Find a Travel Mate</h1>
        
        {/* Search & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Input placeholder="Search destination..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Gender</SelectItem>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
          <Input type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />

          {/* ShadCN Date Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left">
                <CalendarIcon className="mr-2 h-5 w-5" />
                {date ? format(date, "PPP") : "Select Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>

          <Input type="number" placeholder="Number of People" value={people} onChange={(e) => setPeople(e.target.value)} />
          <Input placeholder="Preferences (e.g., Adventure)" value={preferences} onChange={(e) => setPreferences(e.target.value)} />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTravelers.length > 0 ? (
            filteredTravelers.map((t) => (
              <Card key={t.id} className="shadow-lg hover:shadow-xl transition bg-[#B4EBE6]">
                <CardHeader className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={t.image} alt={t.name} />
                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: "Spinnaker" }}>{t.name}</h3>
                    <p className="text-gray-500">{t.age} | {t.gender}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p><strong>Traveling To:</strong> {t.destination}</p>
                  <p><strong>Date:</strong> {t.travelDate}</p>
                  <p><strong>People:</strong> {t.travelers}</p>
                  <p><strong>Preferences:</strong> {t.preferences}</p>
                  
                  
                  <div className="flex justify-between mt-4">
                    <Button className="bg-[#FFB433]" variant="outline" onClick={() => navigate(`../pages/chat`)}>
                      Chat
                    </Button>
                    <Button onClick={() => navigate("/find-travel-mate")}>Post a Request</Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">No matching travelers found.</p>
          )}
        </div>
      </div>
      <div className="w-full mt-auto">
      <Footer/>
      </div>
    </div>
  );
}
