import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export const AlertBuySuccess = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert variant="primary">This is a alert—check it out!</Alert>
    </>
  );
};
