import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";
import React from "react";

function ProductsHome() {
  const [products, setProducts] = useState([]);

  function handlerProducts() {
    axios
      .get("http://localhost:8000/api/v1/users/")
      .then(function (response) {
        console.log("Products in request", response["data"]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }
  console.log("product antes", products);
  let data = handlerProducts();
  console.log("product despues", data);

  return (
    <div className="d-flex">
      <Card style={{ width: "25%" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Card Title Number #</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductsHome;
