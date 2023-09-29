import { useNavigate } from "react-router-dom";
import { FormDataCustomer } from "./formDataCustomer/FormDataCustomer";
import { Modal, Button, Spinner } from "react-bootstrap";
import {
  urlBuyWithOutLogin,
  confirmBuyMessages,
  emptyFields,
  errorGenerateOrder,
} from "../../constants/constants";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";
import {
  validateTokenExpired,
  generateNewToken,
} from "../../util/validationJwt";
import { SERVICE } from "../../constants/constants";

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
    identification: "",
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
      (aux.identification &&
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
      const isExpired = validateTokenExpired();
      if (isExpired) {
        generateNewToken("001", SERVICE, SERVICE);
      }
      axios
        .post(urlBuyWithOutLogin, data, {
          headers: { Authorization: window.localStorage.getItem("jwt") },
        })
        .then(() => {
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
          swal(errorGenerateOrder, "", "error");
        });
    } else {
      swal(emptyFields, "", "error");
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
