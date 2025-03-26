import Shopall from "./component/pages/shopall";
import Contactus from "./component/pages/contactus";
import Sign2 from "./component/pages/sign2";
import Home from "./component/pages/home";
import Login2 from "./component/pages/login2";
import Checkout from "../src/component/newcomponent/checkout"

import Aboutus from "./component/pages/aboutus";
import Layout from "./component/layout/layout";
import Profile from "./component/pages/profile";
import AddProduct from "./component/admin/component/addproduct";
import OrderList from "./component/admin/component/orderlist";
import AdminProductList from "./component/admin/component/adminproductlist";
import AdminUserView from "./component/admin/component/adminusersview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Adminhome from "./component/admin/component/adminhome";
import SingleProduct from "./component/product cart/singleproduct";
import Category from "./component/pages/category";
import Categorycart from "./component/product cart/categorycart";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login2 />}></Route>
            <Route path="/signup" element={<Sign2 />}></Route>
            <Route path="/cart" element={<Checkout/>}></Route>
            <Route path="/shopall" element={<Shopall />}></Route>
           
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/contactus" element={<Contactus />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/userview" element={<AdminUserView />}></Route>

            {/* admin routes */}

            <Route path="/dashboard" element={<Adminhome />}></Route>
            <Route path="/addproduct" element={<AddProduct />}></Route>
            <Route path="/orderlist" element={<OrderList />}></Route>
            <Route path="/productlist" element={<AdminProductList />}></Route>
            <Route path="/singleproduct" element={<SingleProduct />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/category/bangles" element={<Categorycart/>}></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
