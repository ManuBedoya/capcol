import Layout from "../hocs/Layout";
import { FormCustomerCredential } from "../components/general/formDataCustomer/FormCustomerCredential";
import { Container, Button } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import bcrypt from "bcryptjs";

export const Login = () => {
  let credentials = {
    username: "",
    password: "",
  };

  const handleSetData = (key, value) => {
    credentials = { ...credentials, [key]: value };
  };

  const handleBtnSigIn = () => {
    if ((credentials.password && credentials.username) !== "") {
      axios
        .get("http://localhost:8000/api/v1/getUser/" + credentials.username)
        .then((response) => {
          const { data } = response;
          if (bcrypt.compareSync(credentials.password, data.password)) {
            swal(`Iniciaste Sesion`, "", "success");
          } else {
            swal(`Credenciales incorrectas`, "", "error");
          }
        });
    }
  };
  return (
    <Layout>
      <Container className="d-flex flex-column w-25 mb-5 mt-5">
        <h2 className="mb-5 text-center">Iniciar Sesion</h2>
        <FormCustomerCredential handleSetData={handleSetData} />
        <Button className="" onClick={handleBtnSigIn}>
          Iniciar Sesion
        </Button>
      </Container>
    </Layout>
  );
};