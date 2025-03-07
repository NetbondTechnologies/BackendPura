import { Mail, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import Loader from "../loader/loader";

export default function Contactus() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex w-full justify-center items-center h-[65vh] bg-gradient-to-br from-gray-50 to-gray-100">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <form className="space-y-6">
                <h2 className="text-3xl font-bold  text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Get in Touch
                </h2>

                {/* Name Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 resize-y"
                    placeholder="Tell us what you think..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-background-sky text-white px-6 py-3 rounded-lg hover:to-button-hover  focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transform hover:scale-[1.02] transition-all duration-300">
                <div className="p-4 bg-gray-100 rounded-full mb-4">
                  <PhoneCall className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Call Us At
                </h3>
                <p className="text-gray-600 font-medium text-lg">
                  1800-786-296
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transform hover:scale-[1.02] transition-all duration-300">
                <div className="p-4 bg-gray-100 rounded-full mb-4">
                  <Mail className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Write to Us
                </h3>
                <p className="text-gray-600 font-medium text-lg">
                  ArrawaliJ@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full items-center gap-10 lg:gap-0 flex flex-col lg:flex-row h-screen">
        <div className="lg:w-1/2 border">
          <img
            src="https://images.pexels.com/photos/31004381/pexels-photo-31004381/free-photo-of-historic-arcade-shopping-mall-in-leeds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex items-center flex-col">
          <h1 className="text-3xl text-black font-bold ">offline store</h1>
          
          <p className="m-12 text-xl font-semibold text-black">
            Arrawali Jewellers Building No. 607, Ram Bhawan, Vidhyadhar Ka
            Rasta, Johri Bazar, Jaipur - 302003, Near Gopal Ji Ka Rasta Phone:
            1414911855, +91 7023555055 Timings: Monday to Saturday: 10:00 AM -
            8:00 PM;
          </p>
        </div>
      </div>
    </div>
  );
}
