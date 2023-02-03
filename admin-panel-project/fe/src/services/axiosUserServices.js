import axios from "axios";

async function fetchAllData(URL, setUsers) {
  const FETCHED_DATA = await axios.get(URL);
  console.log(FETCHED_DATA.data.data);
  setUsers(FETCHED_DATA.data.data);
}
async function createUsers(URL, setUsers, e) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: {
      email: e.target.email.value,
      name: e.target.name.value,
      age: e.target.age.value,
      role: e.target.role.value,
      gender: e.target.gender.value,
    },
  });
  setUsers(FETCHED_DATA.data.data);
}

// async function updateUsers(URL, setUsers) {
//     const FETCHED_DATA = await axios({
//         url: URL,
//         method: "PUT",
//         data: {

//         }
//     })
// }

export { fetchAllData, createUsers };
