import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

function EditUser(props){
  
  const [userDataE, setUserDataE] = useState({
    kname:"",
    age:"",
    number:""
});

  function handleEvent(event){
    const {name,value} = event.target;

    setUserDataE(prevData => {
      return {
        ...prevData,
        [name]:value
      };
    });

  }

  function submitUpdate(event){
    props.dataUpdate(props.dataId,userDataE);
    props.hideModal();
    event.preventDefault();

  }

    return (
        <Form>
        
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" onChange={handleEvent} value={userDataE.kname}  name="kname"/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Your age" onChange={handleEvent} value={userDataE.age}  name="age" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Your number" onChange={handleEvent} value={userDataE.number} name="number"/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitUpdate} >
          Save
        </Button>
      </Form>
    );
}
export default EditUser;
