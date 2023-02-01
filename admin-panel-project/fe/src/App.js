import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import "./App.css";
import Header from "./pages/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <h1>Admin panel project</h1>
      <SideBar />
      <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/header" element={<Header />}></Route>
      </Routes>
    </div>
  );
}

export default App;
