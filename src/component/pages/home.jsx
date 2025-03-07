import Carousel from "../Carousel/Carousel";
import Collection from "../product cart/collection";
import ProductCard from "../product cart/product";
import Topproduct from "../product cart/topproduct";
import { useEffect, useState } from "react";
import Service from "../services/services";
import Loader from "../loader/loader";
import Featuring from "../product cart/featuring";
export default function Home() {
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
      <Carousel />
      <Collection />
      <Featuring />
      <Service />
      <ProductCard />
      <Topproduct />
    </div>
  );
}
