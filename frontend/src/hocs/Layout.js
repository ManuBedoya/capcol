import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavbarComponent } from "../components/navegation/NavbarComponent";
import { Footer } from "../components/navegation/Footer";

const Layout = (props) => {
  return (
    <div>
      <NavbarComponent />
      <ToastContainer autoClose={5000} />
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
