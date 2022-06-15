import react, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddUser from "./adduser";
import "./user-style.css";
import Pagination from "../pagination/myPagination";

function Users() { 

  const [modalShow, setModalShow] = react.useState(false);
  //main userdata variable hook
  const [data, setData] = useState([]);

  //Add user data
  function addData(newData) {
    setData((prevNote) => {
      return [...prevNote, newData];
    });
  }

  //delete user data
  function deleteItem(id){
    setData(prevData => {
      return prevData.filter((dataItem, index)=> {
        console.log(index);
        return index !== id;
      });
    });

  }
  //update userData
  function updateData(id,newValue){
    const newArr = [...data];
    newArr[id] = newValue;
    setData(newArr);
  }

  //function will hide modal after submission of form
  function hideModal (){
    setModalShow(false);
  }

  const pageNum = Math.ceil(data.length / 5);

  //modal function
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <AddUser onAdd={addData}  hideModal={hideModal}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  return (
    <div className="main-div">
      <div className="headAdd">
        <div>
          <h2>Users</h2>
        </div>
        <div>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            + Add User
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
      <div className="table-div">
        {data.length > 0 ? (
          <>
          <Pagination 
          data={data}
          itemDelete={deleteItem}
          updateData={updateData}
          pageLimit={pageNum}
          dataLimit={5}
          />
          </>
          // <Tables userInfo={data} itemDelete={deleteItem} updateData={updateData}/>
        ): (<h4 style={{color:"darkgrey"}}>No Data</h4>)}
      </div>
    </div>
  );
}

export default Users;
