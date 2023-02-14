import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
export default function UserRegisterForm() {
  const URL = "http://localhost:8080/register";
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.firstname.value);
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
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
    console.log(FETCHED_JSON);
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
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
