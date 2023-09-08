import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "./../../styles/App.css";

export const NavbarComponent = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="d-flex fixed-top justify-content-between"
    >
      <div className="d-flex align-items-center">
        <Link to="/" className="d-flex" style={{ textDecoration: "none" }}>
          <Image
            src="../images/logo.png"
            roundedCircle
            height={50}
            width={50}
          />
          <Navbar.Brand className="p-2">CAPCOL</Navbar.Brand>
        </Link>
        <Link to={"/"}>
          <Button variant="">Productos</Button>
        </Link>
      </div>
      <div className="container-buttons-nav">
        <Link to={"/login"}>
          <Button variant="outline-primary">Iniciar sesion</Button>
        </Link>
        <Link to={"/register"}>
          <Button variant="outline-success">Registrarse</Button>
        </Link>
      </div>
    </Navbar>
  );
};
