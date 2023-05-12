import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { userAction } from '../../redux/actions/userAction';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
const UserTable = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state=>state.user);
  const [user , setOrg] = useState("");
  console.log("all data ", user);
  useEffect(()=>{
    async function fetchData(){
      await dispatch(userAction());
  
    }
    fetchData();
  },[])
  useEffect(() => {
    async function fetchData() {
      if (!userData.loading) {
        if (userData.data) {
          setOrg(userData.data);
          
        }
      }
    }
    fetchData();
  }, [!userData.data]);
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Fullname&nbsp;</TableCell>
          <TableCell align="center">age&nbsp;</TableCell>
          <TableCell align="center">Email&nbsp;</TableCell>
          <TableCell align="center">Password&nbsp;</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {userData.data?.map((row) => (
        <TableRow key={row.name}>
          <TableCell component="th" scope="row">
            {row.Fullname}
          </TableCell>
          <TableCell align="center">{row.age}</TableCell>
          <TableCell align="center">{row.email}</TableCell>
          <TableCell align="center">{row.password}</TableCell>
          <TableCell align="center">
            {" "}
          
          </TableCell>
        </TableRow>
      ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default UserTable
