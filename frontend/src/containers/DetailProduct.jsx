import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  FormSelect,
} from "react-bootstrap";
import { ModalDetailProduct } from "../components/general/ModalDetailProduct";
import Layout from "../hocs/Layout";

export const DetailProduct = () => {
  const { state } = useLocation();

  const [show, setShow] = useState(false);
  const [numProducts, setNumProducts] = useState(1);

  const { name, description, price, img, ammount } = state;

  const handleShow = () => setShow(!show);

  const handleNumProducts = (e) => {
    if (
      e.target.value <= ammount &&
      e.target.value !== "" &&
      e.target.value > 0
    ) {
      setNumProducts(e.target.value);
    }
  };

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
              <h6 className="text-end">Cantidad: </h6>
              <input
                type="number"
                value={numProducts}
                onChange={(e) => handleNumProducts(e)}
                className="align-self-end mb-2 text-end"
              />

              <div className="d-flex justify-content-end">
                <Button variant="success" className="w-25" onClick={handleShow}>
                  Realizar Pedido
                </Button>
              </div>
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
