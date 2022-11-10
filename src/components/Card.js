import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div>
        <img src={data.Poster} alt="" />
        <div>
        {data.Title}
        {data.Year}
        </div>
       
      </div>
    </>
  );
};

export default Card;
