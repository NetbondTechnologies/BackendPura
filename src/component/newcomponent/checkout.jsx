import { useState } from "react";

const Checkout = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      name: "925 Sterling Silver Stud Earrings",
      description: "Gold Plated with Aqua Chalcedony",
      sku: "ES0396",
      image: "https://img.freepik.com/free-psd/elegant-gold-diamond-engagement-ring_191095-83454.jpg",
      quantity: 1,
    },
    {
      id: 1,
      name: "Dummy Silver Bracelet",
      description: "Elegant Silver Chain Bracelet",
      sku: "DB1234",
      image: "https://img.freepik.com/free-photo/beautiful-elegant-bracelet_123827-20723.jpg",
      quantity: 1,
    },
  ]);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (id, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, value) } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, items });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 shadow-2xl rounded-3xl overflow-hidden bg-white">
        {/* Left Section - Selected Items */}
        <div className="lg:w-1/2 p-8 bg-gradient-to-br from-white to-cyan-50 w-full">
          <h2 className="text-3xl font-extrabold text-cyan-600 mb-6 tracking-tight text-center sm:text-left">Selected Items</h2>
          {items.map((item) => (
            <div key={item.id} className="border border-cyan-200 p-6 rounded-xl flex flex-col sm:flex-row items-center gap-6 bg-white shadow-md transition-all duration-300 hover:shadow-lg mb-4">
              <img
                src={item.image}
                alt="Product"
                className="w-24 h-24 object-cover rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300"
              />
              <div className="flex-grow text-center sm:text-left">
                <p className="font-semibold text-xl text-cyan-800 leading-tight">{item.name}</p>
                <p className="text-sm text-cyan-600 mt-1">{item.description}</p>
                <p className="text-xs text-cyan-500 mt-2 italic">SKU: {item.sku}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-0">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="p-2 bg-cyan-100 text-cyan-600 rounded-full hover:bg-cyan-200 transition-all duration-200 shadow-sm"
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-12 sm:w-16 border border-cyan-300 rounded-lg text-center py-2 bg-white text-cyan-700 font-medium"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                />
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="p-2 bg-cyan-100 text-cyan-600 rounded-full hover:bg-cyan-200 transition-all duration-200 shadow-sm"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-200 shadow-sm"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-1/2 p-8 bg-white w-full">
          <h2 className="text-3xl font-extrabold text-cyan-600 mb-6 tracking-tight text-center sm:text-left">Your Design Selection</h2>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-cyan-700">First Name *</label>
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
                <label className="block text-sm font-semibold text-cyan-700">Email *</label>
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
              <label className="block text-sm font-semibold text-cyan-700">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="w-full border border-cyan-300 rounded-lg p-3 mt-2"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-cyan-700">Message</label>
              <textarea
                name="message"
                className="w-full border border-cyan-300 rounded-lg p-3 mt-2 min-h-[120px]"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600">
              Send Your Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
