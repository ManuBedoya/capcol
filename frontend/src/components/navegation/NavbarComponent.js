import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";
import "./../../styles/App.css";
import swal from "sweetalert";

export const NavbarComponent = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    swal("Se cerró la sesión", "", "info");
    window.localStorage.removeItem("user");
    navigate("/");
  };

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
        {window.localStorage.getItem("user") ? (
          <>
            <h3 style={{ color: "white", display: "inline", margin: "10px" }}>
              {window.localStorage.getItem("user")}
            </h3>
            <Button variant="outline-danger" onClick={(e) => handleLogOut()}>
              Cerrar Sesion
            </Button>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button variant="outline-primary">Iniciar sesion</Button>
            </Link>
            <Link to={"/register"}>
              <Button variant="outline-success">Registrarse</Button>
            </Link>
          </>
        )}
      </div>
    </Navbar>
  );
};
