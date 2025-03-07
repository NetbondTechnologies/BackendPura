import Shopall from "./component/pages/shopall";
import Contactus from "./component/pages/contactus";
import Sign2 from "./component/pages/sign2";
import Home from "./component/pages/home";
import Login2 from "./component/pages/login2";
import Checkoutcart from "./component/pages/checkoutpage";
import Wishlist from "./component/pages/wishlist";
import Aboutus from "./component/pages/aboutus";
import Layout from "./component/layout/layout";
import Profile from "./component/pages/profile";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./component/admin/dashboard";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login2 />}></Route>
            <Route path="/signup" element={<Sign2 />}></Route>
            <Route path="/cart" element={<Checkoutcart />}></Route>
            <Route path="/shopall" element={<Shopall />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/contactus" element={<Contactus />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
