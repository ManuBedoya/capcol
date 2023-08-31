import { useNavigate } from "react-router-dom";
import { FormDataCustomer } from "./formDataCustomer/FormDataCustomer";
import { Modal, Button, Spinner } from "react-bootstrap";
import { confirmBuyMessages } from "../../constants/constants";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";

export const ModalDetailProduct = ({
  state,
  show,
  handleShow,
  numProducts,
  applyVariants,
  variant,
  variants,
}) => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);

  const { id, name, price } = state;
  let aux = {
    id: "",
    name: "",
    phone: "",
    email: "",
    gender: "",
    department: "",
    city: "",
    address: "",
  };

  const handleSetData = (key = "", value = "") => {
    aux = { ...aux, [key]: value };
  };

  const confirmOrder = () => {
    if (
      (aux.id &&
        aux.name &&
        aux.phone &&
        aux.email &&
        aux.gender &&
        aux.department &&
        aux.city &&
        aux.address) !== ""
    ) {
      let data = {
        productData: { id: id, ammount: numProducts },
        userData: aux,
      };
      if (applyVariants) {
        data.productData.variant = variant;
      }
      setShowSpinner(true);
      axios
        .post("http://localhost:8000/api/v1/buyWithOutLogin/", data)
        .then((response) => {
          setShowSpinner(false);
          swal(
            confirmBuyMessages.title,
            confirmBuyMessages.detail,
            "success"
          ).then(() => {
            handleShow();
            navigate("/");
          });
        })
        .catch((e) => {
          setShowSpinner(false);
          swal(
            "Error al generar el pedido, revise nuevamente los campos e intentelo de nuevo",
            "",
            "error"
          );
        });
    } else {
      swal("Campos vacios", "", "error");
    }
  };

  return (
    <>
      <Modal show={show}>
        {showSpinner ? (
          <Spinner className="m-auto" animation="border" variant="success" />
        ) : (
          <>
            <Modal.Header closeButton onClick={handleShow}>
              <Modal.Title>Datos Pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <p>
                  <strong>Producto: </strong>
                  {name}
                </p>
                <p>
                  <strong>Unidad(es): </strong>
                  {numProducts}
                </p>
                {applyVariants ? (
                  <p>
                    <strong>{variants.split(",")[0]}: </strong> {variant}
                  </p>
                ) : (
                  <></>
                )}
                <p>
                  <strong>Valor: </strong>${numProducts * price}
                </p>
              </div>
              <FormDataCustomer handleSetData={handleSetData} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleShow}>
                Cancelar
              </Button>
              <Button variant="success" onClick={confirmOrder}>
                Confirmar Pedido
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};
