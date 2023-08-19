import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="d-flex justify-content-between"
    >
      <Link to="/" className="d-flex" style={{ textDecoration: "none" }}>
        <Image src="./images/logo.png" roundedCircle height={50} width={50} />
        <Navbar.Brand className="p-2">CAPCOL</Navbar.Brand>
      </Link>
      <div>
        <Button variant="outline-primary">Iniciar sesion</Button>
        <Link to={"/register"}>
          <Button variant="outline-success">Registrarse</Button>
        </Link>
      </div>
    </Navbar>
  );
};
