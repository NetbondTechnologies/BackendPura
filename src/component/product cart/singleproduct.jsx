import { useEffect, useState } from "react";
import { Phone, Share2 } from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BaseURL from "../../baseurl";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchProduct() {
      try {
        const response = await axios.get(
          `${BaseURL}/api/products/single/${id}`
        );
        setProduct(response.data);
        console.log(response);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 bg-cyan-50 rounded-xl shadow-lg">
          <img
            src={product.imageurl} // ✅ Fixed
            alt={product.name}
            className="rounded-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-xl shadow-lg">
          <p className="text-xs text-cyan-600 font-medium uppercase tracking-wide">
            SKU: {product.code}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-1">
            {product.name}
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-200 w-full">
              Add to List
            </button>
          </div>

          <div className="mt-6 flex justify-around text-cyan-700">
            <button className="flex items-center hover:text-cyan-900 transition-colors duration-200">
              <Phone className="mr-2" size={20} /> Enquiry
            </button>
            <button className="flex items-center hover:text-cyan-900 transition-colors duration-200">
              <Share2 className="mr-2" size={20} /> Share
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              {product.description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
