import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar2() {
  const [menu, setmenu] = useState(false);

  function menutoggle() {
    setmenu(!menu);
  }

  return (
    <div>
      <nav className="relative hidden lg:flex gap-4 items-center h-12 w-full">
        <button
          onClick={menutoggle}
          className="text-lg w-72 rounded-sm ml-5  text-white font-semibold bg-button-orange h-10"
        >
          BROWSE CATEGORIES
        </button>
        <img
          className="absolute left-8 h-6 w-6"
          src="/menu.svg"
          alt="CATEGORIES"
        />
        <div className="text-button-orange  flex font-bold gap-12 p-2 text-xl">
          <Link to="/">Home</Link>
          <Link to="/shopall">Shop All</Link>
          <Link to="/anklets">Anklets</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <div
        onMouseOut={menutoggle}
        className={`${
          menu
            ? "flex flex-col z-20 absolute left-5 p-4 border-2 text-xl gap-2 bg-button-orange text-white rounded items-start  w-72 h-72"
            : "hidden"
        }`}
      >
        <button>Home</button>
        <button>Shop All</button>
        <button>Anklets</button>
        <button>Bracelets</button>
        <button>Earrings</button>
        <button>Neckless</button>
        <button>Ring</button>
      </div>
    </div>
  );
}
