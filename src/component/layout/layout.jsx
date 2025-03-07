import Navbar1 from "../navbar/navbar1";
import Navbar2 from "../navbar/navbar2";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};
export default Layout;
