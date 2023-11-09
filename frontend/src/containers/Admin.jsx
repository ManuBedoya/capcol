import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { urlGetProducts } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Admin = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(urlGetProducts)
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
      <Table className="striped bordered hover">
        <thead>
          <tr>
            <th>Id de Producto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Description</th>
            <th>identification</th>
            <th>Imagenes</th>
            <th>Variantes</th>
          </tr>
        </thead>
        <tbody>
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
              identification,
            }) => {
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{ammount}</td>
                  <td>{price}</td>
                  <td>{description}</td>
                  <td>{identification}</td>
                  <td>{img}</td>
                  <td>{variants}</td>
                  <td className="row">
                    <Button className="bg-secondary" size="sm">
                      Editar
                    </Button>
                    <Button className="bg-danger" size="sm">
                      Eliminar
                    </Button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
      <div className="d-md-flex flex-wrap justify-content-evenly text-center m-2">
        <Button className="m-5" onClick={() => navigate("/new-product")}>
          Agregar producto
        </Button>
      </div>
    </>
  );
};
