import Layout from "../hocs/Layout";
import { FormCustomerCredential } from "../components/general/formDataCustomer/FormCustomerCredential";
import { Container, Button } from "react-bootstrap";
import { urlLogin } from "../constants/constants";
import swal from "sweetalert";
import axios from "axios";
import bcrypt from "bcryptjs";
import "./../styles/App.css";
import { useNavigate } from "react-router-dom";
import { SERVICE } from "../constants/constants";
import { validateTokenExpired, generateNewToken } from "../util/validationJwt";

export const Login = () => {
  let credentials = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleSetData = (key, value) => {
    credentials = { ...credentials, [key]: value };
  };

  const handleBtnSigIn = () => {
    if ((credentials.password && credentials.username) !== "") {
      const isExpired = validateTokenExpired();
      if (isExpired) {
        generateNewToken("001", SERVICE, SERVICE);
      }
      axios
        .get(urlLogin + credentials.username, {
          headers: { Authorization: window.localStorage.getItem("jwt") },
        })
        .then((response) => {
          const { data } = response;
          try {
            if (bcrypt.compareSync(credentials.password, data.password)) {
              swal(`Iniciaste Sesion`, "", "success");
              window.localStorage.setItem("user", credentials.username);
              navigate("/");
            } else {
              swal(`Credenciales incorrectas`, "", "error");
            }
          } catch (e) {
            swal("Usuario no regitrado", "", "error");
          }
        });
    }
  };
  return (
    <Layout>
      <Container className="d-flex flex-column mb-5 mt-5 container-login pt-md-5">
        <h2 className="mb-5 text-center">Iniciar Sesion</h2>
        <FormCustomerCredential handleSetData={handleSetData} />
        <Button className="" onClick={handleBtnSigIn}>
          Iniciar Sesion
        </Button>
      </Container>
    </Layout>
  );
};
