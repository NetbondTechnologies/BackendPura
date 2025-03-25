import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
          className="h-16 w-28 p-2 ml-6"
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
            <img className="h-8 absolute top-2 right-1 w-8" src="/search.svg" alt="search" />
          </button>
        </div>
        <div className="flex items-center w-72 mr-16 gap-1">
          <Link to="/cart" className="w-10 h-10">
            <img className="w-10 h-10" src="/cart2.svg" alt="cart" />
          </Link>
          <Link to="/wishlist" className="h-10 w-10">
            <img className="w-10 h-10" src="/whishlist.svg" alt="wishlist" />
          </Link>
          <Link to="/profile" className="h-10 w-10">
            <img className="w-10 h-10" src="/user.svg" alt="user" />
          </Link>
          <Link to="/login" className="w-36 h-8">
            <button className="text-white w-24 h-8 rounded-sm bg-button-orange text-lg">
              {t("Login")}
            </button>
          </Link>

          {/* Language Selector */}
          <button
            onClick={() => i18n.language === "en" ? changeLanguage("hi") : changeLanguage("en")}
            className="text-white w-32 h-8 rounded-sm bg-button-orange text-lg"
          >
            {t("Language")}
          </button>
        </div>
      </nav>

      {/* Navbar for phone */}
      <nav className="h-20 flex justify-between items-center lg:hidden bg-background-sky">
        <div>
          <button onClick={togglesidemenu}>
            <img className="h-8 w-10" src="/mobilemenu.svg" alt="menu" />
          </button>
          <button>
            <img className="h-8 w-10" src="/mobilesearch.svg" alt="search" />
          </button>
        </div>
        <div>
          <img className="h-10 w-16" src="/puramente logo.png" alt="jewellers" />
        </div>
        <div className="flex">
          <Link to="/user">
            <img className="h-8 w-10" src="/mobileuser.svg" alt="user" />
          </Link>
          <Link to="/cart">
            <img className="h-8 w-10" src="/mobilecart.svg" alt="cart" />
          </Link>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`${sidemenu ? "flex shadow-2xl z-30 shadow-background-sky absolute top-0 h-screen w-[70%] bg-white" : "hidden"}`}>
        <button className="absolute h-12 w-12 p-2 top-6 right-6" onClick={togglesidemenu}>
          <img src="/cross.svg" alt="X" />
        </button>
        <div className="h-full flex flex-col items-start text-2xl text-button-orange gap-8 mt-32 ml-12 font-bold">
          <Link to="/"><button>{t("Home")}</button></Link>
          <Link to="/shopall">{t("ShopAll")}</Link>
          <Link>{t("Anklets")}</Link>
          <Link>{t("Bracelets")}</Link>
          <Link>{t("Earrings")}</Link>
          <Link>{t("Necklace")}</Link>
          <Link to="/contactus">{t("contactus")}</Link>
          <Link to="/aboutus">{t("AboutUs")}</Link>
        </div>
      </div>
    </div>
  );
}
