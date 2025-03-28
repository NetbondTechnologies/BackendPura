import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

AOS.init();

export default function Collection() {
  const { t } = useTranslation();

  const categories = [
    { name: t("Rings"), img: "/ring.jpg", slug: "ring" },
    { name: t("Bracelet"), img: "https://cdn.pixabay.com/photo/2015/03/09/14/03/gold-665722_1280.jpg", slug: "bracelet" },
    { name: t("Earring"), img: "https://smarsjewelry.com/cdn/shop/files/909.1.jpg?v=1711633887", slug: "earring" },
    { name: t("Necklace"), img: "https://thumbs.dreamstime.com/b/indian-jewellery-made-gold-one-neckless-earrings-193593857.jpg?w=768", slug: "necklace" },
  ];

  return (
    <div className="px-4">
      <div data-aos="fade-down" data-aos-duration="600">
        <h1 className="text-3xl sm:text-4xl m-6 sm:m-10 font-bold text-center">
          {t("Collections")}
        </h1>
        <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 justify-items-center">
          {categories.map((item, index) => (
            <div
              key={index}
              className="w-40 bg-white sm:w-48 m-2 md:w-56 lg:w-64 lg:m-2 h-auto flex flex-col items-center lg:p-4  shadow-lg rounded-lg"
            >
              <Link to={`/category/${item.name}`}>
                <img
                  className="rounded-full w-32 sm:w-36 md:w-40 lg:w-44 h-32 sm:h-36 md:h-40 lg:h-44 object-cover"
                  src={item.img}
                  alt={item.name}
                />
                <h1 className="text-lg sm:text-xl font-bold mt-3">{item.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
