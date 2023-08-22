import Layout from "../hocs/Layout";
import { FormCustomerCredential } from "../components/general/formDataCustomer/FormCustomerCredential";
import { Container, Button } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";

export const Login = () => {
  let credentials = {
    username: "",
    password: "",
  };

  const handleSetData = (key, value) => {
    credentials = { ...credentials, [key]: value };
  };

  const handleBtnSigIn = () => {
    swal(
      `Iniciaste Sesion, username: ${credentials.username}\npassword: ${credentials.password}`,
      "",
      "success"
    );
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
