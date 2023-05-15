import './blog.scss';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from '../siderbar/Siderbar';
import Topbar from '../topbar/Topbar';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { displayBlogAction } from '../../redux/actions/displayBlogAction';

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

const Blog = () => {


  const dispatch = useDispatch();
  const blogData = useSelector(state=>state.displayblog);
  const [displayblog , setOrg] = useState("");
  console.log("all data ", displayblog);
  useEffect(()=>{
    async function fetchData(){
      await dispatch(displayBlogAction());
  
    }
    fetchData();
  },[])
  useEffect(() => {
    async function fetchData() {
      if (!blogData.loading) {
        if (blogData.data) {
          setOrg(blogData.data);
          
        }
      }
    }
    fetchData();
  }, [!blogData.data]);

  return (
    <div className='blog'>
    <Sidebar/>
    <div className='topbarBlog'>
    <Topbar/>
    <div className='blogTable'>
    <TableContainer component={Paper} className='containerTable'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>title</TableCell>
          <TableCell align="center">content</TableCell>
          <TableCell align="center">Image</TableCell>
          <TableCell align="center">Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {blogData.data?.map((row) => (
        <TableRow key={row.name}>
          <TableCell component="th" scope="row">
            {row.title}
          </TableCell>
          <TableCell align="center">{row.content}</TableCell>
          <TableCell align="center">{row.image}</TableCell>
          <TableCell align="center">{row.date}</TableCell>
          <TableCell align="center">
            {" "}
          
          </TableCell>
        </TableRow>
      ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  </div>
  </div>
  )
}

export default Blog