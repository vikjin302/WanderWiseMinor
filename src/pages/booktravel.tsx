import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";





const travelPackages = [
  {
    "id": 1,
    "place": "Bali, Indonesia",
    "company": "Dream Travels",
    "days": 5,
    "itinerary": "Explore Bali's beaches, temples, and waterfalls.",
    "image": "/bali1.jpg",
    "features": [
      { "icon": "🏖️", "name": "Beachside" },
      { "icon": "👨‍👩‍👧", "name": "Family Friendly" },
      { "icon": "🏕️", "name": "Adventure" }
    ]
  },
  {
    "id": 2,
    "place": "Paris, France",
    "company": "Elite Tours",
    "days": 7,
    "itinerary": "Visit Eiffel Tower, Louvre, and explore Parisian cafes.",
    "image": "/paris1.jpg",
    "features": [
      { "icon": "🍷", "name": "Luxury" },
      { "icon": "🎨", "name": "Cultural" }
    ]
  },
  {
    "id": 3,
    "place": "Tokyo, Japan",
    "company": "Zen Travels",
    "days": 6,
    "itinerary": "Experience the vibrant city life and serene temples.",
    "image": "/Japan1.jpg",
    "features": [
      { "icon": "🍣", "name": "Foodie" },
      { "icon": "🌸", "name": "Cherry Blossom" }
    ]
  },
  {
    "id": 4,
    "place": "Santorini, Greece",
    "company": "Aegean Escapes",
    "days": 5,
    "itinerary": "Enjoy stunning sunsets, blue domes, and island hopping.",
    "image": "/santorini.jpg",
    "features": [
      { "icon": "🌅", "name": "Romantic" },
      { "icon": "🚤", "name": "Island Tour" }
    ]
  },
  {
    "id": 5,
    "place": "New York, USA",
    "company": "Big Apple Adventures",
    "days": 4,
    "itinerary": "Explore Times Square, Statue of Liberty, and Broadway shows.",
    "image": "/nyc.jpg",
    "features": [
      { "icon": "🏙️", "name": "Urban" },
      { "icon": "🎭", "name": "Entertainment" }
    ]
  },
  {
    "id": 6,
    "place": "Dubai, UAE",
    "company": "Arabian Nights Tours",
    "days": 5,
    "itinerary": "Luxury shopping, desert safari, and Burj Khalifa visit.",
    "image": "/dubai1.jpg",
    "features": [
      { "icon": "🛍️", "name": "Shopping" },
      { "icon": "🏜️", "name": "Desert Safari" }
    ]
  },
  {
    "id": 7,
    "place": "Sydney, Australia",
    "company": "Down Under Voyages",
    "days": 6,
    "itinerary": "Sydney Opera House, Bondi Beach, and wildlife parks.",
    "image": "/sydney1.jpg",
    "features": [
      { "icon": "🐨", "name": "Wildlife" },
      { "icon": "🌊", "name": "Coastal" }
    ]
  },
  {
    "id": 8,
    "place": "Rome, Italy",
    "company": "Gladiator Travels",
    "days": 7,
    "itinerary": "Visit the Colosseum, Vatican City, and enjoy Italian cuisine.",
    "image": "/rome1.jpg",
    "features": [
      { "icon": "🍝", "name": "Foodie" },
      { "icon": "🏛️", "name": "Historical" }
    ]
  },
  {
    "id": 9,
    "place": "Cairo, Egypt",
    "company": "Pharaoh Expeditions",
    "days": 6,
    "itinerary": "Explore pyramids, Sphinx, and Nile River cruises.",
    "image": "/cairo1.jpg",
    "features": [
      { "icon": "🏺", "name": "Ancient Wonders" },
      { "icon": "🚢", "name": "Cruise" }
    ]
  },
  {
    "id": 10,
    "place": "Amsterdam, Netherlands",
    "company": "Tulip Tours",
    "days": 5,
    "itinerary": "Visit canals, museums, and famous tulip gardens.",
    "image": "/amsterdam.jpg",
    "features": [
      { "icon": "🚲", "name": "Cycling" },
      { "icon": "🌷", "name": "Nature" }
    ]
  },
  {
    "id": 11,
    "place": "Rio de Janeiro, Brazil",
    "company": "Carnival Getaways",
    "days": 7,
    "itinerary": "Experience the vibrant Carnival, Christ the Redeemer, and beaches.",
    "image": "/rio1.jpg",
    "features": [
      { "icon": "🎉", "name": "Festive" },
      { "icon": "🏖️", "name": "Beachside" }
    ]
  },
  {
    "id": 12,
    "place": "Cape Town, South Africa",
    "company": "Safari Treks",
    "days": 6,
    "itinerary": "Table Mountain hikes, vineyards, and safari tours.",
    "image": "/capetown.jpg",
    "features": [
      { "icon": "🦁", "name": "Safari" },
      { "icon": "🏔️", "name": "Adventure" }
    ]
  },
  {
    "id": 13,
    "place": "Bangkok, Thailand",
    "company": "Golden Buddha Tours",
    "days": 5,
    "itinerary": "Explore temples, floating markets, and nightlife.",
    "image": "/Thailand1.jpg",
    "features": [
      { "icon": "🕌", "name": "Cultural" },
      { "icon": "🌃", "name": "Nightlife" }
    ]
  },
  {
    "id": 14,
    "place": "Venice, Italy",
    "company": "Gondola Rides",
    "days": 4,
    "itinerary": "Romantic gondola rides, St. Mark's Basilica, and pasta.",
    "image": "/venice1.jpg",
    "features": [
      { "icon": "🚣", "name": "Romantic" },
      { "icon": "🎭", "name": "Cultural" }
    ]
  },
  {
    "id": 15,
    "place": "Singapore",
    "company": "Urban Explorers",
    "days": 4,
    "itinerary": "Marina Bay Sands, Gardens by the Bay, and Sentosa Island.",
    "image": "/singapore1.jpg",
    "features": [
      { "icon": "🌆", "name": "Modern City" },
      { "icon": "🌳", "name": "Eco-friendly" }
    ],
  },
];


