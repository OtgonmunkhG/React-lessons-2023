import UsersTable from "../components/UsersTable";
import { Box, Toolbar, Typography } from "@mui/material";
export default function Users() {
  const drawerWidth = 240;
  return (
    <Box sx={{ width: "100%" }}>
      <h1>Users page</h1>
      <UsersTable />
    </Box>
  );
}
