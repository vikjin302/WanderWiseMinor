import Hero from "@/components/Hero";

import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Gallery from "@/components/gallery";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer/>
    </main>
  
  );
}
