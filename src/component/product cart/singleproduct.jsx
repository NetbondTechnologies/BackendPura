import { useEffect, useState } from "react";
import { Phone, Share2 } from "lucide-react";

export default function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const price = 399;
  const total = quantity * price;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This runs only when the component mounts

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <img
            src="https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww="
            alt="Traditional Meenakari Floral Gold Saree Pin"
            className="rounded-lg w-full max-w-xs md:max-w-md"
          />
        </div>
        {/* Details Section */}
        <div className="lg:w-1/2 p-6 bg-white rounded-lg shadow-md">
          <p className="text-sm text-gray-500">SKU:</p>
          <h1 className="text-3xl font-bold text-gray-800">
            Elegant Gold Necklace
          </h1>
          <p className="text-2xl font-semibold mt-2 text-bacbg-background-sky">
            ₹{price}
          </p>

          <div className="mt-4">
            <label className="text-sm text-gray-500">Quantity:</label>
            <div className="flex items-center mt-1 border border-gray-300 rounded-lg overflow-hidden">
              <button
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center bg-white"
              />
              <button
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <p className="text-xl font-semibold mt-4">Total: ₹{total}</p>
          <div className="flex mt-4 gap-4">
            <button className="bg-background-sky hover:bg-button-hover text-white px-6 py-3 rounded-lg font-semibold shadow-md w-full">
              Add to Cart
            </button>
            <button className="bg-background-sky hover:bg-button-hover text-white px-6 py-3 rounded-lg font-semibold shadow-md w-full">
              Buy Now
            </button>
          </div>

          <div className="flex mt-6 justify-around text-gray-600">
            <button className="flex items-center hover:text-gray-800">
              <Phone className="mr-2" size={20} /> Enquiry
            </button>

            <button className="flex items-center hover:text-gray-800">
              <Share2 className="mr-2" size={20} /> Share
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Product Description
            </h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Attention all saree Pin lovers! Add a little sparkle to your look
              with our Saree Pin. Achieve the perfect drape and make heads turn
              with this classic accessory. Our pins are designed to be both
              fashionable and functional, so you can look your best while
              keeping your saree in place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
