import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useCart } from "./cartcontext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (id, value) => {
    if (value < 50) {
      setErrors((prev) => ({ ...prev, [id]: "Minimum order quantity is 50" }));
    } else {
      setErrors((prev) => ({ ...prev, [id]: "" }));
      updateQuantity(id, value);
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[id];
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      order_details: cartItems
        .map(
          (item) =>
            `<p><strong>${item.name}</strong> (SKU: ${item.sku}) - Qty: ${item.quantity}</p>`
        )
        .join(""),
    };

    try {
      await emailjs.send(
        "service_bncdgoe",
        "template_ms65flp",
        templateParams,
        "xM_ia1stj7vn6JB_o"
      );
      cartItems.forEach((item) => removeFromCart(item._id));

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send order request. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-12">
      {showPopup && (
        <div
          className="fixed h-44 w-[50rem] top-1/2 left-1/2 bg-opacity-50 bg-cyan-200 flex justify-center items-center z-50"
          style={{
            transform: "translate(-50%, -50%)",
            zIndex: 999,
          }}
        >
          <div>
            <h2 className="text-lg font-semibold text-center">
              Your order has been placed successfully! 🎉 We'll update you soon
              with shipping details. Thank you for shopping with us!" Let me
              know if you'd like to refine this further!
            </h2>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 shadow-2xl rounded-3xl overflow-hidden bg-white">
        {/* Left Section - Selected Items */}
        <div className="lg:w-1/2 p-8 bg-gradient-to-br from-white to-cyan-50 w-full">
          <h2 className="text-3xl font-extrabold text-cyan-600 mb-6 text-center sm:text-left">
            Selected Items
          </h2>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">No items in the cart.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="border border-cyan-200 p-6 rounded-xl flex flex-col sm:flex-row items-center gap-6 bg-white shadow-md hover:shadow-lg mb-4"
              >
                <img
                  src={item.imageurl}
                  alt="Product"
                  className="w-24 h-24 object-cover rounded-lg shadow-sm transform hover:scale-105"
                />
                <div className="flex-grow text-center sm:text-left">
                  <p className="font-semibold text-xl text-cyan-800">
                    {item.name}
                  </p>
                  
                  <p className="text-xs text-cyan-500 mt-2 italic">
                    SKU: {item.code}
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-0 relative">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    className="p-2 bg-cyan-100 text-cyan-600 rounded-full hover:bg-cyan-200"
                    disabled={item.quantity <= 50}
                  >
                    -
                  </button>
                  <div className="relative">
                    <input
                      type="number"
                      required
                      className="w-12 sm:w-16 border border-cyan-300 rounded-lg text-center py-2 bg-white text-cyan-700 font-medium"
                      min={50}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                    />
                    {errors[item.id] && (
                      <p className="text-red-500 text-xs absolute top-12 left-0">
                        {errors[item.id]}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    className="p-2 bg-cyan-100 text-cyan-600 rounded-full hover:bg-cyan-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Section - Order Form */}
        <div className="lg:w-1/2 p-8 bg-white w-full">
          <h2 className="text-3xl font-extrabold text-cyan-600 mb-6 text-center sm:text-left">
            Your Design Selection
          </h2>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-cyan-700">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border border-cyan-300 rounded-lg p-3 mt-2"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-cyan-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-cyan-300 rounded-lg p-3 mt-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-cyan-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                className="w-full border border-cyan-300 rounded-lg p-3 mt-2"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-cyan-700">
                Message
              </label>
              <textarea
                name="message"
                className="w-full border border-cyan-300 rounded-lg p-3 mt-2 min-h-[120px]"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600"
            >
              Send Your Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
