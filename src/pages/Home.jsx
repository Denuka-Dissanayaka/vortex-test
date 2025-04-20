import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../components/Card";
import Search from "../components/Search";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersData();
  }, []);

  async function fetchUsersData() {
    const res = await axios.get("https://dummyjson.com/users");

    setUsers(res.data.users);
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
        {users.map((user, i) => (
          <Card
            key={i}
            img={user.image}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
