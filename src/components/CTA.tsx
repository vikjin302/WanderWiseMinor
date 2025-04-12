import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 bg-[#FFB433] text-white text-center w-full">
      <h2 className="text-4xl font-bold mb-4">Ready to Explore?</h2>
      <p className="text-lg mb-6">Start planning your dream trip today with AI-powered recommendations.</p>
      <Button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-md">
        Get Started
      </Button>
    </section>
  );
}
