import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar2() {
  const [menu, setmenu] = useState(false);
  const { t } = useTranslation();

  function menutoggle() {
    setmenu(!menu);
  }

  return (
    <div>
      <nav className="relative hidden lg:flex gap-4 items-center h-12 w-full">
        <button
          onClick={menutoggle}
          className="text-lg w-72 rounded-sm ml-5 text-white font-semibold bg-button-orange h-10"
        >
          {t("BROWSE_CATEGORIES")}
        </button>
        <img
          className="absolute left-8 h-6 w-6"
          src="/menu.svg"
          alt={t("CATEGORIES")}
        />
        <div className="text-button-orange flex font-bold gap-12 p-2 text-xl">
          <Link to="/">{t("Home")}</Link>
          <Link to="/shopall">{t("Shop All")}</Link>
          <Link to="/anklets">{t("Anklets")}</Link>
          <Link to="/aboutus">{t("About us")}</Link>
          <Link to="/contactus">{t("Contact us")}</Link>
          <Link to="/dashboard">{t("Dashboard")}</Link>
        </div>
      </nav>

      <div
        onMouseOut={menutoggle}
        className={`${
          menu
            ? "flex flex-col z-20 absolute left-5 p-4 border-2 text-xl gap-2 bg-button-orange text-white rounded items-start w-72 h-72"
            : "hidden"
        }`}
      >
        <button>{t("Home")}</button>
        <button>{t("Shop All")}</button>
        <button>{t("Anklets")}</button>
        <button>{t("Bracelets")}</button>
        <button>{t("Earrings")}</button>
        <button>{t("Necklace")}</button>
        <button>{t("Ring")}</button>
      </div>
    </div>
  );
}
