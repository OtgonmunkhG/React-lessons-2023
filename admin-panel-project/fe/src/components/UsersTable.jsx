import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Menu from "./Menu";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

const columns = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "phone number", headerName: "Phone number", width: 130 },
  { field: "mail", headerName: "E-mail", width: 130 },
  { field: "role", headerName: "Role", width: 130 },
  { field: "disabled", headerName: "Disabled", width: 130 },
  { field: "avatar", headerName: "Avatar", width: 130 },
  { field: "actions", headerName: "Actions", width: 130 },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    mail: "jon.srane@gmail.com",
    role: "user",
    disabled: "yes",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    mail: "lannaister@gmail.com",
    role: "user",
    disabled: "yes",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    mail: "jaim@gmail.com",
    role: "user",
    disabled: "yes",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    mail: "stark@gmail.com",
    role: "user",
    disabled: "yes",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    mail: "daenery@gmail.com",
    role: "admin",
    disabled: "yes",
  },
  { id: 6, lastName: "Melisandre", firstName: null, mail: null },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    mail: "clifford@gmail.com",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    mail: "rossini@gmail.com",
  },
  { id: 9, lastName: "Roxie", firstName: "Harvey", mail: "harvey@gmail.com" },
];

export default function UsersTable() {
  return (
    <div style={{ height: 400, width: "90%" , margin: "0 auto"  }} >
      <Menu />
      <Typography variant="h5" color="initial">
        User
      </Typography>
      <Stack spacing={"88%"} direction="row">
          <Button variant="contained">new</Button>
        <Button variant="contained" >
           filter
        </Button>
      </Stack>
      <DataGrid
        style={{marginTop: "5px"}}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
