
// import Table from "react-bootstrap/Table";
import NewRow from "./newRow";
import './tables.css';
import Pagination from "../pagination/myPagination";

const Tables = (props) => {
  const pageNum = Math.ceil(props.userInfo.length / 5);
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
        {props.userInfo.length > 5 ?(
          <>
          <Pagination 
          data={props.userInfo}
          itemDelete={props.itemDelete}
          updateData={props.updateData}
          pageLimit={pageNum}
          dataLimit={5}
          />
          </>
        ) : (props.userInfo.map((userItem, index) => {
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
        })) }

        {/* { */}
      </tbody>
    </table>
  );
};

export default Tables;
