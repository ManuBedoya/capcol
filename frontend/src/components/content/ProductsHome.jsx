import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect, React } from "react";
import axios from "axios";

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

  console.log(products.length);

  return (
    <>
      <div className="d-flex flex-wrap">
        {products.map(({ id, name, description, ammount, price }) => {
          return (
            <Card
              key={id}
              style={{ width: "25%", height: "18rem" }}
              className=""
            >
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}
