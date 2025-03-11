import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation(); // i18n hook

  return (
    <div className="bg-button-orange bottom-0">
      <div className="w-full flex gap-5 h-32 lg:h-56 text-white bg-button-orange">
        <div className="w-[60%] font-bold lg:flex hidden h-44 border-white">
          <div className="flex w-1/4 flex-col h-36 ml-10 mt-8 gap-2 items-start">
            <button className="text-lg">{t("SERVICES")}</button>
            <button>{t("Blog")}</button>
            <Link to="/contactus">{t("Contact us")}</Link>
            <Link to="/wishlist">{t("Wishlist Product")}</Link>
          </div>

          <div className="flex w-1/4 flex-col h-36 ml-10 mt-8 gap-2 items-start">
            <button className="text-lg">{t("INFORMATION")}</button>
            <button>{t("Shop")}</button>
            <button>{t("Order Tracking")}</button>
            <button>{t("Shopping Cart")}</button>
          </div>

          <div className="flex w-1/4 flex-col h-36 ml-10 mt-8 gap-2 items-start">
            <button className="text-lg">{t("MyAccount")}</button>
            <button>{t("Privacy")}</button>
            <button>{t("Checkout")}</button>
            <button>{t("MyAccount")}</button>
          </div>

          <div className="flex w-1/4 flex-col h-36 ml-10 mt-8 gap-2 items-start">
            <button className="text-lg">{t("CATEGORIES")}</button>
            <button>{t("Earrings")}</button>
            <button>{t("Necklaces")}</button>
            <button>{t("Bracelet")}</button>
          </div>
        </div>

        <div className="w-[40%] hidden lg:flex font-bold">
          <div className="mt-8 ml-8">
            <button className="text-lg lg:flex hidden">{t("SUBSCRIBE")}</button>
            <span className="lg:mt-4">{t("subscribe for offers")}</span>
            <input
              className="bg-white h-8 mt-4 w-44 lg:w-96 text-gray-700 p-2 text-sm focus:outline-0"
              placeholder={t("Enter your email here")}
              type="text"
            />
            <button className="bg-background-sky w-44 h-10 mt-4">
              {t("SUBSCRIBE")}
            </button>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="w-full h-32 text-sm flex lg:hidden gap-2 mb-2 mt-6 p-2">
          <div className="flex w-1/2 flex-col gap-2">
            <button>{t("SERVICES")}</button>
            <button>{t("Blog")}</button>
            <Link to="/contactus">{t("Contact us")}</Link>
            <button>{t("Wishlist Product")}</button>
          </div>
          <div className="flex w-1/2 flex-col text-sm gap-2">
            <button>{t("MY ACCOUNT")}</button>
            <button>{t("Privacy")}</button>
            <button>{t("Checkout")}</button>
            <button>{t("Recent Order")}</button>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <input
              placeholder={t("Enter email id")}
              className="w-36 font-bold text-gray-500 p-2 h-6 focus:outline-0 bg-white"
              type="text"
            />
            <button className="bg-background-sky font-bold w-36 h-8">
              {t("SUBSCRIBE")}
            </button>
          </div>
        </div>
      </div>
      <div className="p-2">
        <h1 className="text-white m-8">
          {t("© 2025 Arrawali Jewellers All Rights Reserved! Developed By Netbond Technologies")}
        </h1>
      </div>
    </div>
  );
}
