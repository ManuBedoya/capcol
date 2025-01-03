import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { url_ig, url_gmail } from "../../constants/constants";

export const Footer = () => {
  return (
    <MDBFooter className="bg-dark text-center text-white position-relative bottom-0">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            target="_blank"
            href={url_gmail}
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            target="_blank"
            href={url_ig}
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:<span> </span>
        <span className="text-white">Capcol</span>
      </div>
    </MDBFooter>
  );
};
