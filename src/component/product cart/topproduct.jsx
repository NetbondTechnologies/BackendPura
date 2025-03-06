import React from "react";
import WishlistButton from "../button/wishlistbutton";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const products = [
  {
    id: 1,
    title: "Pearl Earrings Set",
    category: "jewellery",
    oldPrice: 1099,
    newPrice: 999,
    available: 6,
    rating: 5,
    image:
      "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=",
    quantity: 4,
  },
  {
    id: 2,
    title: "Silver Diamond Ring",
    category: "jewellery",
    oldPrice: 1199,
    newPrice: 1099,
    available: 7,
    rating: 4.5,
    image:
      "https://lh7-us.googleusercontent.com/18-UMH2EypsHUXNm5Z5yFe_BiBu76yKgaQNGpOO_w_9atZc6R1uwdG0imc51ueQTUwUCOJyG8Lqlbu--PeoUQGppYX16isumCocOR254QFo93e93K0B0NDykCH0ZBgqi38-ghvmaODzp2FKnF1P1rY4",
    quantity: 2,
  },
  {
    id: 3,
    title: "Elegant Gold Necklace",
    category: "jewellery",
    oldPrice: 1399,
    newPrice: 1299,
    available: 5,
    rating: 4.5,
    image:
      "https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=",
    quantity: 3,
  },
];

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-background-sky">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
};

export default function Topproduct() {
  return (
    <div data-aos="fade-down" data-aos-duration="600" className="-mb-4">
      <div className="w-full flex justify-center items-center h-16 text-2xl font-bold text-button-orange">
        <span>Trending Products</span>
        <img src="/trending.svg" alt="" />
      </div>
      <div className="container mx-auto my-10 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <div className="flex justify-between p-3">
                <p className="text-lg font-semibold">Today's Offer</p>
                <div className="bg-background-sky text-white flex items-center justify-center w-24 h-10 rounded shadow">
                  TOP RATED
                </div>
              </div>

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56"
              />

              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <a href="#" className="hover:text-gray-700">
                    {product.category}
                  </a>
                  <p className="text-background-sky line-through">
                    ${product.oldPrice}
                  </p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <h5 className="text-lg font-semibold">{product.title}</h5>
                  <h5 className="text-lg font-bold">${product.newPrice}</h5>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    Available:{" "}
                    <span className="font-bold">{product.available}</span>
                  </p>

                  <Rating rating={product.rating} />
                </div>
                <div className="w-full">
                  <button className="bg-background-sky w-40 text-regal-white hover:bg-cyan-600 rounded my-4 h-10 ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
