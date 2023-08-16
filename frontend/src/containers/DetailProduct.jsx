import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import Layout from "../hocs/Layout";
import { useState } from "react";

import { FormConfirmBuy } from "../components/content/FormConfirmBuy";

export const DetailProduct = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => setShow(!show);

  const { state } = useLocation();
  return (
    <Layout>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Datos Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>detalle pedido</h5>
          <FormConfirmBuy />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleShow}>
            Confirmar Pedido
          </Button>
          <Button variant="success" onClick={handleShow}>
            Confirmar Pedido
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className="mt-5">
        <Row>
          <Col>
            <Image src={state.img} width={"100%"}></Image>
          </Col>
          <Col className="d-flex flex-column">
            <h1 className="text-center">{state.name}</h1>
            <p>{state.description}</p>
            <section className="h-100 d-flex flex-column justify-content-end">
              <h2 className="text-end">${state.price}COP</h2>
              <div className="d-flex justify-content-end">
                <Button variant="success" className="w-25" onClick={handleShow}>
                  Realizar Pedido
                </Button>
              </div>
              <h6 className="text-end">Cantidad: {state.ammount}</h6>
            </section>
          </Col>
        </Row>
        <Row className="">
          <Col>Comentarios</Col>
        </Row>
      </Container>
    </Layout>
  );
};
