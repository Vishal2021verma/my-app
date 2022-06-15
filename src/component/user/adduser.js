import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import "./user-style.css";

function AddUser(props) {
  const [userData, setUserData] = useState({
    kname: "",
    age: "",
    number: "",
  });
  const [errorDataN, setErrorDataN] = useState("");
  const [errorDataA, setErrorDataA] = useState("");
  const [errorDataNu, setErrorDataNu] = useState("");

  const [validated, setValidated] = useState(false);

  function handleEvent(event) {
    const { name, value } = event.target;
    setUserData((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function validationInput(){
    if (userData.kname.length === 0) {
      setErrorDataN("Name Input is required");
    }
    else{
      setErrorDataN("");
    } 
    if (userData.age < 1 || userData.age > 99) {
      setErrorDataA("Invalid Input");
    }
    else{
      setErrorDataA("");
    }
     if (userData.number.length === 0) {
      setErrorDataNu("Number Input is required");
    }
    else{
      setErrorDataNu("");
    }

  }
  //function for submitting userInput
  function submitData(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      validationInput();
      event.preventDefault();
      event.stopPropgation();
    }

    setValidated(true);
    props.onAdd(userData);
    props.hideModal();
    event.preventDefault();
  }

  return (
    <Form noValidate validated={validated} onSubmit={submitData}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          onChange={handleEvent}
          value={userData.kname}
          name="kname"
          required
        />
        <p className="error">{errorDataN}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Your age"
          onChange={handleEvent}
          value={userData.age}
          name="age"
          required
        />
        <p className="error">{errorDataA}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your number"
          onChange={handleEvent}
          value={userData.number}
          name="number"
          required
        />
        <p className="error">{errorDataNu}</p>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default AddUser;
