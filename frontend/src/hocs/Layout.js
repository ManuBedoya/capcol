import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "../components/navegation/Navbar";
import { Footer } from "../components/navegation/Footer";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <ToastContainer autoClose={5000} />
      {props.children}
      <Footer />
    </div>
  );
};
