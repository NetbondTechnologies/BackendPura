import { useEffect } from "react";
import Navbar1 from "../navbar/navbar1";
import Navbar2 from "../navbar/navbar2";
import Footer from "../footer/footer";
import WhatsAppButton from "../newcomponent/whatsappbutton";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]); // Scrolls to top when children change

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
