import { Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  chooseDepartmentMessage,
  urlDepartments,
} from "../../../constants/constants";
import axios from "axios";

export const FormAddress = ({ handleSetData } = (a, b) => {}) => {
  //useStates
  const [visible, setVisible] = useState(true);
  const [selectValueDepartment, setSelectValueDepartment] = useState(
    chooseDepartmentMessage
  );
  const [departments, setDepartments] = useState([]);
  const [cities, setCities] = useState([]);

  //UseEffects
  useEffect(() => {
    axios
      .get(urlDepartments)
      .then((response) => {
        const { data } = response;
        setDepartments(data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const dpt = departments.find(
      (department) => department.name === selectValueDepartment
    );
    if (dpt !== undefined) {
      axios.get(`${urlDepartments}/${dpt.id}/cities`).then((response) => {
        const { data } = response;
        setCities(data);
      });
    }
  }, [selectValueDepartment, departments]);

  //methods
  const handleChanged = (e) => {
    let value = e.target.value;
    setSelectValueDepartment(value);
    handleSetData("department", value);
    if (value !== chooseDepartmentMessage) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <>
      <Row className="mb-3">
        <Form.Select value={selectValueDepartment} onChange={handleChanged}>
          <option>{chooseDepartmentMessage}</option>
          {departments.map((department) => {
            return (
              <option key={department.id} value={department.name}>
                {department.name}
              </option>
            );
          })}
        </Form.Select>
      </Row>
      <Row className="mb-3" hidden={visible}>
        <Form.Select onChange={(e) => handleSetData("city", e.target.value)}>
          <option>Elegir Ciudad</option>
          {cities.map((citie) => {
            return (
              <option key={citie.id} value={citie.name}>
                {citie.name}
              </option>
            );
          })}
        </Form.Select>
      </Row>
      <Row>
        <Form.Label>Ingresa tu direccion</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => handleSetData("address", e.target.value)}
        />
        <Form.Text>Ser lo mas claro y detallado posible porfavor.</Form.Text>
      </Row>
    </>
  );
};
