import { Form } from "react-bootstrap";

export const RadioBtnIsMOF = () => {
  return (
    <>
      {["radio"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Masculino"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Feminino"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </>
  );
};
