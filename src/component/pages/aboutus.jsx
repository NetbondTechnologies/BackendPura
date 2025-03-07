import { useState, useEffect } from "react";
import Featuring from "../product cart/featuring";
import Loader from "../loader/loader";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function Aboutus() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex w-full  justify-center items-center h-[65vh]">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="h-screen  w-full flex flex-col lg:flex-row mt-10 lg:mt-2"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:m-10  items-center">
          <h1 className="text-2xl font-bold text-black">OUR STORY</h1>
          <p className="m-8 mb-0 font-serif leading-8 font-semibold text-gray-700 ">
            Nestled in the heart of exquisite craftsmanship, Arrawali Jewellers
            is a testament to tradition, elegance, and timeless beauty. Our
            journey began with a passion for fine jewelry and a commitment to
            offering pieces that blend artistry with luxury. With years of
            dedication, we have grown into a trusted name in the world of
            jewelry, known for our impeccable designs, premium quality, and
            exceptional service.
          </p>
          <p className="m-8 lg:flex hidden font-serif leading-8 font-semibold text-gray-700 ">
            We take pride in our craftsmanship, sourcing only the finest
            materials and working with skilled artisans to bring our designs to
            life. Whether you're looking for a statement piece for a special
            occasion or a timeless treasure to cherish forever
          </p>
        </div>
        <div className="lg:w-1/2 lg:mt-5 w-full">
          <img
            className="h-fit w-full"
            src="https://images.unsplash.com/photo-1610223515982-5bae48b7c2c2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className="h-screen w-full flex flex-col lg:mt-0 lg:flex-row ">
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:m-10  items-center">
          <h1 className="text-2xl font-bold text-black">
            Why Arrawali Jewellers
          </h1>
          <p className="m-8 mb-0 font-serif leading-8 font-semibold text-gray-700 ">
            Arrawali Jewellers is renowned for its exquisite craftsmanship and
            timeless elegance. Our jewelry is meticulously designed, blending
            tradition with contemporary aesthetics to create pieces that are
            both beautiful and meaningful. We take pride in using only the
            finest materials, ensuring each piece maintains its brilliance and
            value for years to come. With a deep-rooted legacy in the jewelry
            industry,
          </p>
          <p className="m-8 lg:flex hidden font-serif leading-8 font-semibold text-gray-700 ">
            you're searching for a statement piece or a cherished keepsake,
            Arrawali Jewellers is the perfect destination to find jewelry that
            reflects your unique style and sophistication.
          </p>
        </div>
        <div className="lg:w-1/2 flex items-center h-screen w-full">
          <img
            className="h-fit w-full"
            src="https://img.freepik.com/free-photo/female-sales-person-jewelry-shop_1303-30678.jpg?t=st=1741240782~exp=1741244382~hmac=5f2e84bf78d2c552968a6fd74a638d8278e0942a8a3719baff5ba47f7fc62e86&w=1800"
            alt=""
          />
        </div>
      </div>
      <Featuring />
    </div>
  );
}
