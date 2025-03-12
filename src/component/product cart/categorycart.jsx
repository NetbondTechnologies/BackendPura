import { Link } from "react-router-dom";
export default function Categorycart() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      <div className="p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative">
        <div className="relative w-full h-56">
          <Link to="/singleproduct">
            <img
              src="https://media.istockphoto.com/id/1308181463/photo/indian-traditional-wedding-gold-bangles.jpg?s=612x612&w=0&k=20&c=z0YoAn0SwpGlePtQCqIN55DJPd9ZzyIk_xOrjQD2RYM="
              alt="product"
              className="w-full h-full object-cover rounded-lg"
            />

            <span className="absolute top-2 left-2 bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              New
            </span>
          </Link>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold text-gray-800">Bangeles</h3>
          <p className="text-gray-600 text-sm mt-1">
        
          </p>
          <button className="mt-4 w-full bg-background-sky hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
