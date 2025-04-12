
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Globe2, Languages, MapPin, Star, Users } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




function Profile() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      <Navbar />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="overflow-hidden shadow-lg">
            {/* Cover Image */}
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b')] bg-cover bg-center relative">
              {/* Profile Avatar */}
              <div className="absolute left-8 -bottom-12 z-10">
                <Avatar className="h-28 w-28 border-4 border-white shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Guide profile"
                    className="object-cover"
                  />
                </Avatar>
              </div>
            </div>

            <CardHeader className="pt-16 pb-4 px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                {/* Name and Location */}
                <div className="mt-4 md:mt-0 md:ml-32">
                  <Badge className="text-3xl font-bold bg-[#B4EBE6]" variant="secondary" style={{fontFamily:"Spinnaker"}}>John Mountaineer</Badge>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <MapPin className="h-4 w-4" />
                    <Badge className="bg-yellow-200 text-black">Swiss Alps, Switzerland</Badge>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button size="lg">Message</Button>
                  <Button size="lg" variant="outline">Book a Tour</Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <Tabs defaultValue="about" className="mt-6">
                <TabsList className="w-full md:w-auto border-b">
                  <TabsTrigger value="about" className="text-lg">About</TabsTrigger>
                  <TabsTrigger value="experience" className="text-lg">Experience</TabsTrigger>
                  <TabsTrigger value="reviews" className="text-lg">Reviews</TabsTrigger>
                </TabsList>

                {/* ABOUT SECTION */}
                <TabsContent value="about" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column: About Info */}
                    <div className="md:col-span-2 space-y-8">
                      <div className="bg-[#B4EBE6] rounded-lg p-6 shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4" style={{fontFamily:"Spinnaker"}}>About Me</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          Professional mountain guide with over 10 years of experience leading tours in the Swiss Alps.
                          Specialized in alpine climbing, hiking, and ski touring. Certified by the IFMGA/UIAGM.
                          Passionate about sharing the beauty and challenges of mountain environments while ensuring safety and enjoyment for all skill levels.
                        </p>
                      </div>

                      <div className="bg-[#B4EBE6] rounded-lg p-6 shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4" style={{fontFamily:"Spinnaker"}}>Specialties</h2>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="text-base px-4 py-1.5">Alpine Climbing</Badge>
                          <Badge className="text-base px-4 py-1.5">Hiking</Badge>
                          <Badge className="text-base px-4 py-1.5">Ski Touring</Badge>
                          <Badge className="text-base px-4 py-1.5">Glacier Trekking</Badge>
                          <Badge className="text-base px-4 py-1.5">Rock Climbing</Badge>
                          <Badge className="text-base px-4 py-1.5">Ice Climbing</Badge>
                        </div>
                      </div>

                      <div className="bg-[#B4EBE6] rounded-lg p-6 shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4" style={{fontFamily:"Spinnaker"}}>Languages</h2>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <Badge className="text-lg bg-[#FFB433] text-black">English</Badge>
                              <Badge className="text-lg font-medium bg-[#FFB433] text-black">Native</Badge>
                            </div>
                            <Progress value={100} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                            <Badge className="text-lg bg-[#FFB433] text-black">German</Badge>
                            <Badge className="text-lg font-medium bg-[#FFB433] text-black">Fluent</Badge>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                            <Badge className="text-lg bg-[#FFB433] text-black">French</Badge>
                            <Badge className="text-lg font-medium bg-[#FFB433] text-black">Intermediate</Badge>
                            </div>
                            <Progress value={65} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Stats */}
                    <div className="space-y-6">
                      <Card className="shadow-sm bg-[#B4EBE6]">
                        <CardContent className="pt-6 space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="bg-yellow-50 p-2 rounded-lg">
                              <Star className="h-6 w-6 text-yellow-500" />
                            </div>
                            <div>
                              <div className="text-lg font-medium">4.9 Rating</div>
                              <div className="text-muted-foreground">From 120+ reviews</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="bg-blue-50 p-2 rounded-lg">
                              <Users className="h-6 w-6 text-blue-500" />
                            </div>
                            <div>
                              <div className="text-lg font-medium">500+ Clients</div>
                              <div className="text-muted-foreground">Guided successfully</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="bg-green-50 p-2 rounded-lg">
                              <Calendar className="h-6 w-6 text-green-500" />
                            </div>
                            <div>
                              <div className="text-lg font-medium">10+ Years</div>
                              <div className="text-muted-foreground">Professional experience</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="bg-purple-50 p-2 rounded-lg">
                              <Globe2 className="h-6 w-6 text-purple-500" />
                            </div>
                            <div>
                              <div className="text-lg font-medium">20+ Countries</div>
                              <div className="text-muted-foreground">Tour locations</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="shadow-sm bg-[#B4EBE6]">
                        <CardContent className="pt-6">
                          <h3 className="text-xl font-semibold mb-4" style={{fontFamily:"Spinnaker"}}>Certifications</h3>
                          <div className="space-y-3">
                            <Badge variant="outline" className="w-full justify-start py-2 text-base border-none bg-[#FFB433]">
                              IFMGA/UIAGM Mountain Guide
                            </Badge>
                            <Badge variant="outline" className="w-full justify-start py-2 text-base border-none bg-[#FFB433]">
                              Wilderness First Responder
                            </Badge>
                            <Badge variant="outline" className="w-full justify-start py-2 text-base border-none bg-[#FFB433]">
                              Avalanche Safety Level 3
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                {/* EXPERIENCE SECTION */}
                <TabsContent value="experience">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Professional Experience</h2>
                    {/* Add experience content here */}
                  </div>
                </TabsContent>

                {/* REVIEWS SECTION */}
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Client Reviews</h2>
                    {/* Add reviews content here */}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
