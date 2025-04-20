import React from "react";

function Card({ firstName, lastName, email, img, age }) {
  return (
    <div className="p-2.5 bg-gray-200 rounded">
      <div className="flex justify-center my-2">
        <img src={img} width={"70px"} />
      </div>

      <h2 className="text-xl font-semibold text-center">{`${firstName} ${lastName}`}</h2>
      <p className="text-center">Email : {`${email}`}</p>
      <p className="text-center">Age : {`${age}`}</p>
    </div>
  );
}

export default Card;
