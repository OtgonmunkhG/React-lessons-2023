import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import "./App.css";
import Main from "./pages/Main";
import SideBar from "./components/SideBar";




function App() {
  return (
    <div className="App">
      <h1>Admin panel project</h1>

      <SideBar />
      <Routes>
        <Route path="/users" element={<Users />}/>
        <Route path="/header" element={<Main />}/>
        {/* <Route path="" */}
      </Routes>
    </div>
  );
}

export default App;
