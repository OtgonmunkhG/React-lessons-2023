import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    username: "",
    age: "",
  })

  const URL = "http://localhost:8080/users";

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    //fetch a data from localhost:8080/users
    const FETCHED_DATA = await fetch(URL); //response
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: "success" , data: [{id: ...}]}
    setUsers(FETCHED_JSON.data);
  }

  console.log(users);

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      username: e.target.username.value,
      age: e.target.age.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }
  async function handleDelete(userId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }
  async function handleEdit(userId) {
    const options = {
      method: "UPDATE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }
  return (
    <div className="App">
      <h1>Day-52 NodeJS FS Module</h1>
      <h3>Create user Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input name="username" value={currentUser.username}></input>
        </label>{" "}
        <br /> <br />
        <label>
          Age:
          <input name="age" value={currentUser.age}></input>
        </label>{" "}
        <br /> <br />
        <button>Submit</button>
      </form>
      <h3>Users List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user.username} : {user.age}{" "}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
