import { Form } from "react-bootstrap";

export const RadioBtnIsMOF = ({ handleSetData } = (a, b) => {}) => {
  return (
    <>
      {["radio"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Masculino"
            name="group1"
            value={"Masculino"}
            type={type}
            id={`inline-${type}-1`}
            onChange={(e) => handleSetData("gender", e.target.value)}
          />
          <Form.Check
            inline
            label="Feminino"
            name="group1"
            value={"Femenino"}
            type={type}
            id={`inline-${type}-2`}
            onChange={(e) => handleSetData("gender", e.target.value)}
          />
        </div>
      ))}
    </>
  );
};
