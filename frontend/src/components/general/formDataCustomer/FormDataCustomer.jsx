import { Form, Row, Col } from "react-bootstrap";
import { RadioBtnIsMOF } from "./RadioBtnIsMOF";
import { FormAddress } from "./FormAddress";

export const FormDataCustomer = ({ handleSetData } = (a, b) => {}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo electronico"
          onChange={(e) => handleSetData("email", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Telefono/Celular</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese su numero de contacto"
          onChange={(e) => handleSetData("phone", e.target.value)}
        />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre completo"
              onChange={(e) => handleSetData("name", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Documento de identidad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese su numero de identidad"
              onChange={(e) => handleSetData("id", e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <RadioBtnIsMOF handleSetData={handleSetData} />
      </Row>
      <Row>
        <FormAddress handleSetData={handleSetData} />
      </Row>
    </Form>
  );
};
