import Topproduct from "../product cart/topproduct";
import ProductCard from "../product cart/product";
import { useState, useEffect } from "react";
import Loader from "../loader/loader";
import Collection from "../product cart/collection";
import Service from "../services/services";
import Featuring from "../product cart/featuring";
export default function Shopall() {
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
      <Collection />
      <Featuring />
      <Service />
      <ProductCard />
      <Topproduct />
    </div>
  );
}
