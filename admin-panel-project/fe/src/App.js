import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Admin panel project</h1>
      <Routes>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
