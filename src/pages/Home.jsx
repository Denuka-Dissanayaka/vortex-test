import React, { useEffect, useState } from "react";
import axios from "axios";
import fetchUsersData from "../utils/api";

import Card from "../components/Card";
import Search from "../components/Search";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersData()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   async function fetchUsersData() {
  //     const res = await axios.get("https://dummyjson.com/users");

  //     setUsers(res.data.users);
  //   }

  function deleteHandle(id) {
    const result = users.filter((user) => user.id !== id);
    setUsers(result);
  }

  console.log(users);
  return (
    <div>
      <h1 className="text-center mt-4 text-2xl font-semibold">
        Vortex Assessment
      </h1>

      <div className="mt-5 grid grid-cols-4 pl-5 gap-4">
        <Search data={users} setUsers={setUsers} />
      </div>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
        {users?.map((user, i) => (
          <Card
            key={i}
            img={user.image}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            age={user.age}
            id={user.id}
            deleteHandle={deleteHandle}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
