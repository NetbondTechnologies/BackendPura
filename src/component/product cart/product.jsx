import { useState } from "react";
import WishlistButton from "../button/wishlistbutton";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Filter } from "lucide-react";
AOS.init();

const products = [
  {
    id: 1,
    name: "Elegant Gold Necklace",
    price: 99.99,
    category: "Necklaces",
    dateAdded: "2024-03-01",
    image:
      "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=",
  },
  {
    id: 2,
    name: "Silver Diamond Ring",
    price: 129.99,
    category: "Rings",
    dateAdded: "2024-02-25",
    image:
      "https://lh7-us.googleusercontent.com/18-UMH2EypsHUXNm5Z5yFe_BiBu76yKgaQNGpOO_w_9atZc6R1uwdG0imc51ueQTUwUCOJyG8Lqlbu--PeoUQGppYX16isumCocOR254QFo93e93K0B0NDykCH0ZBgqi38-ghvmaODzp2FKnF1P1rY4",
  },
  {
    id: 3,
    name: "Pearl Earrings Set",
    price: 79.99,
    category: "Earrings",
    dateAdded: "2024-02-28",
    image:
      "https://media.istockphoto.com/id/672126138/photo/indian-traditional-gold-necklace.jpg?s=612x612&w=0&k=20&c=Ws53gwkpu1Yc3_DcRzkilI9h3iaS9cMx20yDj-qXIaM=",
  },
];

const ProductCard = () => {
  const [wishlist, setWishlist] = useState({});
  const [sortOption, setSortOption] = useState("latest");

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    if (sortOption === "category") return a.category.localeCompare(b.category);
    if (sortOption === "latest")
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    return 0;
  });

  return (
    <div data-aos="fade-down" data-aos-duration="600">
      <div className="w-full mt-10 -mb-8 text-center h-28">
        <h1 className="text-2xl m-4 items-center font-extrabold text-button-orange">
          Featured Product
        </h1>
        <h1 className="text-lg font-semibold">
          “Exquisite craftsmanship meets timeless elegance – shop our stunning
          jewelry collection today!”
        </h1>
      </div>

      <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center space-x-4">
          <Filter />
        </div>

        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="latest">Sort by Latest</option>
          <option value="price-low">Sort by Price (Low to High)</option>
          <option value="price-high">Sort by Price (High to Low)</option>
          <option value="category">Sort by Category</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative"
          >
            <div className="relative w-full h-56">
              <Link to="/singleproduct">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />{" "}
              </Link>
              <WishlistButton
                isWishlisted={wishlist[product.id]}
                toggleWishlist={() => toggleWishlist(product.id)}
              />
              <span className="absolute top-2 left-2 bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                New
              </span>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                ${product.price.toFixed(2)}
              </p>
              <button className="mt-4 w-full bg-background-sky hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
