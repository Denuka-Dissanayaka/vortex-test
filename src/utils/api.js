import axios from "axios";
async function fetchUsersData() {
  try {
    const res = await axios.get("https://dummyjson.com/users");

    return res.data.users;
  } catch (err) {
    console.log(err);
  }
}

export default fetchUsersData;
