import { Mail, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../loader/loader";

export default function Contactus() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [contactdata, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex w-full justify-center items-center h-[65vh] bg-gradient-to-br from-gray-50 to-gray-100">
        <Loader />
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    // api
  }

  function handleContactData(e) {
    const { name, value } = e.target;
    setContactData({ ...contactdata, [name]: value });
  }

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {t("contact_us")}
                </h2>

                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("your_name")}
                  </label>
                  <input
                    type="text"
                    onChange={handleContactData}
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                    placeholder={t("enter_name")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={handleContactData}
                    name="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                    placeholder={t("enter_email")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleContactData}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                    placeholder={t("enter_message")}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-background-sky text-white px-6 py-3 rounded-lg hover:bg-button-hover"
                >
                  {t("send_message")}
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
                <div className="p-4 bg-gray-100 rounded-full mb-4">
                  <PhoneCall className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t("call_us")}
                </h3>
                <p className="text-gray-600 font-medium text-lg">
                  1800-786-296
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
                <div className="p-4 bg-gray-100 rounded-full mb-4">
                  <Mail className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t("write_to_us")}
                </h3>
                <p className="text-gray-600 font-medium text-lg">
                  PuramenteInternational@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offline Store Section */}
      <div className="w-full items-center gap-10 lg:gap-0 flex flex-col lg:flex-row h-screen">
        <div className="lg:w-1/2 border">
          <img
            src="https://images.pexels.com/photos/31004381/pexels-photo-31004381/free-photo-of-historic-arcade-shopping-mall-in-leeds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex items-center flex-col">
          <h1 className="text-3xl text-black font-bold ">
            {t("offline_store")}
          </h1>
          <p className="m-12 text-xl font-semibold text-black">
            {t("store_address")}
          </p>
          <p className="text-xl font-semibold text-black">
            {t("phone")}: 1414911855, +91 7023555055
          </p>
          <p className="text-xl font-semibold text-black">{t("timings")}</p>
        </div>
      </div>
    </div>
  );
}
