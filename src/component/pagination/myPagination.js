import { useState } from "react";
import NewRow from "../tables/newRow"
import "../tables/tables.css"

const Pagination = ({ data,itemDelete,updateData, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
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
      {getPaginatedData().map((userItem, index) => (
          <NewRow 
          key={index}
          id={index}
          name={userItem.kname}
          age={userItem.age}
          number={userItem.number}
          onDelete={itemDelete}
          onUpdate={updateData}
          />
        ))}
        
      </tbody>
    </table>
        


      {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default Pagination;
