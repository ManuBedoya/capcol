import { Link } from "react-router-dom";
import { Card, Col, Row, InputGroup, Form, Container } from "react-bootstrap";
import { useState, useEffect, React } from "react";
import axios from "axios";
import "./../../styles/App.css";
import { urlGetProducts } from "../../constants/constants";
import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "../../firebase/firebaseService";

export default function ProductsHome() {
  const [products, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");

  const handleSearch = (e) => {
    setProductSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(urlGetProducts)
      .then(async (response) => {
        const { data } = response;
        const updateProducts = await Promise.all(
          data.map(async (product) => {
            const aux = await getDownloadURL(ref(storage, product.img.split(",")[0]));
            return {...product, img: aux};
          })
        )
        console.log(updateProducts)
        setProducts(updateProducts);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);
  return (
    <>
      <Container className="mt-3 mt-md-5 pt-md-5">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Buscar Producto"
            aria-label="Buscar Producto"
            aria-describedby="basic-addon2"
            onChange={(e) => handleSearch(e)}
          />
        </InputGroup>

        <div className="d-md-flex flex-wrap justify-content-evenly text-center m-2">
          {products.map(
            ({
              id,
              name,
              img,
              description,
              price,
              ammount,
              applyVariants,
              variants,
            }) => {
              return productSearch === "" ||
                name.toLowerCase().includes(productSearch.toLowerCase()) ? (
                <Card
                  key={id}
                  className="m-auto mb-5 w-md-30"
                  style={{ height: "600px" }}
                >
                  <Row>
                    <Col>
                      <Card.Img
                        variant="top"
                        src={img}
                        height="450px"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Link
                          to={"/detail-product/" + id}
                          className="btn btn-info position-absolute bottom-0 start-0 m-2"
                        >
                          Ver Producto
                        </Link>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ) : (
                <></>
              );
            }
          )}
        </div>
      </Container>
    </>
  );
}
