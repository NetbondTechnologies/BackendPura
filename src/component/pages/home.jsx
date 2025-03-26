import Carousel from "../Carousel/Carousel";
import Collection from "../product cart/collection";
import ProductCard from "../product cart/product";
import Topproduct from "../product cart/topproduct";
import { useEffect, useState } from "react";
import InfoCards from "../newcomponent/info";
import FairTradePrinciples from "../newcomponent/tradeinfromation";
import WhoWeAre from "../newcomponent/woweare";
import HelpSection from "../newcomponent/help";
import Jewelryinfo from "../newcomponent/Jewelryinfo";




import Loader from "../loader/loader";

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
      <InfoCards/>
      <Collection />
      <ProductCard />
      <Topproduct /> 
      <WhoWeAre/>
      <FairTradePrinciples/>
      <Jewelryinfo/>
      <HelpSection/>
    </div>
  );
}
