import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Navbar1 from "../navbar/navbar1";
import Navbar2 from "../navbar/navbar2";
import Footer from "../footer/footer";
import WhatsAppButton from "../newcomponent/whatsappbutton";

const Layout = ({ children }) => {
  const location = useLocation(); // Get the current route

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scroll to top when the route changes

  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <main>{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;
