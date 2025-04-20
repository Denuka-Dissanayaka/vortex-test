import React, { use, useEffect, useState } from "react";
import axios from "axios";

import Card from "../components/Card";

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

      <div className="mt-5 grid grid-cols-4 gap-4 p-5">
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
