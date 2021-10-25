import React, { useState, useEffect } from "react";
import CreateNewBooking from "./CreateNewBooking.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from './data/fakeBookings.json';

const Bookings = () => {
  const search = searchVal => {
    setBookings(initialBookings);
    console.info("TO DO!", searchVal);
    let filteredBookings = initialBookings.filter(booking => {
      if (
        booking.firstName.toLowerCase() == searchVal.toLowerCase() ||
        booking.surname.toLowerCase() == searchVal.toLowerCase()
      ) {
        return true;
      }
    });
    setBookings(filteredBookings);
  };

  const [bookings, setBookings] = useState([]);

  let [initialBookings, setInitialBookings] = useState([]);

  const [isStillLoading, setIsStillLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    let error = false;
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => {
        if (!res.ok) {
          error = true;
          setError(true);
          setIsStillLoading(false);
        }
        return res.json();
      })
      .then(data => {
        if (!error) {
          setInitialBookings(data);
          setBookings(data);
          setIsStillLoading(false);
        }
      });
  }, []);

  // Getting new booking from the adding form
  function addNewBooking(newBooking) {
    console.log(newBooking);
    let newArray = [...bookings];
    newArray.push(newBooking);
    console.log(newArray);
    setBookings(newArray);
  }

  function sortBy(e) {
    console.log(e.target.attributes.getNamedItem("name").value);
    let sortedBookings = [...bookings];

    function sortByValue(value) {
      sortedBookings.sort((a, b) => {
        let nameA, nameB;
        if (typeof a[value] === "number" && typeof b[value] === "number") {
          nameA = a[value];
          nameB = b[value];
        } else {
          nameA = a[value].toLowerCase();
          nameB = b[value].toLowerCase();
        }

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }

    // Check if arrays are the same for reversing
    function checkArrays(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }

    function sorting() {
      let parameterForSort = e.target.attributes.getNamedItem("name").value;

      sortByValue(parameterForSort);
      if (checkArrays(bookings, sortedBookings)) {
        sortedBookings.reverse();
      }
    }

    sorting();
    setBookings(sortedBookings);
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <CreateNewBooking addNewBooking={addNewBooking} />
        {isError && "Loading error"}
        {isStillLoading ? "Loading" : ""}
        {!isError && !isStillLoading && (
          <SearchResults searchResults={bookings} sortBy={sortBy} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
