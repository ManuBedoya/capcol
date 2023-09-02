import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import { ModalDetailProduct } from "../components/general/ModalDetailProduct";
import Layout from "../hocs/Layout";
import "./../styles/App.css";

export const DetailProduct = () => {
  const { state } = useLocation();

  const { name, description, price, img, ammount, applyVariants, variants } =
    state;

  const [show, setShow] = useState(false);
  const [numProducts, setNumProducts] = useState(1);
  const [variantSelected, setVariantSelected] = useState();

  let descriptionAux = description.split("\n");

  const handleShow = () => setShow(!show);

  const handleNumProducts = (e) => {
    let value = e.target.value;
    if (value <= ammount && value !== "" && value > 0) {
      setNumProducts(value);
    }
  };

  const handleSetFormSelect = (e) => {
    setVariantSelected(e.target.value);
  };

  return (
    <Layout>
      <ModalDetailProduct
        state={state}
        show={show}
        handleShow={handleShow}
        numProducts={numProducts}
        applyVariants={applyVariants}
        variant={variantSelected}
        variants={variants}
      />
      <Container className="mt-5">
        <Row>
          <Col md={12} xs={12}>
            <Image src={img} className="img-detail-product mb-5"></Image>
          </Col>
          <Col className="d-flex flex-column">
            <h1 className="text-center">{name}</h1>
            {descriptionAux.map((text) => {
              return <p key={Math.random()}>{text}</p>;
            })}
            <section className="h-100 d-flex flex-column justify-content-end">
              <h2 className="text-md-end">${price}COP</h2>
              <h6 className="text-md-end">Cantidad: </h6>
              <input
                type="number"
                value={numProducts}
                onChange={(e) => handleNumProducts(e)}
                className="align-self-md-end mb-2 text-md-end w-25"
              />
              {applyVariants ? (
                <>
                  <h6 className="text-md-end">
                    {variants.split(",").shift()}:{" "}
                  </h6>
                  <Form.Select
                    aria-label="Default select example"
                    className="align-self-md-end mb-2 w-25"
                    onChange={(e) => handleSetFormSelect(e)}
                    value={variantSelected}
                  >
                    {variants.split(",").map((variantAux, idx) => {
                      {
                        return idx !== 0 ? (
                          <option key={Math.random()}>{variantAux}</option>
                        ) : (
                          <></>
                        );
                      }
                    })}
                  </Form.Select>
                </>
              ) : (
                <></>
              )}

              <div className="d-flex justify-content-md-end">
                <Button
                  variant="success"
                  className="w-md-25"
                  onClick={handleShow}
                >
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
