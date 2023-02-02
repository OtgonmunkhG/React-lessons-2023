import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import "./App.css";
import Main from "./pages/Main";
import SideBar from "./components/SideBar";
import Box from "@mui/material/Box";
import UserAdd from "./pages/UsersAdd";
import { useEffect, useState } from "react";
// import { fetchAllData } from "./services/axiosUserServices";

function App() {
  const URL = "http//localhost:8080/users";
  const newUser = {
    id: "",
    firstname: "",
    lastname: "",
    age: "",
    role: "",
    phonenumber: "",
    email: ""
  } 
  const [users, setUsers] = useState([])

  // useEffect(() => {
  //   fetchAllData()
  // }, [])
  // async function fetchAllData() {
  //   const FETCHED_DATA = await fetch(URL);
  //   const FETCHED_JSON = await FETCHED_DATA.json();
  //   setUsers(FETCHED_JSON.data)
  // }
  //  function handleSubmit(e) {
  //   e.preventDefault()
  //     console.log(e.target.password.value)

  // }


  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <UserAdd  />
      <Routes>
        {/* <Route  path="/users/*" element={<Users />} >
          <Route path="add" element={<UserAdd />}/>
        </Route> */}
        <Route path="/header" element={<Main />} />
      </Routes>
    </Box>
  );
}

export default App;
