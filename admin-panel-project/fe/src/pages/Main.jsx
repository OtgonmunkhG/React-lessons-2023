import * as React from "react";
import Paper from "@mui/material/Paper";
import Users from "./Users";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Header() {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>React Material Admin Full</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Users />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
