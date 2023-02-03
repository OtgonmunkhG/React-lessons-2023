import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import "./App.css";
import Main from "./pages/Main";
import SideBar from "./components/SideBar";
import Box from "@mui/material/Box";
import UserAdd from "./pages/UsersAdd";
import { useEffect, useState } from "react";
import { fetchAllData, createUsers } from "./services/axiosUserServices";
// import { create } from "@mui/material/styles/createTransitions";

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
    fetchAllData(URL, setUsers);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.password.value);
    if (!isUpdate) {
      createUsers(e, URL, setUsers);
    }
    // else {
    //   updateUsers(URL, setUsers);
    // }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      {/* <UserAdd handleSubmit={handleSubmit} /> */}
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
