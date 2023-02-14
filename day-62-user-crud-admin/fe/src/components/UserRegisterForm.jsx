import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button, InputLabel, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function UserRegisterForm() {
  const URL = "http://localhost:8080/register";
  const roleURL = "http://localhost:8080/users/roles";

  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    fetchRoles();
  }, []);

  async function fetchRoles() {
    const FETCHED_DATA = await fetch(roleURL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
    console.log(roles);
  }

  function handlSelectChange(e) {
    console.log(e.target.value);
    setCurrentRole(e.target.value);
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.firstname.value);
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
      role: currentRole,
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
    console.log(FETCHED_JSON.status === "success");
    if (FETCHED_JSON) {
      navigate("/users");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="firstname"
              variant="filled"
              size="small"
              defaultValue=""
              label="First name"
              name="fistname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastname"
              variant="filled"
              size="small"
              defaultValue=""
              label="Last name"
              name="lastname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              variant="filled"
              size="small"
              defaultValue=""
              label="Email"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              variant="filled"
              size="small"
              defaultValue=""
              label="Password"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirm-password"
              variant="filled"
              size="small"
              defaultValue=""
              label="Confirm - Password"
              name="confirmpassword"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              variant="filled"
              size="small"
              defaultValue=""
              label="Address"
              name="address"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>User Roles</InputLabel>
            <Select
              id="role-selector"
              value={currentRole}
              label="Roles"
              onChange={handlSelectChange}
            >
              {roles &&
                roles.map((role, index) => {
                  return (
                    <MenuItem key={index} value={role.id}>
                      {role.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
