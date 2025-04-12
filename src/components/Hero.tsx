
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-[#FFB433] text-[#FBF8EF] w-full">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{fontFamily: "Original Surfer,sans-serif"}}
      >
        WanderWise: Easy Travel Planning
      </motion.h1>
      <p className="text-lg max-w-xl mx-auto mb-6 text-[#FBF8EF]" style={{fontFamily: "Original Surfer,sans-serif"}}>
        Get personalized travel recommendations based on your preferences and explore destinations like never before!
      </p>
      
    </section>
  );
}
