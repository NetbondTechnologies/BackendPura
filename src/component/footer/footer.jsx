import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-button-orange">
      <div className="w-full flex gap-5 h-24 lg:h-56 text-white bg-button-orange">
        <div className="w-[60%] font-bold lg:flex hidden h-44 border-white ">
          <div className="flex w-1/4 flex-col h-36 ml-10 mt-8 gap-2 items-start">
            <button className="text-lg">SERVICES</button>
            <button>Blog</button>
            <button>Contact Us</button>
            <button>Wishlist Product</button>
          </div>

          <div className="flex w-1/4 flex-col h-36 ml-10 mt-8 gap-2 items-start">
            <button className="text-lg">INFORMATION</button>
            <button>Shop</button>
            <button>Order Tracking</button>
            <button>Shoping Cart</button>
          </div>

          <div className="flex w-1/4 flex-col h-36 ml-10 mt-8 gap-2 items-start">
            <button className="text-lg">MY ACCOUNT</button>
            <button>Privacy</button>
            <button>Checkout</button>
            <button>My Account</button>
          </div>

          <div className="flex w-1/4 flex-col h-36 ml-10 mt-8 gap-2 items-start">
            <button className="text-lg">CATEGORIES</button>
            <button>Earring</button>
            <button>Necklaces</button>
            <button>Braclete</button>
          </div>
        </div>
        <div className="w-[40%] hidden lg:flex font-bold">
          <div className="mt-8 ml-8">
            <button className="text-lg lg:flex hidden">SUBSCRIBE</button>
            <span className="lg:mt-4">subscribe for offer</span>
            <input
              className="bg-white h-8 mt-4 w-44 lg:w-96 text-gray-700 p-2 text-sm focus:outline-0"
              placeholder="Enter your email here"
              type="text"
            />
            <button className="bg-background-sky w-44 h-10 mt-4">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="w-full h-32 text-sm flex lg:hidden gap-2 flex-col mb-2 p-2">
          <button className="">SERVICES</button>
          <button>Blog</button>
          <button>Contact Us</button>
          <button>Wishlist Product</button>
        </div>
      </div>
      <div className="p-2">
        <h1 className="text-white m-8">
          © 2025 Arrawali Jewellers All Right reserved! , Developed By Netbond
          Technologies
        </h1>
      </div>
    </div>
  );
}
