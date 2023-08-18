import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import { FormConfirmBuy } from "../components/content/FormConfirmBuy";
import Layout from "../hocs/Layout";
import swal from "sweetalert";

export const DetailProduct = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const confirmOrder = () => {
    swal(
      "Pedido confirmado",
      "Pronto te llegará un correo de confirmación del pedido",
      "success"
    ).then(() => {
      handleShow();
      navigate("/");
    });
  };

  const { state } = useLocation();
  const { name, description, price, img, ammount } = state;
  return (
    <Layout>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Datos Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              <strong>Producto: </strong>
              {name}
            </p>
            <p>
              <strong>Unidad(es): </strong>
              {ammount}
            </p>
            <p>
              <strong>Valor: </strong>${ammount * price}
            </p>
          </div>
          <FormConfirmBuy />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleShow}>
            Cancelar
          </Button>
          <Button variant="success" onClick={confirmOrder}>
            Confirmar Pedido
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className="mt-5">
        <Row>
          <Col>
            <Image src={img} width={"100%"}></Image>
          </Col>
          <Col className="d-flex flex-column">
            <h1 className="text-center">{name}</h1>
            <p>{description}</p>
            <section className="h-100 d-flex flex-column justify-content-end">
              <h2 className="text-end">${price}COP</h2>
              <div className="d-flex justify-content-end">
                <Button variant="success" className="w-25" onClick={handleShow}>
                  Realizar Pedido
                </Button>
              </div>
              <h6 className="text-end">Cantidad: {ammount}</h6>
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
