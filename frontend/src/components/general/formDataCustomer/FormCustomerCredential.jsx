import { Form } from "react-bootstrap";

export const FormCustomerCredential = ({ handleSetData } = (a, b) => {}) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese nombre de usuario"
            onChange={(e) => handleSetData("username", e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese contraseña"
            onChange={(e) => handleSetData("password", e.target.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
};
