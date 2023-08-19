import { Form } from "react-bootstrap";

export const FormCustomerCredential = () => {
  return (
    <>
      <Form className="w-25">
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre de usuario" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese contraseña" />
        </Form.Group>
      </Form>
    </>
  );
};
