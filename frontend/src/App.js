import "./styles/App.css";
import Button from "react-bootstrap/Button";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Button variant="primary">Primary</Button>{" "}
      </div>
    </Provider>
  );
}

export default App;
