import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const URL = "http://localhost:8080/login";
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log(e.target.password.value);
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      toast("You are approved to Login");
      navigate("/users");
    } else {
      toast(FETCHED_JSON.status);
    }
    console.log(FETCHED_JSON);
  };
  function handleChange(e) {
    console.log(e);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}>
          <TextField
            label="E-mail"
            type="email"
            variant="filled"
            name="email"
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            name="password"
          />
          <br />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}
