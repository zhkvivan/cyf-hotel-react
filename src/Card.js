import React from "react";

const Card = props => {
  return (
    <div className="card text-center">
      <img src={props.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.city}</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <button type="button" className="btn btn-primary">
          More information
        </button>
      </div>
    </div>
  );
};

export default Card;
