import React, { useState } from "react";
import Loader from "../loader/loader";
import { useEffect } from "react";
const productsData = [
  {
    id: 1,
    name: "Elegant Gold Necklace",
    description: "made by diamond expert",
    price: 39.11,
    image:
      "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=",
  },
  {
    id: 2,
    name: "Silver Diamond Ring",
    description: "made by diamond expert",
    price: 24.89,
    image:
      "https://lh7-us.googleusercontent.com/18-UMH2EypsHUXNm5Z5yFe_BiBu76yKgaQNGpOO_w_9atZc6R1uwdG0imc51ueQTUwUCOJyG8Lqlbu--PeoUQGppYX16isumCocOR254QFo93e93K0B0NDykCH0ZBgqi38-ghvmaODzp2FKnF1P1rY4",
  },
  {
    id: 3,
    name: "Pearl Earrings Set",
    description: "made by diamond expert",
    price: 22.0,
    image:
      "https://media.istockphoto.com/id/672126138/photo/indian-traditional-gold-necklace.jpg?s=612x612&w=0&k=20&c=Ws53gwkpu1Yc3_DcRzkilI9h3iaS9cMx20yDj-qXIaM=",
  },
];

const Checkoutcart = () => {
  const [products, setProducts] = useState(productsData);

  const [quantities, setQuantities] = useState(
    productsData.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const handleRemoveFromCart = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleIncrease = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(prev[id] - 1, 1) }));
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex w-full justify-center items-center h-[65vh] bg-gradient-to-br from-gray-50 to-gray-100">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Shopping Cart
      </h2>
      {/* Table for lg and above */}
      <div className="hidden lg:block">
        <table className="min-w-full bg-white border border-background-sky rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                Product
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                Price
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                Quantity
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                className="border-t border-background-sky hover:bg-gray-50 transition"
                key={product.id}
              >
                <td className="py-4 px-4 flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-md object-cover mr-4"
                  />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.description}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-900">
                  ${product.price.toFixed(2)}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <button
                      className="text-gray-600 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-200 transition"
                      onClick={() => handleDecrease(product.id)}
                    >
                      -
                    </button>
                    <span className="text-gray-900">
                      {quantities[product.id]}
                    </span>
                    <button
                      className="text-gray-600 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-200 transition"
                      onClick={() => handleIncrease(product.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <button
                    className="bg-background-sky text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full relative h-24">
          <button className=" absolute right-40 bg-background-sky text-regal-white font-bold w-44 h-12 top-6 ">
            Checkout
          </button>
        </div>
      </div>

      {/* Cart for mobile screen  */}
      <div className="lg:hidden space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-background-sky rounded-lg p-4 hover:bg-gray-50 transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 rounded-md object-cover mx-auto sm:mx-0"
              />
              <div className="flex-1 text-center sm:text-left">
                <div className="text-sm font-semibold text-gray-900">
                  {product.name}
                </div>
                <div className="text-sm text-gray-500">
                  {product.description}
                </div>
                <div className="text-sm text-gray-900 mt-1">
                  ${product.price.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center justify-center space-x-2">
                <button
                  className="text-gray-600 border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-200 transition"
                  onClick={() => handleDecrease(product.id)}
                >
                  -
                </button>
                <span className="text-gray-900">{quantities[product.id]}</span>
                <button
                  className="text-gray-600 border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-200 transition"
                  onClick={() => handleIncrease(product.id)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-background-sky text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition w-full sm:w-auto"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="w-full h-14 flex my-6 justify-center items-center">
          <button className="bg-background-sky h-10  w-44 text-regal-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkoutcart;
