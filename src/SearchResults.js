import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ searchResults }) => {
  const [rowBackgrounds, setRowBackgrounds] = useState([]);

  const highlightRow = index => {
    setRowBackgrounds(arr => {
      arr[index] = !arr[index];
      return [...arr];
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map((person, index) => {
          let values = Object.values(person);
          values.shift();

          let dateIn = moment(values[5]);
          let dateOut = moment(values[6]);
          let numberOfDays = dateOut.diff(dateIn, "days");

          return (
            <tr
              key={index}
              onClick={() => {
                highlightRow(index);
              }}
              className={
                rowBackgrounds[index] ? "selectedRow" : "unSelectedRow"
              }
            >
              {values.map((item, index) => {
                return <td key={index}>{item}</td>;
              })}
              <td>{numberOfDays}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
