import { useState,useEffect } from "react";
import Loader from "../loader/loader";
export default function Wishlist() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex w-full  justify-center items-center h-[65vh]">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex mt-2 flex-col items-center justify-center py-2">
      <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 transform transition duration-500 ease-in-out hover:scale-105">
          <img
            src="https://c1.wallpaperflare.com/preview/18/692/20/gold-decoration-jewellery-luxury-party-golden.jpg"
            alt="Product Image"
            width={200}
            height={200}
            className="aspect-square object-cover w-full h-56 rounded-lg overflow-hidden"
          />
          <h2 className="text-lg w-full font-bold mt-2">Gold Bangles</h2>
          <p className="text-gray-500">$99.99</p>
          <div className="flex justify-between gap-2 items-center mt-4">
            <button className="px-4 py-2 bg-background-sky  text-white rounded-md hover:bg-button-hover">
              Add to Cart
            </button>
            <button className="px-4 py-2 border-gray-300 rounded-md hover:bg-cyan-700">
              Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
