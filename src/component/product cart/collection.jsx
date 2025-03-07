import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Collection() {
  return (
    <div className="px-4">
      <div data-aos="fade-down" data-aos-duration="600">
        <h1 className="text-3xl sm:text-4xl m-6 sm:m-10 font-bold text-center">
          Collections
        </h1>
        <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 justify-items-center">
          {[
            {
              name: "Bangles",
              img: "https://media.istockphoto.com/id/1308181463/photo/indian-traditional-wedding-gold-bangles.jpg?s=612x612&w=0&k=20&c=z0YoAn0SwpGlePtQCqIN55DJPd9ZzyIk_xOrjQD2RYM=",
            },
            {
              name: "Bracelet",
              img: "https://cdn.pixabay.com/photo/2015/03/09/14/03/gold-665722_1280.jpg",
            },
            {
              name: "Earring",
              img: "https://smarsjewelry.com/cdn/shop/files/909.1.jpg?v=1711633887",
            },
            {
              name: "Necklace",
              img: "https://thumbs.dreamstime.com/b/indian-jewellery-made-gold-one-neckless-earrings-193593857.jpg?w=768",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-40 sm:w-48 m-2 md:w-56 lg:w-64 lg:m-2 h-auto flex flex-col items-center lg:p-4 bg-white shadow-lg rounded-lg"
            >
              <img
                className="rounded-full w-32 sm:w-36 md:w-40 lg:w-44 h-32 sm:h-36 md:h-40 lg:h-44 object-cover"
                src={item.img}
                alt={item.name}
              />
              <h1 className="text-lg sm:text-xl font-bold mt-3">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
     
     
    </div>
  );
}
