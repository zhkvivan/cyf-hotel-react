import React from "react";

import Bookings from "./Bookings";
import Header from "./Heading";
import TouristInfoCards from "./TouristInfoCards.js";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
