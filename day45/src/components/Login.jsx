import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loginName: "otgonmunkh@gmail.com",
    password: "12345678",
  });
  function onSubmit(e) {
    e.preventDefault();
    console.log(e.target.password.value);
    console.log(e.target.password.value);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast("User is permitted");
      navigate("/", {
        replace: true,
        state: { bookName: "Fake Title" },
      });
    } else {
      toast("User is not permitted");
      navigate("/register", {
        replace: true,
        state: { bookName: "Fake Title" },
      });
    }
  }

  return (
    <div>
      <Header />
      <h1>Login page</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Login name:</label>
        <input name={"username"} type="email"></input>
        <br />
        <label htmlFor="password">Password:</label>
        <input name={"password"} type="password"></input>
        <br />
        <button>Sing In</button>
      </form>
      <ToastContainer />
    </div>
  );
}
