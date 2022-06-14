import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

function AddUser(props) {
    const [userData, setUserData] = useState({
        kname:"",
        age:"",
        number:""
    });

    function handleEvent(event){
        const {name,value} = event.target;
        setUserData(prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
        });
    }
     
    function submitData(event){
        props.onAdd(userData);
        props.hideModal();
        
        event.preventDefault();
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={handleEvent} value={userData.kname} name="kname"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Your age" onChange={handleEvent} value={userData.age} name="age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Your number" onChange={handleEvent} value={userData.number} name="number" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitData}>
        Submit
      </Button>
    </Form>
  );
}
export default AddUser;
