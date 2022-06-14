
// import Table from "react-bootstrap/Table";
import NewRow from "./newRow";
import './tables.css';

const Tables = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.userInfo.map((userItem, index) => {
          return (
           <NewRow 
           key={index}
           id={index}
           name={userItem.kname}
           age={userItem.age}
           number={userItem.number}
           onDelete={props.itemDelete}
           onUpdate={props.updateData}
           />
          );
        })}
      </tbody>
    </table>
  );
};

export default Tables;
