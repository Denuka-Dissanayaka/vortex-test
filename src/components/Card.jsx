import React from "react";

function Card({ firstName, lastName, email, img, age, id, deleteHandle }) {
  return (
    <div className="p-2.5 bg-gray-200 rounded">
      <div className="flex justify-center my-2">
        <img src={img} width={"70px"} />
      </div>

      <h2 className="text-xl font-semibold text-center">{`${firstName} ${lastName}`}</h2>
      <p className="text-center">Email : {`${email}`}</p>
      <p className="text-center">Age : {`${age}`}</p>

      <div className="flex flex-row-reverse">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded cursor-pointer"
          onClick={() => {
            deleteHandle(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
