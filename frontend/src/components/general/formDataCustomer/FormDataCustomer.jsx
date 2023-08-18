import { Form, Row, Col } from "react-bootstrap";
import { RadioBtnIsMOF } from "./RadioBtnIsMOF";
import { FormAddress } from "./FormAddress";

export const FormDataCustomer = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo electronico"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Telefono/Celular</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese su numero de contacto"
        />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre completo"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Documento de identidad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese su numero de identidad"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <RadioBtnIsMOF />
      </Row>
      <Row>
        <FormAddress />
      </Row>
    </Form>
  );
};
