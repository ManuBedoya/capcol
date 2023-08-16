import "./styles/App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Error404 from "./containers/errors/Error404";
import { DetailProduct } from "./containers/DetailProduct";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display*/}
          <Route path="*" element={<Error404 />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail-product" element={<DetailProduct />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
