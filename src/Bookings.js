import React, { useState, useEffect } from "react";
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
    fetch(`https://cyf-react.glitch.me/error`)
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

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isError && "Loading error"}
        {isStillLoading ? "Loading" : ""}
        {!isError && !isStillLoading && (
          <SearchResults searchResults={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
