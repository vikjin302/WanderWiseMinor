import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function LocalFinder() {
  const navigate = useNavigate();

  type LocalGuide = {
    id: number;
    name: string;
    city: string;
    language: string;
    experience: number;
    rate: number;
    image: string;
  };

  const [locals] = useState<LocalGuide[]>([
    {
      id: 1,
      name: "Rajesh Kumar",
      city: "Delhi",
      language: "Hindi, English",
      experience: 5,
      rate: 10,
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 2,
      name: "Simran Kaur",
      city: "Mumbai",
      language: "Hindi, Punjabi, English",
      experience: 3,
      rate: 8,
      image: "https://randomuser.me/api/portraits/women/40.jpg",
    },
  
      {
        "id": 3,
        "name": "Rahul Sharma",
        "city": "Delhi",
        "language": "Hindi, English",
        "experience": 5,
        "rate": 10,
        "image": "https://randomuser.me/api/portraits/men/1.jpg"
      },
      {
        "id": 4,
        "name": "Simran Kaur",
        "city": "Mumbai",
        "language": "Hindi, Punjabi, English",
        "experience": 3,
        "rate": 8,
        "image": "https://randomuser.me/api/portraits/women/40.jpg"
      },
      {
        "id": 5,
        "name": "Amit Patel",
        "city": "Ahmedabad",
        "language": "Gujarati, Hindi, English",
        "experience": 6,
        "rate": 9,
        "image": "https://randomuser.me/api/portraits/men/3.jpg"
      },
      {
        "id": 6,
        "name": "Sophia Moreau",
        "city": "Paris",
        "language": "French, English",
        "experience": 7,
        "rate": 12,
        "image": "https://randomuser.me/api/portraits/women/4.jpg"
      },
      {
        "id": 7,
        "name": "David Smith",
        "city": "London",
        "language": "English, Spanish",
        "experience": 10,
        "rate": 15,
        "image": "https://randomuser.me/api/portraits/men/5.jpg"
      },
      {
        "id": 8,
        "name": "Hiroshi Tanaka",
        "city": "Tokyo",
        "language": "Japanese, English",
        "experience": 4,
        "rate": 11,
        "image": "https://randomuser.me/api/portraits/men/6.jpg"
      },
      {
        "id": 9,
        "name": "Liam O'Connor",
        "city": "Dublin",
        "language": "English, Gaelic",
        "experience": 8,
        "rate": 13,
        "image": "https://randomuser.me/api/portraits/men/7.jpg"
      },
      {
        "id": 10,
        "name": "Elena Rossi",
        "city": "Rome",
        "language": "Italian, English",
        "experience": 5,
        "rate": 10,
        "image": "https://randomuser.me/api/portraits/women/8.jpg"
      },
      {
        "id": 11,
        "name": "Carlos Martinez",
        "city": "Barcelona",
        "language": "Spanish, Catalan, English",
        "experience": 9,
        "rate": 14,
        "image": "https://randomuser.me/api/portraits/men/9.jpg"
      },
      {
        "id": 12,
        "name": "Mei Lin",
        "city": "Shanghai",
        "language": "Mandarin, English",
        "experience": 3,
        "rate": 8,
        "image": "https://randomuser.me/api/portraits/women/10.jpg"
      },
      {
        "id": 13,
        "name": "Mohammed Ali",
        "city": "Dubai",
        "language": "Arabic, English",
        "experience": 6,
        "rate": 11,
        "image": "https://randomuser.me/api/portraits/men/11.jpg"
      },
      {
        "id": 14,
        "name": "Isabella Fernandez",
        "city": "Buenos Aires",
        "language": "Spanish, English",
        "experience": 7,
        "rate": 12,
        "image": "https://randomuser.me/api/portraits/women/12.jpg"
      },
      {
        "id": 15,
        "name": "Ethan Lee",
        "city": "Seoul",
        "language": "Korean, English",
        "experience": 5,
        "rate": 10,
        "image": "https://randomuser.me/api/portraits/men/13.jpg"
      },
      {
        "id": 16,
        "name": "Olga Petrova",
        "city": "Moscow",
        "language": "Russian, English",
        "experience": 4,
        "rate": 9,
        "image": "https://randomuser.me/api/portraits/women/14.jpg"
      },
      {
        "id": 17,
        "name": "Ahmed Hassan",
        "city": "Cairo",
        "language": "Arabic, English",
        "experience": 6,
        "rate": 11,
        "image": "https://randomuser.me/api/portraits/men/15.jpg"
      },
      {
        "id": 18,
        "name": "Anna Muller",
        "city": "Berlin",
        "language": "German, English",
        "experience": 5,
        "rate": 10,
        "image": "https://randomuser.me/api/portraits/women/16.jpg"
      },
      {
        "id": 19,
        "name": "Fernando Souza",
        "city": "Rio de Janeiro",
        "language": "Portuguese, English",
        "experience": 7,
        "rate": 12,
        "image": "https://randomuser.me/api/portraits/men/17.jpg"
      },
      {
        "id": 20,
        "name": "Aisha Mohammed",
        "city": "Istanbul",
        "language": "Turkish, Arabic, English",
        "experience": 8,
        "rate": 13,
        "image": "https://randomuser.me/api/portraits/women/18.jpg"
      },
      {
        "id": 21,
        "name": "Jack Williams",
        "city": "Sydney",
        "language": "English",
        "experience": 6,
        "rate": 11,
        "image": "https://randomuser.me/api/portraits/men/19.jpg"
      },
      {
        "id": 22,
        "name": "Julia Ivanova",
        "city": "Saint Petersburg",
        "language": "Russian, English",
        "experience": 5,
        "rate": 10,
        "image": "https://randomuser.me/api/portraits/women/20.jpg"
      }
    ]
    
    
    

  );

  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [experience, setExperience] = useState("");
  const [rate, setRate] = useState("");

  const filteredLocals = locals.filter((local) => {
    return (
      (search === "" || local.city.toLowerCase().includes(search.toLowerCase())) &&
      (language === "All" || local.language.toLowerCase().includes(language.toLowerCase())) &&
      (experience === "" || local.experience >= Number(experience)) &&
      (rate === "" || local.rate <= Number(rate))
    );
  });

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar />

      
      <div className="relative bg-[url('/images/travel-bg.jpg')] bg-cover bg-center py-20 text-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold drop-shadow-lg" style={{fontFamily:"Spinnaker"}}>Find a Local Guide</h1>
          <p className="mt-3 text-lg">Connect with experienced guides for a seamless travel experience</p>
        </div>
      </div>

      
      <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Input placeholder="Enter City..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Hindi">Hindi</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Punjabi">Punjabi</SelectItem>
            </SelectContent>
          </Select>
          <Input type="number" placeholder="Min Experience (Years)" value={experience} onChange={(e) => setExperience(e.target.value)} />
          <Input type="number" placeholder="Max Rate ($/hr)" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
      </div>

      
      <div className="container mx-auto my-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocals.length > 0 ? (
            filteredLocals.map((local) => (
              <Card key={local.id} className="shadow-lg hover:shadow-xl transition border border-gray-200 bg-[#B4EBE6] rounded-lg p-4">
                <CardHeader className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={local.image} alt={local.name} />
                    <AvatarFallback>{local.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800" style={{fontFamily:"Spinnaker"}}>{local.name}</h3>
                    <p className="text-gray-500">{local.city}</p>
                    <Badge className="mt-1 bg-[#FFB433] text-white">{local.experience} years experience</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Languages:</strong> {local.language}</p>
                  <p><strong>Rate:</strong> ${local.rate}/hr</p>

                   <Button
                   className="mt-4 bg-[#FFB433] text-black hover:bg-black hover:text-[#FFB433] transition"
                   onClick={() => navigate(`/pages/profile`)}
                   >View Profile</Button>
                </CardContent>

              </Card>
            ))
          ) : (
            <div className="col-span-full flex justify-center">
              <Skeleton className="h-20 w-full rounded-md" />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
