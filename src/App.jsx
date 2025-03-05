import Navbar1 from "./component/navbar/navbar1";
import ProductCard from "./component/product cart/product";
import Navbar2 from "./component/navbar/navbar2";
import Footer from "./component/footer/footer";
import Carousel from "./component/Carousel/Carousel";
import Sign2 from "./component/pages/sign2";
import Home from "./component/pages/home";
import Login2 from "./component/pages/login2";
import Checkoutcart from "./component/product cart/checkout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar1 />
        <Navbar2 />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login2 />}></Route>
          <Route path="/signup" element={<Sign2 />}></Route>
          <Route path="/cart" element={<Checkoutcart/>}></Route>
          <Route path="/shopall" element={<ProductCard/>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
