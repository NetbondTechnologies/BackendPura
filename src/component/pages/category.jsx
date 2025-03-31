import Collection from "../product cart/collection";
import { useEffect, useState } from "react";
import WhoWeAre from "../newcomponent/woweare";
import Loader from "../loader/loader";
export default function Category() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 500);
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
      <WhoWeAre />
    </div>
  );
}
