import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import "./App.css";
import Main from "./pages/Main";
import SideBar from "./components/SideBar";
import Box from "@mui/material/Box";
import UserAdd from "./pages/UsersAdd";
import { useEffect, useState } from "react";

function App() {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    firstname: "",
    lastname: "",
    age: "",
    role: "",
    phonenumber: "",
    email: "",
  };
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    fetchedData()
  }, []);

  async function fetchedData() {
    const FETCHED_DATA = await fetch(URL)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_JSON.data.data)

  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.password.value);
    // if (!isUpdate) {
    //   const data = createUsers(e, URL);
    //   setUsers(data)
    // }
    // else {
    //   updateUsers(URL, setUsers);
    // }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <UserAdd handleSubmit={handleSubmit} />
      <Routes>
        <Route path="/users/*" element={<Users />}>
          <Route path="add" element={<UserAdd handleSubmit={handleSubmit} />} />
        </Route>
        <Route path="/header" element={<Main />} />
      </Routes>
    </Box>
  );
}

export default App;
