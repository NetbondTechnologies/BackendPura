import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  { id: 1, title: "Pearl Earrings Set", category: "Jewellery", image: "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=", code: "PE-1001", price: "$149.99" },
  { id: 2, title: "Silver Diamond Ring", category: "Jewellery", image: "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=", code: "SD-2002", price: "$199.99" },
  { id: 3, title: "Elegant Gold Necklace", category: "Jewellery", image: "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=", code: "GN-3003", price: "$249.99" },
  { id: 4, title: "Ruby Bracelet", category: "Jewellery", image: "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=", code: "RB-4004", price: "$179.99" },
  { id: 5, title: "Emerald Pendant", category: "Jewellery", image: "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=", code: "EP-5005", price: "$159.99" },
];

export default function TopProduct() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  const scrollLeft = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setStartIndex((prev) => Math.min(prev + 1, products.length - itemsPerPage));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div data-aos="zoom-in" className="text-center p-7 mb-12 relative">
          <h2 className="text-4xl h-20 sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 bg-clip-text text-transparent relative z-10">
            Trending Jewellery
          </h2>
          <div className="w-32 h-1 bg-cyan-600 mx-auto mt-4 rounded-full relative z-10" />
          <div className="absolute inset-0 top-5 bg-cyan-200/20 h-24 -mt-12 rounded-full blur-3xl transform scale-150" />
        </div>

        {/* Scrollable Product List */}
        <div className="relative flex items-center">
          {/* Scroll Left Button */}
          <button
            onClick={scrollLeft}
            disabled={startIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-cyan-600 text-white p-3 rounded-full shadow-lg z-10 transition ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-700"
            }`}
          >
            ◀
          </button>

          <div className="flex space-x-6 overflow-hidden w-full justify-center p-4">
            {products.slice(startIndex, startIndex + itemsPerPage).map((product, index) => (
              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="w-64 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-cyan-100"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-cyan-600 font-medium bg-cyan-50 px-2 py-1 rounded-full capitalize">
                      {product.category}
                    </span>
                    <span className="text-xs text-cyan-500 font-mono bg-cyan-50 px-2 py-1 rounded-full">
                      {product.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-cyan-700 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                 

                  {/* Button */}
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:from-cyan-700 hover:to-cyan-800 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    <span>Add to List</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={scrollRight}
            disabled={startIndex >= products.length - itemsPerPage}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-cyan-600 text-white p-3 rounded-full shadow-lg z-10 transition ${
              startIndex >= products.length - itemsPerPage ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-700"
            }`}
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
