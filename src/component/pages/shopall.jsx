import Topproduct from "../product cart/topproduct";
import ProductCard from "../product cart/product";
import { useState,useEffect } from "react";
import Loader from "../loader/loader";
import Footer from "../footer/footer";
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
      <ProductCard />
      <Topproduct />
     
    </div>
  );
}
