import React, { useState } from "react";
// let id = 100;

const CreateNewBooking = props => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");

  function update(e) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "surname") {
      setSurame(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "roomId") {
      setRoomId(e.target.value);
    } else if (e.target.name === "dateIn") {
      setDateIn(e.target.value);
    } else if (e.target.name === "dateOut") {
      setDateOut(e.target.value);
    }
  }

  function addBookingBtn(e) {
    e.preventDefault();

    if (
      title.length === 0 ||
      name.length === 0 ||
      surname.length === 0 ||
      email.length === 0 ||
      roomId.length === 0 ||
      !dateIn ||
      !dateOut
    ) {
      alert("Fill out each field");
      return;
    }

    let newBooking = {
      // id: id,
      title: title,
      firstName: name,
      surname: surname,
      email: email,
      roomId: roomId,
      checkInDate: dateIn,
      checkOutDate: dateOut
    };

    props.addNewBooking(newBooking);
    // id += 1;

    setTitle("");
    setName("");
    setSurame("");
    setEmail("");
    setRoomId("");
    setDateIn("");
    setDateOut("");
  }

  return (
    <form>
      <div>Add new Booking</div>
      <input
        type="text"
        name="title"
        value={title}
        className="form-control"
        placeholder="Title"
        onChange={update}
      />
      <input
        type="text"
        name="name"
        value={name}
        className="form-control"
        placeholder="First name"
        onChange={update}
      />
      <input
        type="text"
        name="surname"
        value={surname}
        className="form-control"
        placeholder="Surname"
        onChange={update}
      />
      <input
        type="email"
        name="email"
        value={email}
        className="form-control"
        placeholder="Email"
        onChange={update}
      />
      <input
        type="number"
        name="roomId"
        value={roomId}
        className="form-control"
        placeholder="Room ID"
        onChange={update}
      />
      <label htmlFor="checkInDate">Check in date</label>
      <input
        type="date"
        name="dateIn"
        value={dateIn}
        id="checkInDate"
        className="form-control"
        placeholder="Check in date"
        onChange={update}
      />
      <label htmlFor="checkOutDate">Check out date</label>
      <input
        type="date"
        name="dateOut"
        value={dateOut}
        className="form-control"
        id="checkOutDate"
        placeholder="Check out date"
        onChange={update}
      />

      <button className="btn btn-primary" onClick={addBookingBtn}>
        Add booking
      </button>
    </form>
  );
};

export default CreateNewBooking;
