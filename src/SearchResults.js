import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ searchResults }) => {
  const [rowBackgrounds, setRowBackgrounds] = useState([]);

  const highlightRow = index => {
    setRowBackgrounds(arr => {
      arr[index] = !arr[index];
      return [...arr];
    });
  };

  const [userId, setUserId] = useState(null);

  const showProfileBtn = id => {
    setUserId(id);
  };

  return (
    <div>
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
            <th scope="col">Show profile</th>
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
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      showProfileBtn(person.id);
                    }}
                  >
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {userId ? <CustomerProfile id={userId} /> : ""}
    </div>
  );
};

export default SearchResults;
