

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useQuery } from "react-query";
import { sendReq } from "../../api/api";
import { getUserProfile } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  product: string,
  quantity: number,
  customer: string,
  contact: number,
  price: number
) {
  return { product, quantity, customer, contact, price };
}

const rows = [
  createData("Frozen yoghurt", 159, "Jane", 24, 4.0),
  createData("Ice cream sandwich", 237, "Jane", 37, 4.3),
  createData("Eclair", 262, "Jane", 24, 6.0),
];

export default function DoctorOrder() {
  const classes = useStyles();

  const user = useSelector(getUserProfile);

  const [orders, setOrders] = useState<any[]>([]);

  const { isLoading } = useQuery(
    "Get Patient's order",
    async () => {
      return await sendReq({
        endpoint: `/patients/${user?.id}/orders`,
        method: "GET",
        auth: true,
      });
    },
    {
      onSuccess(data: any[]) {
        // console.log(data);
        setOrders(data);
      },
      enabled: user?.id !== undefined,
    }
  );

  console.log(isLoading, orders);

  return (
    <div>
      {" "}
      <div>
        <TableContainer component={Paper}>
          <h2>Patients In Progress</h2>
          <Table className={classes.table} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Contact</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.product}>
                  <TableCell component="th" scope="row">
                    {row.product}
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.customer}</TableCell>
                  <TableCell align="right">{row.contact}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <br />
      <br />
      <div>
        <TableContainer component={Paper}>
          <h2>Completed Cases</h2>
          <Table className={classes.table} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Contact</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.product}>
                  <TableCell component="th" scope="row">
                    {row.product}
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.customer}</TableCell>
                  <TableCell align="right">{row.contact}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

