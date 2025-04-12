import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { src: "vietnam1.jpg", name: "Vietnam" },
  { src: "paris1.jpg", name: "Paris" },
  { src: "Thailand1.jpg", name: "Thailand" },
  { src: "Japan1.jpg", name: "Japan" },
  { src: "Switzerland1.jpg", name: "Switzerland" },
  { src: "London1.jpg", name: "London" },
  { src: "India1.jpg", name:"Delhi"},
  { src: "America1.jpg", name:"USA"}
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-50 text-center w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-10" style={{ fontFamily: "Spinnaker" }}>
        Explore WanderWise
      </h2>

      {/* Grid Layout without spacing */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 px-6">
        {images.map((item, index) => (
          <Dialog key={index}>
            <DialogTrigger onClick={() => setSelectedImage(item.src)}>
              <Card className="relative overflow-hidden cursor-pointer group rounded-none border-none h-[200px]">
                <CardContent className="p-0 h-full w-full flex ">
                  <img 
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay with Name on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 group-hover:bg-opacity-60 transition-all duration-300">
                    {item.name}
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="flex justify-center p-4">
              <img
                src={selectedImage || ""}
                alt="Selected"
                className="w-full max-w-4xl shadow-xl"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
