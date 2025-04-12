import { useState } from "react";
import { Dialog, DialogContent} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";


const paymentMethods = ["Credit Card", "Debit Card", "UPI", "PayPal", "Net Banking"];

export default function BookingInterface() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    destination: "",
    name: "",
    email: "",
    travelDate: "",
    travelers: "",
    paymentMethod: "",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log("Booking Details:", formData);
    alert("Booking Confirmed!");
    setIsBookingOpen(false);
  };

  return (
    <section className="flex justify-center items-center h-screen bg-yellow-200">
      <Button onClick={() => setIsBookingOpen(true)} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
        Book Your Trip
      </Button>

      {/* Booking Modal */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-md bg-[#80CBC4] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Book Your Trip</h2>
          
          {/* Name */}
          <label className="block text-gray-700 mt-3 mb-1">Your Name</label>
          <Input className="bg-white" type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Enter your name" />

          {/* Email */}
          <label className="block text-gray-700 mt-3 mb-1">Email Address</label>
          <Input className="bg-white" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Enter your email" />

          {/* Travel Date */}
          <label className="block text-gray-700 mt-3 mb-1">Travel Date</label>
          <Input className="bg-white" type="date" value={formData.travelDate} onChange={(e) => handleChange("travelDate", e.target.value)} />

          {/* Number of Travelers */}
          <label className="block text-gray-700 mt-3 mb-1">Number of Travelers</label>
          <Input className="bg-white" type="number" value={formData.travelers} onChange={(e) => handleChange("travelers", e.target.value)} placeholder="Enter number of travelers" />

          {/* Payment Method */}
          <label className="block text-gray-700 mt-3 mb-1">Payment Method</label>
          <Select onValueChange={(value) => handleChange("paymentMethod", value)} >
            <SelectTrigger className="w-full border p-2 rounded-lg bg-gray-50">
              {formData.paymentMethod || "Select payment method"}
            </SelectTrigger>
            <SelectContent>
              {paymentMethods.map((method) => (
                <SelectItem key={method} value={method}>
                  {method}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Submit Button */}
          <Button onClick={handleSubmit} className="w-full bg-blue-600 text-white mt-4 py-2 rounded-lg">
            Confirm Booking
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
