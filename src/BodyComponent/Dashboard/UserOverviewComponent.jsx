import * as React from 'react';
import { Box, Button, Card, Grid, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { useStyles } from "../BodyStyles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('SiddhuUp72', 'Siddhu Upadhyay', 'siddhuup72@gmail.com', 7080607057),
  createData('VikkuUp72', 'Vikrant Upadhyay', 'vikkuup72@gmail.com', 7080607587),
  createData('VikrantUp72', 'Vikku Upadhyay', 'vikrantup72@gmail.com', 7805845562),
  createData('Sandy', 'Sandeep Mishra', 'sandeepmishra@gmail.com', 7080640520),
  createData('Veeru', 'Sandy Veeru', 'sandyveeru@gmail.com', 7090604058),
];
export default function UserOverviewComponent() {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={7}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h6">
                Users List
              </Typography>
            </CardContent>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">EmailId</TableCell>
            <TableCell align="left">Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h6">
                Banners
              </Typography>
            </CardContent>
            <Button size="large" color="primary">
              Add Banners
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
