import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FairTradePrinciples from "../newcomponent/tradeinfromation";

import Loader from "../loader/loader";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Aboutus() {
  const { t } = useTranslation(); // Initialize translation
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex w-full justify-center items-center h-[65vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {/* WHY ARAWALI JEWELLERS SECTION */}
      <div className="h-screen w-full flex flex-col lg:mt-0 lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:m-10 items-center">
          <h1 className="text-2xl font-bold text-black">
            {t("Why Puramente International")}
          </h1>
          <p className="m-8 mb-0 font-serif leading-8 font-semibold text-gray-700">
            Best among all customized gemstone jewelry manufacturers in India.
            Since 2005, Puramente International has been providing one-stop
            services to jewelry professionals & brands worldwide. Our clients
            come from over 19 countries throughout the world and range from
            luxury high street boutiques to online retailers capitalizing on the
            latest trends.
          </p>
          <p className="m-8 lg:flex hidden font-serif leading-8 font-semibold text-gray-700">
            We are proud to have worked with some of the biggest names in the
            jewelry industry in India and outside of india as well. We are proud
            on us to be the best among all customized gemstone jewelry
            manufacturers in India.
          </p>
        </div>
        <div className="lg:w-1/2 flex items-center h-screen w-full">
          <img className="h-full w-full" src="/puramentestore.jpeg" alt="" />
        </div>
      </div>

      {/* OUR STORY SECTION */}
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="h-screen w-full flex flex-col lg:flex-row mt-10 lg:mt-2"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:m-10 items-center">
          <h1 className="text-2xl font-bold text-black">{t("OUR STORY")}</h1>
          <p className="m-8 mb-0 font-serif leading-8 font-semibold text-gray-700">
            {t(
              "Nestled in the heart of exquisite craftsmanship, Puramente International is a testament to tradition, elegance, and timeless beauty. Our journey began with a passion for fine jewelry and a commitment to offering pieces that blend artistry with luxury. With years of dedication, we have grown into a trusted name in the world of jewelry, known for our impeccable designs, premium quality, and exceptional service."
            )}
          </p>
          <p className="m-8 lg:flex hidden font-serif leading-8 font-semibold text-gray-700">
            {t(
              "We take pride in our craftsmanship, sourcing only the finest materials and working with skilled artisans to bring our designs to life. Whether you're looking for a statement piece for a special occasion or a timeless treasure to cherish forever"
            )}
          </p>
        </div>
        <div className="lg:w-1/2 lg:mt-5 w-full">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1610223515982-5bae48b7c2c2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <FairTradePrinciples />
    </div>
  );
}
