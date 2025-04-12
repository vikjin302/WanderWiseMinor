import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Globe, Briefcase, MapPin, Phone, Mail, Clock, ChevronRight, Building2 } from "lucide-react";

const stats = [
  { icon: Globe, label: "Countries Served", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "10,000+" },
  { icon: Award, label: "Years Experience", value: "25+" },
  { icon: Briefcase, label: "Travel Packages", value: "1,000+" },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop",
    bio: "20+ years of experience in luxury travel planning"
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop",
    bio: "Expert in sustainable tourism and local experiences"
  },
  {
    name: "Emma Williams",
    role: "Customer Experience Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop",
    bio: "Dedicated to creating unforgettable travel moments"
  },
];

const values = [
  {
    title: "Excellence in Service",
    description: "We strive to exceed expectations in every journey we plan"
  },
  {
    title: "Sustainable Tourism",
    description: "Committed to environmentally responsible travel practices"
  },
  {
    title: "Cultural Respect",
    description: "Promoting understanding and appreciation of local cultures"
  },
  {
    title: "Innovation",
    description: "Continuously evolving to enhance travel experiences"
  },
];

export default function CompanyProfile() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px] bg-black">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <Badge className="mb-5 text-black bg-[#FFB433]">Established 1998</Badge>
            <h1 className="text-5xl font-bold mb-6 text-[#FFB433]" style={{fontFamily:"Spinnaker"}}>Dream Travels</h1>
            <p className="text-xl text-blue-100 mb-8">
              Creating unforgettable travel experiences for over two decades. We specialize in crafting personalized 
              adventures that transform ordinary trips into extraordinary memories.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-yellow-200 border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">About Us</Badge>
            <h2 className="text-3xl font-bold mb-6" style={{fontFamily:"Spinnaker"}}>Your Trusted Travel Partner Since 1998</h2>
            <p className="text-gray-600 mb-6">
              We began our journey with a simple mission: to make world-class travel experiences accessible to everyone. 
              Today, we're proud to be one of the leading travel companies, serving clients across the globe with 
              personalized itineraries and exceptional service.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Headquarters in New York City</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Offices in 15 countries</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">24/7 Customer Support</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&h=300&fit=crop" 
              alt="Nature view" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400&h=300&fit=crop" 
              alt="Mountain landscape" 
              className="rounded-lg shadow-md mt-8"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold" style={{fontFamily:"Spinnaker"}}>What Drives Us Forward</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Our Team</Badge>
          <h2 className="text-3xl font-bold" style={{fontFamily:"Spinnaker"}}>Meet Our Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <Badge className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 mb-8">
              Our team is here to help you plan your next adventure. Reach out to us through any of these channels.
            </p>
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>contact@travelco.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}