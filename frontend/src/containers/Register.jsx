import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../hocs/Layout";
import { FormDataCustomer } from "../components/general/formDataCustomer/FormDataCustomer";
import { FormCustomerCredential } from "../components/general/formDataCustomer/FormCustomerCredential";
import { Button, Container } from "react-bootstrap";
import swal from "sweetalert";

export const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    gender: "",
    department: "",
    city: "",
    address: "",
    username: "",
    password: "",
  });

  let aux = data;
  const handleBtnCreate = () => {
    if (
      (aux.id &&
        aux.name &&
        aux.phone &&
        aux.email &&
        aux.gender &&
        aux.department &&
        aux.city &&
        aux.address &&
        aux.username &&
        aux.password) !== ""
    ) {
      setData(aux);
      swal("Muy bien, estás registrado", "", "success").then(() => {
        navigate("/login");
      });
    } else {
      swal("Campos vacios", "", "error");
    }
  };
  console.log(data);
  const handleSetData = (key = "", value = "") => {
    aux = { ...aux, [key]: value };
  };

  return (
    <Layout>
      <Container className="mb-5 mt-5">
        <h2>Datos Personales</h2>
        <FormDataCustomer handleSetData={handleSetData} />
        <h2>Creacion de Usuario</h2>
        <FormCustomerCredential
          className="w-25"
          handleSetData={handleSetData}
        />
        <Button variant="success" onClick={handleBtnCreate}>
          Crear cuenta
        </Button>
      </Container>
    </Layout>
  );
};
