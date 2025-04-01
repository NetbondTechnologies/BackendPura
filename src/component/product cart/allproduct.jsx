import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Filter } from "lucide-react";
import axios from "axios";
import BaseURL from "../../baseurl";
import { useCart } from "../newcomponent/cartcontext";

AOS.init();

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("latest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const [addedProduct, setAddedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const productListRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BaseURL}/api/products`);
        setProducts(response.data);
        setCurrentPage(1); // Reset to first page on new data load
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "category") return a.category.localeCompare(b.category);
    if (sortOption === "latest") return new Date(b.dateAdded) - new Date(a.dateAdded);
    return 0;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product._id);
    setTimeout(() => setAddedProduct(null), 4000);
  };

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setTimeout(() => {
      productListRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-white via-cyan-50 to-cyan-100 min-h-screen">
      <div className="w-full text-center mb-12">
        <h1 className="text-4xl font-extrabold text-cyan-600 tracking-tight">The Latest Gems</h1>
        <p className="text-lg font-medium text-cyan-800 mt-2 italic max-w-2xl mx-auto">
          “Exquisite craftsmanship meets timeless elegance – shop our stunning jewelry collection today!”
        </p>
      </div>

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

      {loading && <p className="text-center text-cyan-700 font-semibold">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Product List */}
      <div ref={productListRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <div className="relative w-full h-36">
              <Link to={`/singleproduct/${product._id}`}>
                <img
                  src={product.image || product.imageurl}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg transform hover:scale-105 transition-all duration-500"
                />
              </Link>
              <span className="absolute top-3 left-3 bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
                New
              </span>
            </div>

            <div className="mt-6 text-center">
              <Link to={`/singleproduct/${product._id}`}>
                <h3 className="text-xl line-clamp-1 font-bold text-cyan-800 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-cyan-600 mt-1">{product.category}</p>
                <p className="text-xs text-cyan-500 mt-2 font-medium">Design Code: {product.code}</p>
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                {addedProduct === product._id ? "Product Added! ✅" : "Add To List"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-8">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow-md font-semibold hover:bg-cyan-600"
            >
              Previous
            </button>
          )}

          {[...Array(totalPages)].map((_, i) =>
            sortedProducts.slice(i * productsPerPage, (i + 1) * productsPerPage).length >= productsPerPage ? (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-lg shadow-md font-semibold ${
                  currentPage === i + 1 ? "bg-cyan-700 text-white" : "bg-cyan-500 text-white hover:bg-cyan-600"
                }`}
              >
                {i + 1}
              </button>
            ) : null
          )}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow-md font-semibold hover:bg-cyan-600"
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
