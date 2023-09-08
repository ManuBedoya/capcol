import "./styles/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./containers/Home";
import Error404 from "./containers/errors/Error404";
import { DetailProduct } from "./containers/DetailProduct";
import { AnimatePresence } from "framer-motion";
import { Register } from "./containers/Register";
/*import { Login } from "./containers/Login";*/

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Error404 />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail-product/:id" element={<DetailProduct />} />

        {/* Error Display*/}

        <Route exact path="/register" element={<Register />} />
        {/*  <Route exact path="/login" element={<Login />} />*/}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
