import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ searchResults, sortBy }) => {
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

  searchResults = searchResults.map(obj => {
    let dateIn = moment(obj.checkInDate);
    let dateOut = moment(obj.checkOutDate);
    let numberOfNights = dateOut.diff(dateIn, "days");
    obj.numberOfNights = numberOfNights;
    console.log(obj);
    return obj;
  });

  // Sort

  function sortTable(e) {
    sortBy(e);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" name="title" onClick={sortTable}>
              Title
            </th>
            <th scope="col" name="firstName" onClick={sortTable}>
              First name
            </th>
            <th scope="col" name="surname" onClick={sortTable}>
              Surname
            </th>
            <th scope="col" name="email" onClick={sortTable}>
              Email
            </th>
            <th scope="col" name="roomId" onClick={sortTable}>
              Room ID
            </th>
            <th scope="col" name="checkInDate" onClick={sortTable}>
              Check in date
            </th>
            <th scope="col" name="checkOutDate" onClick={sortTable}>
              Check out date
            </th>
            <th scope="col" name="numberOfNights" onClick={sortTable}>
              Number of nights
            </th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((person, index) => {
            let values = Object.values(person);
            values.shift();

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
