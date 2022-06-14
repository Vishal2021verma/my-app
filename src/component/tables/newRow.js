import react from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditUser from '../user/edituser'
const AddRow = (props) =>{
    
    const [modalShowE, setModalShowE] = react.useState(false);
    
    function handleDelete(){
        props.onDelete(props.id);

    }
    function hideModal (){
      setModalShowE(false);
    }
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditUser dataUpdate = {props.dataUpdate} dataId ={props.dataId}  hideModal={hideModal}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.number}</td>
            <td> <>
              <Button size='sm' className='userB' variant="primary" onClick={() => setModalShowE(true)}>Edit</Button>
              <MyVerticallyCenteredModal
            show={modalShowE}
            onHide={() => setModalShowE(false)}
            dataUpdate={props.onUpdate}
            dataId={props.id}
          />
              <Button size='sm' variant="danger" onClick={handleDelete}>Delete</Button>
            </></td>
        </tr>
    );

}
export default AddRow;