import "react-toastify/dist/ReactToastify.css";

import { NavbarComponent } from "../components/navegation/NavbarComponent";
import { Footer } from "../components/navegation/Footer";
import { BtnWpp } from "../components/general/BtnWpp";

const Layout = (props) => {
  return (
    <>
      <NavbarComponent />
      <BtnWpp />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
