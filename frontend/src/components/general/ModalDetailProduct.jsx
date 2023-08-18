import { useNavigate } from "react-router-dom";
import { FormDataCustomer } from "./formDataCustomer/FormDataCustomer";
import { Modal, Button } from "react-bootstrap";
import { confirmBuyMessages } from "../../constants/constants";
import swal from "sweetalert";

export const ModalDetailProduct = ({ state, show, handleShow }) => {
  const navigate = useNavigate();

  const confirmOrder = () => {
    swal(confirmBuyMessages.title, confirmBuyMessages.detail, "success").then(
      () => {
        handleShow();
        navigate("/");
      }
    );
  };

  const { name, price, ammount } = state;
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
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
            {ammount}
          </p>
          <p>
            <strong>Valor: </strong>${ammount * price}
          </p>
        </div>
        <FormDataCustomer />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleShow}>
          Cancelar
        </Button>
        <Button variant="success" onClick={confirmOrder}>
          Confirmar Pedido
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
