import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

export default function Register() {
  const [formSubmited, setFormSubmites] = useState(false);
  const navigate = useNavigate();

  if (formSubmited) {
    return <Navigate to={"/login"} />;
  }

  const handleSubmit = function (event) {
    event.preventDefault();
    setFormSubmites(true);
  };
  return (
    <div>
      <Header />
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name:</label>
        <input type="username" name={"username"} /> <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name={"password"} /> <br />
        <label htmlFor="phone number">Phone Number:</label>
        <input type="phonenumber" name={"phonenumber"} /> <br />
        <button>Register</button>
      </form>
    </div>
  );
}
