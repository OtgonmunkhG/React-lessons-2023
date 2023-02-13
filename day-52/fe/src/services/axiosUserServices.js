import axios from "axios";

async function fetchAllData(URL, setUsers) {
  const FETCHED_DATA = await axios.get(URL); // Response

  setUsers(FETCHED_DATA.data.data);
}

async function deleteUser(userId, URL, setUsers) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      userId: userId,
    },
  });

  setUsers(FETCHED_DATA.data.data);
}

async function createUser(e, URL, setUsers) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: {
      username: e.target.username.value,
      age: e.target.age.value,
    },
  });
  setUsers(FETCHED_DATA.data.data);
}

async function updateUser(
  currentUser,
  URL,
  setUsers,
  setCurrentUser,
  newUser,
  setIsUpdate
) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: {
      id: currentUser.id,
      username: currentUser.username,
      age: currentUser.age,
    },
  });
  setUsers(FETCHED_DATA.data.data);
  setIsUpdate(false);
  setCurrentUser(newUser);
}

export { fetchAllData, deleteUser, updateUser, createUser };
