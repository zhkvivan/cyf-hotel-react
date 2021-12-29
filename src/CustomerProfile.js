import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        console.log(data);
      });
  }, [id]);
  return (
    <div>
      <p>Customer {id} profile</p>
      <div>
        <p>Email: {profile.email}</p>
        <p>Is customer a VIP: {profile.vip ? "yes" : "no"}</p>
        <p>Phone number: {profile.phoneNumber}</p>
      </div>
    </div>
  );
};

export default CustomerProfile;