export default function TravelBookingPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredPackages = travelPackages.filter((pkg) =>
    pkg.place.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-[#FFB433]">
      {/* Navbar - Now Full Width */}
      <div className="w-full sticky">
        <Navbar />
      </div>

      {/* Page Container */}
      <div className="container mx-auto px-4 md:px-12 lg:px-20 py-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 py-6" style={{ fontFamily: "Spinnaker" }}>
          Book Your Dream Vacation
        </h2>

        {/* Search Bar */}
        <div className="flex items-center justify-center mb-8 space-x-3">
          <Input
            type="text"
            placeholder="Search Travel Destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg p-3 border border-gray-300 bg-[#FBF8EF] shadow-sm"
          />
          <Button className="bg-blue-600 text-white px-5 py-3">
            <Search />
          </Button>
        </div>

       
        <TooltipProvider>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredPackages.map((pkg) => (
      <Card
        key={pkg.id}
        className="shadow-xl  overflow-hidden transform transition duration-300 hover:scale-105 rounded-xl border border-gray-200"
      >
        
        <div className="relative w-full h-64">
          <img
            src={pkg.image}
            alt={pkg.place}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-lg font-semibold px-4 py-1 rounded-md shadow-md" 
          style={{ fontFamily: "Spinnaker" }}>
            {pkg.place}
          </div>
        </div>

        
        <CardHeader className="p-5">
          <p className="text-gray-600 text-sm">By {pkg.company}</p>
          <Badge className="mt-2 bg-[#FFB433] text-white text-xs px-3 py-1">{pkg.days} Days</Badge>
        </CardHeader>

        <CardContent className="p-5">
          <Separator className="my-2" />
          <p className="text-sm text-gray-700">{pkg.itinerary}</p>

          {/* Features Section */}
          <div className="flex space-x-4 mt-4">
            {pkg.features.map((feature, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <span className="text-3xl cursor-pointer transition-transform duration-200 hover:scale-110">
                    {feature.icon}
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900 text-white text-xs px-3 py-1 rounded-md">
                  {feature.name}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </CardContent>

        
        <CardFooter className="p-5 flex flex-col space-y-2">
  <Button
    className="w-full bg-[#FFB433] text-white font-medium py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
    onClick={() => navigate(`../pages/booking`)}
  >
    Book Now
  </Button>

  <Button
    variant="outline"
    className="w-full bg-[#FFB433] text-white border-none hover:bg-gray-800 hover:text-white transition"
    onClick={() => navigate(`/pages/company`)}
  >
    View Company Profile
  </Button>
</CardFooter>
      </Card>
    ))}
  </div>
</TooltipProvider>
 
        

      </div>

      {/* Footer - Full Width */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
