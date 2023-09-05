import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { url_wpp } from "../../constants/constants";
import "./../../styles/App.css";

export const BtnWpp = () => {
  return (
    <div className="container-wpp bg-dark bg-gradient rounded">
      <MDBBtn
        outline
        color="success"
        floating
        className=" text-white bg-success m-1"
        target="_blank"
        href={url_wpp}
        role="button"
      >
        <MDBIcon fab icon="whatsapp" className="w-100" />
      </MDBBtn>
      <span className="text-white text-wpp p-2">
        También puedes realizar tu pédido por WhatsApp
      </span>
    </div>
  );
};
