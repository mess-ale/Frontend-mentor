import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

function createData(name, mass) {
  return { name, mass };
}

const rows = [
  createData("Calories", "277kcal"),
  createData("Carbs", "0g"),
  createData("Protein", "20g"),
  createData("Fat", "22g"),
];

function teble() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                align="left"
                sx={{
                  paddingLeft: "2rem",
                  fontFamily: "Outfit",
                  fontSize: "19px",
                  color: "hsl(30, 10%, 34%)",
                }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontFamily: "Outfit",
                  fontSize: "19px",
                  color: "hsl(332, 51%, 32%)",
                  fontWeight: 'bold'
                }}
              >
                {row.mass}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default teble;
