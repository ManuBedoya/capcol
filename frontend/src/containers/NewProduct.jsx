import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { saveFile } from "../config/configFireBase";

export const NewProduct = () => {
  const [applyVariant, setApplyVariant] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFile(file);
  };
  return (
    <>
      <Form className="m-2" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Identificación del producto</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio del producto</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Cantidad de unidades del producto</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Aplica variantes en el producto</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Si"
                name="group1"
                value={true}
                type={type}
                id={`inline-${type}-1`}
                onChange={() => setApplyVariant(true)}
              />
              <Form.Check
                inline
                label="No"
                name="group1"
                value={false}
                type={type}
                id={`inline-${type}-2`}
                onChange={() => setApplyVariant(false)}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group hidden={!applyVariant}>
          <Form.Label>Variantes del producto</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Cargar Imagenes del producto</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-2">
          Agregar Producto
        </Button>
      </Form>
    </>
  );
};
