import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export const NavbarComponent = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="d-flex justify-content-between"
    >
      <Image src="./images/logo.png" roundedCircle />
      <div>
        <Button variant="outline-primary">Iniciar sesion</Button>
        <Button variant="outline-success">Registrarse</Button>
      </div>
    </Navbar>
  );
};
