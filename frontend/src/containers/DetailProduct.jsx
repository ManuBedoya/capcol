import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ModalDetailProduct } from "../components/general/ModalDetailProduct";
import Layout from "../hocs/Layout";
import "./../styles/App.css";
import { CarrouselImages } from "../components/general/CarrouselImages";
import { motion } from "framer-motion";
import axios from "axios";
import { urlGetProducts } from "../constants/constants";

export const DetailProduct = () => {
  const [show, setShow] = useState(false);
  const [numProducts, setNumProducts] = useState(1);
  const [variantSelected, setVariantSelected] = useState();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    img: "",
    ammount: 0,
    applyVariants: false,
    variants: "",
  });

  const { id } = useParams();

  const handleShow = () => setShow(!show);

  const handleNumProducts = (e) => {
    let value = e.target.value;
    if (value <= productData["ammount"] && value !== "" && value > 0) {
      setNumProducts(value);
    }
  };

  const handleSetFormSelect = (e) => {
    setVariantSelected(e.target.value);
  };

  useEffect(() => {
    axios
      .get(urlGetProducts + id)
      .then((response) => {
        const { data } = response;
        setProductData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <motion.main
      className="main__container"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Layout>
        <ModalDetailProduct
          state={productData}
          show={show}
          handleShow={handleShow}
          numProducts={numProducts}
          applyVariants={productData["applyVariants"]}
          variant={variantSelected}
          variants={productData["variants"]}
        />
        <Container className="mt-md-5 pt-md-5">
          <Row>
            <Col md={12} xs={12}>
              <CarrouselImages img={productData["img"]} />
            </Col>
            <Col className="d-flex flex-column">
              <h1 className="text-center">{productData["name"]}</h1>
              {productData["description"].split("\n").map((text) => {
                return <p key={Math.random()}>{text}</p>;
              })}
              <section className="h-100 d-flex flex-column justify-content-end">
                <h2 className="text-md-center">${productData["price"]}COP</h2>
                <h6 className="text-md-center">Cantidad: </h6>
                <input
                  type="number"
                  value={numProducts}
                  onChange={(e) => handleNumProducts(e)}
                  className="align-self-md-center mb-2 text-md-end w-25"
                />
                {productData["applyVariants"] ? (
                  <>
                    <h6 className="text-md-end">
                      {productData["variants"].split(",").shift()}:{" "}
                    </h6>
                    <Form.Select
                      aria-label="Default select example"
                      className="align-self-md-end mb-2 w-25"
                      onChange={(e) => handleSetFormSelect(e)}
                      value={variantSelected}
                    >
                      {productData["variants"]
                        .split(",")
                        .map((variantAux, idx) => {
                          return idx !== 0 ? (
                            <option key={Math.random()}>{variantAux}</option>
                          ) : (
                            <></>
                          );
                        })}
                    </Form.Select>
                  </>
                ) : (
                  <></>
                )}

                <div className="d-flex justify-content-md-center">
                  <Button
                    variant="success"
                    className="w-md-25 mb-5"
                    onClick={handleShow}
                  >
                    Realizar Pedido
                  </Button>
                </div>
              </section>
            </Col>
          </Row>
          <Row className="">
            <Col>{/*  Comentarios */}</Col>
          </Row>
        </Container>
      </Layout>
    </motion.main>
  );
};
