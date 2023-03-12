import React from "react";

const Card = ({ suit, value }) => {
  return (
    <div className='card'>
      <div className={`card-suit ${suit}`}>{suit}</div>
      <div className='card-value'>{value}</div>
    </div>
  );
};

export default Card;
