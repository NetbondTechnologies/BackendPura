import Carousel from "../Carousel/Carousel";
import Collection from "../product cart/collection";
import Topproduct from "../product cart/topproduct";
import InfoCards from "../newcomponent/info";
import FairTradePrinciples from "../newcomponent/tradeinfromation";
import WhoWeAre from "../newcomponent/woweare";
import HelpSection from "../newcomponent/help";
import Jewelryinfo from "../newcomponent/Jewelryinfo";
import TradeBanner from "../newcomponent/tradebanner";
import VideoSection from "../newcomponent/youtubevideo";
import HomeProductCard from "../product cart/homeproduct";
import Infofairtrade from "../newcomponent/infofairtrade";
export default function Home() {
  return (
    <div>
      <Carousel />
      <Collection />
      <HomeProductCard />
      <Topproduct />
      <WhoWeAre />
      <TradeBanner />
      <Infofairtrade />
      <FairTradePrinciples />
      <Jewelryinfo />
      <InfoCards />
      <VideoSection />
      <HelpSection />
    </div>
  );
}
