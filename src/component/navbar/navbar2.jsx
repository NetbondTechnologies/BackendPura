import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IsAdmin } from "../authantication/isauthanticat";
import { AiFillInstagram } from "react-icons/ai";
import { Menu } from "lucide-react";

export default function Navbar2() {
  const [menu, setmenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { t } = useTranslation();

  function menutoggle() {
    setmenu(!menu);
  }

  return (
    <div>
      <nav className="relative hidden lg:flex gap-2 items-center h-12 w-full">
        <button
          onClick={menutoggle}
          className="text-lg w-72 rounded-sm ml-5 text-black font-semibold bg-background-sky h-10"
        >
          {t("BROWSE_CATEGORIES")}
        </button>
        <Menu className="absolute left-8 h-6 w-6" />
        <div className="text-button-orange flex font-bold gap-10 p-2 text-xl">
          <Link
            onMouseEnter={() => setDropdown(false)}
            className="hover:text-cyan-600"
            to="/"
          >
            {t("Home")}
          </Link>

          {/* Jewellery Design Dropdown */}
          <div className="relative" onMouseEnter={() => setDropdown(true)}>
            <Link to="/shopall" className="hover:text-cyan-600 cursor-pointer">
              Jewellery Design
            </Link>
            {dropdown && (
              <ul
                onMouseLeave={() => {
                  setDropdown(false);
                }}
                className="absolute z-50 left-0  mt-2 w-48 bg-white shadow-lg rounded-md "
              >
                {["Necklaces", "Earrings", "Bracelets", "Rings"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/category/${item}`}
                      className="block px-4 py-2 hover:bg-cyan-100 text-black"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            onMouseEnter={() => setDropdown(false)}
            className="hover:text-cyan-600"
            to="/category"
          >
            Categories
          </Link>
          <Link className="hover:text-cyan-600" to="/aboutus">
            {t("About us")}
          </Link>
          <Link className="hover:text-cyan-600" to="/contactus">
            {t("Contact us")}
          </Link>

          {IsAdmin() ? (
            <Link className="text-center text-lg" to="/dashboard">
              <button className="bg-cyan-500 hover:bg-cyan-800 h-8 w-28 border-2 border-cyan-800 text-white">
                {t("Dashboard")}
              </button>
            </Link>
          ) : (
            // socialmedialink
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/puramenteinternational/"
              >
                <AiFillInstagram className="h-6 hover:text-cyan-500 w-8" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/puramenteinternational1/"
              >
                <FaFacebook className="h-6 hover:text-cyan-500 w-8" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@puramenteinternational1982"
              >
                <FaYoutube className="h-6 hover:text-cyan-500 w-8" />
              </a>
            </div>
          )}

         
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        onMouseLeave={menutoggle}
        className={`${
          menu
            ? "flex flex-col z-20 absolute left-5 p-4 text-xl gap-2 bg-background-sky font-semibold text-black rounded items-start w-72 h-72"
            : "hidden"
        }`}
      >
        <Link to="/">
          <button>{t("Home")}</button>
        </Link>
        <Link to="/shopall">
          <button>{t("Shop All")}</button>
        </Link>
        <Link to="/category">
          <button>{t("Category")}</button>
        </Link>
        <Link to="/category/Bracelets">
          <button>{t("Bracelets")}</button>
        </Link>
        <Link to="/category/Earrings">
          <button>{t("Earrings")}</button>
        </Link>
        <Link to="/category/Necklaces">
          <button>{t("Necklace")}</button>
        </Link>
        <Link to="/category/Rings">
          <button>{t("Ring")}</button>
        </Link>
      </div>
    </div>
  );
}
