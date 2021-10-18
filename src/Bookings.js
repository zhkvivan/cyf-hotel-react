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
    fetch(`https://cyf-react.glitch.me/error`)
      .then(res => res.json())
      .then(data => {
        setInitialBookings(data);
        setBookings(data);
        setIsStillLoading(false);
      })
      .catch(error => {
        console.log("error", error);
        setError(true);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* {bookings.length === 0 ? (
					'Loading...'
				) : (
					<SearchResults searchResults={bookings} />
				)} */}
        {isError ? "error" : "no error"}
        {/* {isStillLoading ? (
					'Loading...'
				) : (
					<SearchResults searchResults={bookings} />
				)} */}
      </div>
    </div>
  );
};

export default Bookings;
