import Layout from "../hocs/Layout";
import { FormDataCustomer } from "../components/general/formDataCustomer/FormDataCustomer";
import { FormCustomerCredential } from "../components/general/formDataCustomer/FormCustomerCredential";
import { Button, Container } from "react-bootstrap";

export const Register = () => {
  return (
    <Layout>
      <Container>
        <h2>Datos Personales</h2>
        <FormDataCustomer />
        <h2>Creacion de Usuario</h2>
        <FormCustomerCredential />
        <Button variant="success">Crear cuenta</Button>
      </Container>
    </Layout>
  );
};
