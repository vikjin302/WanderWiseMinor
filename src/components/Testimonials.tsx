import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Alex Johnson", review: "WanderWise helped me plan the perfect trip to Japan!", image: "/avatar1.jpg" },
  { name: "Sarah Lee", review: "The AI recommendations were spot on! Loved my experience.", image: "/avatar2.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white text-center w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">What Travelers Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((t, index) => (
          <Card key={index} className="w-80 p-6 bg-gray-50 shadow-lg rounded-lg">
            <CardContent className="flex flex-col items-center">
              <Avatar className="mb-4">
                <AvatarImage src={t.image} alt={t.name} />
              </Avatar>
              <p className="text-gray-700 italic">"{t.review}"</p>
              <h3 className="text-lg font-semibold mt-2">{t.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
