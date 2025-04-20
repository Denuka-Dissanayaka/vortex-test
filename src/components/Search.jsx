import React, { useState, useEffect } from "react";
import axios from "axios";

function Search({ data, setUsers }) {
  const [search, setSearch] = useState("");
  //const [user, setUser] = useState([]);

  useEffect(() => {
    if (search === "") {
      fetchUsersData();
    }
  }, [search]);

  async function fetchUsersData() {
    const res = await axios.get("https://dummyjson.com/users");

    setUsers(res.data.users);
  }

  function handleSearch(value) {
    setSearch(value);
    const lowerSearchTerm = value.toLowerCase();
    const result = data.filter((user) =>
      user.firstName.toLowerCase().includes(lowerSearchTerm)
    );
    console.log(result);
    setUsers(result);
  }
  return (
    <input
      type="text"
      name="name"
      value={search}
      onChange={(e) => {
        if (e.target.value) {
        }
        handleSearch(e.target.value);
      }}
      id="name"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      placeholder="Search By Name"
    />
  );
}

export default Search;
