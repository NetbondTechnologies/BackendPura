import Dashboard from "../dashboard";
import Loader from "../../loader/loader";
import { useState, useEffect } from "react";
export default function Adminhome() {
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
      <Dashboard />
      <div className="w-full h-72 text-xl lg:text-3xl font-bold flex justify-center items-center">
        <h1>Welcome To Admin Dashboard</h1>
      </div>
    </div>
  );
}
