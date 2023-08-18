import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { ModalDetailProduct } from "../components/general/ModalDetailProduct";
import Layout from "../hocs/Layout";

export const DetailProduct = () => {
  const { state } = useLocation();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const { name, description, price, img, ammount } = state;
  return (
    <Layout>
      <ModalDetailProduct state={state} show={show} handleShow={handleShow} />
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
