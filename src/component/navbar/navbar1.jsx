import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BaseURL from "../../baseurl";
import { Isauthanticate, Logout } from "../authantication/isauthanticat";
import { Menu } from "lucide-react";
import { IoCloseSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IsAdmin } from "../authantication/isauthanticat";

export default function Navbar1() {
  const { t, i18n } = useTranslation();
  const [sidemenu, setsidemenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function togglesidemenu() {
    setsidemenu(!sidemenu);
  }

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  async function fetchProducts(query) {
    if (!query.trim()) return setFilteredProducts([]);

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `${BaseURL}/api/products/product?search=${query}`
      );
      setFilteredProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products.");
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchProducts(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      {/* Navbar for desktop */}
      <nav className="w-full hidden lg:flex h-32 items-center bg-background-sky">
        <img
          className="h-20 w-48 p-2 ml-6"
          src="/puramente logo.png"
          alt="logo"
        />
        <div className="w-[70%] relative">
          <input
            className="bg-white h-11 w-[70%] focus:outline-0 ml-8 p-4"
            placeholder={t("searchPlaceholder")}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-button-orange -ml-2 relative font-sans text-white h-11 w-36">
            {t("SEARCH")}
          </button>
          {searchTerm.trim() !== "" && (
            <div className="absolute bg-white shadow-lg w-[70%] ml-8 mt-2 max-h-60 overflow-y-auto z-10">
              {loading ? (
                <div className="p-2 text-gray-500 text-center">Loading...</div>
              ) : error ? (
                <div className="p-2 text-red-500 text-center">{error}</div>
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/singleproduct/${product._id}`}
                    className="flex items-center p-2 hover:bg-gray-100 border-b"
                    onClick={() => setSearchTerm("")}
                  >
                    <img
                      src={product.imageurl}
                      alt={product.name}
                      className="h-10 w-10 object-cover mr-4"
                    />
                    <span>{product.name}</span>
                  </Link>
                ))
              ) : (
                <div className="p-2 text-gray-500 text-center">
                  No product found
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center w-72 mr-16 gap-1">
          <Link to="/cart" className="w-10 h-10">
            <img className="w-10 h-10" src="/cart2.svg" alt="cart" />
          </Link>
          <button
            onClick={() =>
              i18n.language === "en"
                ? changeLanguage("hi")
                : changeLanguage("en")
            }
            className="text-white w-32 h-8 rounded-sm bg-button-orange text-lg"
          >
            {t("Language")}
          </button>
          {Isauthanticate() ? (
            <button
              onClick={Logout}
              className="bg-black font-semibold rounded-sm text-white w-24 h-8 text-center"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-black font-semibold rounded-sm text-white w-24 h-8 text-center">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>

      {/* Navbar for phone */}
      <nav className="h-20 flex justify-between px-6 items-center lg:hidden bg-background-sky">
        <button onClick={togglesidemenu}>
          <Menu className="h-8 w-10 hover:bg-cyan-600" />
        </button>
        <img className="h-14 w-40" src="/puramente logo.png" alt="jewellers" />
        <Link to="/cart">
          <FaCartShopping className="h-8 w-10 hover:bg-cyan-600" />
        </Link>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`${
          sidemenu
            ? "flex shadow-2xl z-30 absolute top-0 h-screen w-[70%] bg-background-sky"
            : "hidden"
        }`}
      >
        {Isauthanticate() ? (
          <button
            onClick={Logout}
            className="bg-black rounded-sm absolute top-10 left-12 text-white w-32 h-10 text-center"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-black rounded-sm absolute top-10 left-12 text-white w-32 h-10 text-center">
              Login
            </button>
          </Link>
        )}
        <button
          className="absolute h-12 w-12 p-2 top-6 right-6"
          onClick={togglesidemenu}
        >
          <IoCloseSharp className="w-14 h-10 font-bold" />
        </button>
        <div className="h-full flex flex-col items-start text-2xl text-button-orange gap-8 mt-32 ml-12 font-bold">
          <input
            className="bg-white w-40 h-12 font-light focus:outline-none px-4"
            placeholder="search"
            type="text"
          />
          <Link to="/">{t("Home")}</Link>
          <Link to="/shopall">{t("ShopAll")}</Link>
          <Link to="/contactus">{t("contactus")}</Link>
          <Link to="/aboutus">{t("AboutUs")}</Link>
          {IsAdmin() && (
            <Link to="/dashboard">
              <button className="bg-cyan-700 text-white w-44 h-12 rounded-2xl">
                Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
