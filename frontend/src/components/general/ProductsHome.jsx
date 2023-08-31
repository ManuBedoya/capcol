import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect, React } from "react";
import axios from "axios";
import "./../../styles/App.css";

export default function ProductsHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/products/")
      .then(function (response) {
        const { data } = response;
        setProducts(data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);
  return (
    <>
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
            return (
              <Card
                key={id}
                className="m-auto mb-5"
                style={{ height: "600px" }}
              >
                <Row>
                  <Col>
                    <Card.Img variant="top" src={img} height="450px" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Link
                        to={"/detail-product"}
                        state={{
                          id: id,
                          name: name,
                          img: img,
                          description: description,
                          price: price,
                          ammount: ammount,
                          applyVariants: applyVariants,
                          variants: variants,
                        }}
                        className="btn btn-info position-absolute bottom-0 start-0 m-2"
                      >
                        Ver Producto
                      </Link>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            );
          }
        )}
      </div>
    </>
  );
}
