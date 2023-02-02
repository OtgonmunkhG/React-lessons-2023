import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import "./App.css";
import Main from "./pages/Main";
import SideBar from "./components/SideBar";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/header" element={<Main />} />
      </Routes>
    </Box>
  );
}

export default App;
