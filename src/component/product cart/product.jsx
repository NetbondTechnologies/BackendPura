import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Filter } from "lucide-react";

AOS.init();

const products = [
  {
    id: 1,
    name: "Elegant Gold Necklace",
    category: "Necklaces",
    dateAdded: "2024-03-01",
    designCode: "NG-001",
    image:
      "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=",
  },
  {
    id: 2,
    name: "Silver Diamond ",
    category: "Rings",
    dateAdded: "2024-02-25",
    designCode: "RG-002",
    image:
      "https://lh7-us.googleusercontent.com/18-UMH2EypsHUXNm5Z5yFe_BiBu76yKgaQNGpOO_w_9atZc6R1uwdG0imc51ueQTUwUCOJyG8Lqlbu--PeoUQGppYX16isumCocOR254QFo93e93K0B0NDykCH0ZBgqi38-ghvmaODzp2FKnF1P1rY4",
  },
  {
    id: 3,
    name: "Pearl Earrings Set",
    category: "Earrings",
    dateAdded: "2024-02-28",
    designCode: "ER-003",
    image:
      "https://media.istockphoto.com/id/672126138/photo/indian-traditional-gold-necklace.jpg?s=612x612&w=0&k=20&c=Ws53gwkpu1Yc3_DcRzkilI9h3iaS9cMx20yDj-qXIaM=",
  },
  {
    id: 4,
    name: "Pearl Earrings Set",
    category: "Earrings",
    dateAdded: "2024-02-28",
    designCode: "ER-003",
    image:
      "https://media.istockphoto.com/id/672126138/photo/indian-traditional-gold-necklace.jpg?s=612x612&w=0&k=20&c=Ws53gwkpu1Yc3_DcRzkilI9h3iaS9cMx20yDj-qXIaM=",
  },
];

const ProductCard = () => {
  const [sortOption, setSortOption] = useState("latest");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "category") return a.category.localeCompare(b.category);
    if (sortOption === "latest")
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    return 0;
  });

  return (
    <div data-aos="fade-down" data-aos-duration="600" className="py-12 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-white via-cyan-50 to-cyan-100 min-h-screen">
      {/* Header Section */}
      <div className="w-full text-center mb-12">
        <h1 className="text-4xl font-extrabold text-cyan-600 bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700 tracking-tight">
          New Production
        </h1>
        <p className="text-lg font-medium text-cyan-800 mt-2 italic max-w-2xl mx-auto">
          “Exquisite craftsmanship meets timeless elegance – shop our stunning jewelry collection today!”
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between items-center p-4 bg-white shadow-lg rounded-xl mb-10 max-w-5xl mx-auto">
        <div className="flex items-center space-x-4">
          <Filter className="w-6 h-6 text-cyan-600" />
          <span className="text-cyan-700 font-semibold">Filter Products</span>
        </div>
        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="bg-cyan-50 text-cyan-800 border border-cyan-300 px-4 py-2 rounded-lg shadow-md hover:bg-cyan-100 focus:ring-2 focus:ring-cyan-500 transition-all duration-300 font-medium"
        >
          <option value="latest">Sort by Latest</option>
          <option value="category">Sort by Category</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            {/* Image Section */}
            <div className="relative w-full h-36 ">
              <Link to="/singleproduct">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-all duration-500"
                />
              </Link>
              <span className="absolute top-3 left-3 bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
                New
              </span>
            </div>

            {/* Product Info */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-cyan-800 tracking-tight">{product.name}</h3>
              <p className="text-sm text-cyan-600 mt-1">{product.category}</p>
              <p className="text-xs text-cyan-500 mt-2 font-medium">
                Design Code: <span className="font-semibold">{product.designCode}</span>
              </p>
              <button className="mt-4 w-full bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105">
                Add To List
              </button>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-100 rounded-full -mr-12 -mt-12 opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;