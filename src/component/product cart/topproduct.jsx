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
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const updateItemsPerPage = () => {
    if (window.innerWidth < 640) setItemsPerPage(2);
    else if (window.innerWidth < 1024) setItemsPerPage(3);
    else setItemsPerPage(4);
  };

  const scrollLeft = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setStartIndex((prev) => Math.min(prev + 1, products.length - itemsPerPage));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div data-aos="zoom-in" className="text-center p-7 mb-12 relative">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 bg-clip-text text-transparent relative z-10">
            Trending Jewellery
          </h2>
          <div className="w-32 h-1 bg-cyan-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative flex items-center">
          <button
            onClick={scrollLeft}
            disabled={startIndex === 0}
            className={`absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 bg-cyan-600 text-white p-3 rounded-full shadow-lg z-10 transition ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-700"}`}
          >
            ◀
          </button>

          <div className="flex space-x-4 md:space-x-6 overflow-hidden w-full justify-center p-4">
            {products.slice(startIndex, startIndex + itemsPerPage).map((product, index) => (
              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="w-1/2 sm:w-64 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-cyan-100"
              >
                <div className="relative h-40 sm:h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs sm:text-sm text-cyan-600 font-medium bg-cyan-50 px-2 py-1 rounded-full capitalize">
                      {product.category}
                    </span>
                    <span className="text-xs text-cyan-500 font-mono bg-cyan-50 px-2 py-1 rounded-full">
                      {product.code}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <button className="mt-4 w-full bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105">
                    Add To List
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            disabled={startIndex >= products.length - itemsPerPage}
            className={`absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 bg-cyan-600 text-white p-3 rounded-full shadow-lg z-10 transition ${startIndex >= products.length - itemsPerPage ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-700"}`}
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
