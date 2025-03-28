import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";
import { Isauthanticate, Logout } from "../authantication/isauthanticat";

import { IoCloseSharp } from "react-icons/io5";

export default function Navbar1() {
  const { t, i18n } = useTranslation();
  const [sidemenu, setsidemenu] = useState(false);

  function togglesidemenu() {
    setsidemenu(!sidemenu);
  }

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <nav className="w-full hidden lg:flex h-32 items-center bg-background-sky">
        <img
          className="h-20 w-48 p-2 ml-6"
          src="/puramente logo.png"
          alt="logo"
        />
        <div className="w-[70%]">
          <input
            className="bg-white h-11 w-[70%] focus:outline-0 ml-8 p-4"
            placeholder={t("searchPlaceholder")}
            type="text"
          />
          <button className="bg-button-orange -ml-2 relative font-sans text-white h-11 w-36">
            {t("SEARCH")}
            <img
              className="h-8 absolute top-2 right-1 w-8"
              src="/search.svg"
              alt="search"
            />
          </button>
        </div>
        <div className="flex items-center w-72 mr-16 gap-1">
          <Link to="/cart" className="w-10 h-10">
            <img className="w-10 h-10" src="/cart2.svg" alt="cart" />
          </Link>

          {/* Language Selector */}
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
              className="bg-black font-semibold rounded-sm text-white w-24 h-8 text-center "
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-black font-semibold rounded-sm text-white w-24 h-8 text-center ">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>

      {/* Navbar for phone */}
      <nav className="h-20 flex justify-between px-6 items-center lg:hidden bg-background-sky">
        <div>
          <button onClick={togglesidemenu}>
            <Menu className="h-8 w-10 hover:bg-cyan-600" />
          </button>
        </div>
        <div>
          <img
            className="h-14 w-40"
            src="/puramente logo.png"
            alt="jewellers"
          />
        </div>
        <div className="flex">
          <Link to="/cart">
            <FaCartShopping className="h-8 w-10  hover:bg-cyan-600" />
          </Link>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`${
          sidemenu
            ? "flex shadow-2xl z-30 shadow-background-sky absolute top-0 h-screen w-[70%] bg-background-sky"
            : "hidden"
        }`}
      >
        {Isauthanticate() ? (
          <button
            onClick={Logout}
            className="bg-black rounded-sm absolute top-10 left-12  text-white  w-32 h-10 text-center"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-black rounded-sm absolute top-10 left-12  text-white  w-32 h-10 text-center">
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
          <Link to="/">
            <button>{t("Home")}</button>
          </Link>
          <Link to="/shopall">{t("ShopAll")}</Link>
          <Link>{t("Anklets")}</Link>
          <Link>{t("Bracelets")}</Link>
          <Link>{t("Earrings")}</Link>
          <Link>{t("Necklace")}</Link>
          <Link to="/contactus">{t("contactus")}</Link>
          <Link to="/aboutus">{t("AboutUs")}</Link>
          <Link to="/dashboard">
            <button className="bg-cyan-700 text-white  w-44 h-12 rounded-2xl ">Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
