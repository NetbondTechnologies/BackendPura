import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    title: "Pearl Earrings Set",
    category: "Jewellery",
    image: "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=",
    code: "PE-1001"
  },
  {
    id: 2,
    title: "Silver Diamond Ring",
    category: "Jewellery",
    image: "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=",
    code: "SD-2002"
  },
  {
    id: 3,
    title: "Elegant Gold Necklace",
    category: "Jewellery",
    image: "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=",
    code: "GN-3003"
  },
  {
    id: 4,
    title: "Ruby Bracelet",
    category: "Jewellery",
    image: "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=",
    code: "RB-4004"
  },
  {
    id: 5,
    title: "Emerald Pendant",
    category: "Jewellery",
    image: "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=",
    code: "EP-5005"
  },
];

export default function TopProduct() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          data-aos="fade-down"
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
            Trending Jewellery
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs sm:text-sm text-cyan-600 font-medium capitalize">
                    {product.category}
                  </span>
                  <span className="text-xs text-cyan-500 font-mono">
                    DesignCode:{product.code}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {product.title}
                </h3>

                {/* Button */}
                <button className="w-full bg-cyan-600 text-white py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 hover:bg-cyan-700 hover:shadow-md transform hover:-translate-y-0.5">
                  Add to List
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}