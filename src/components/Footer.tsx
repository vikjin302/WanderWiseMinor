
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-[#2c5d63] text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* Company Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold" style={{fontFamily:"Spinnaker"}}>Wander Wise</h2>
          <p className="text-gray-300 mt-2">The best friend for Travel Enthusiasts</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li className="hover:text-white transition"><a href="/">Home</a></li>
            <li className="hover:text-white transition"><a href="../pages/booktravel">Book Travel</a></li>
            <li className="hover:text-white transition"><a href="../pages/localguide">Find Local Guide</a></li>
            <li className="hover:text-white transition"><a href="../pages/travelmate">Find Travel Mate</a></li>
            <li className="hover:text-white transition"><a href="../pages/chatbotpage">Ai Assistant</a></li>
          </ul>
        </motion.div>

        {/* Contact Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 flex items-center text-gray-300" >
            <FaMapMarkerAlt className="mr-2 text-yellow-300" />GHS, Manipal University Jaipur , Jaipur, India
          </p>
          <p className="mt-1 flex items-center text-gray-300">
            <FaPhone className="mr-2 text-blue-300" /> +91 7007224274
          </p>
          <p className="mt-1 flex items-center text-gray-300">
            <FaEnvelope className="mr-2 text-red-300" /> vikjin302@gmail.com
          </p>
        </motion.div>
      </div>

      <Separator className="my-6 mx-auto w-11/12" />

      {/* Social Media Links */}
      <motion.div 
        className="flex justify-center space-x-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {[{ icon: FaFacebook, link: "https://facebook.com" },
          { icon: FaTwitter, link: "https://twitter.com" },
          { icon: FaLinkedin, link: "https://linkedin.com" },
          { icon: FaInstagram, link: "https://instagram.com" },
          { icon: FaWhatsapp, link: "https://wa.me/9839626551" },
        ].map(({ icon: Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400 transition"
            whileHover={{ scale: 1.2 }}
          >
            <Icon />
          </motion.a>
        ))}
      </motion.div>

      

      
      <motion.div
        className="fixed bottom-6 right-6"
        whileHover={{ scale: 1.2 }}
      >
        <Button asChild className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600">
          <a href="https://wa.me/7007224274" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={32} />
          </a>
        </Button>
      </motion.div>
    </footer>
  );
};

export default Footer;