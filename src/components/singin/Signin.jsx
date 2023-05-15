import './signin.scss';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch,useSelector } from "react-redux";
import { LoginAction } from "../../redux/actions/LoginAction";
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  button: {
    height: '60px',
  },
});
const Signin = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const login=useSelector(state=>state.login)

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // useEffect(()=>{
  //   function fetchData(){
  //   if(login.){
  //   }
  //   }
  //   fetchData();
  //   });
  const handleSubmit= async()=>{
    await dispatch(LoginAction({email,password},navigate))
    setEmail("")
    setPassword("")
    console.log(email,password)
  }
    const classes = useStyles();

  return (
    <div className='signup'>
        <div className='wordsignin'>
           <h1>!Hi</h1>
           <p>By create account you will be able to like or commect </p>
        </div>
        <div className='inputsignin'>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '65ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <div className='titlesig'>
      <h2>Sign in</h2>
      <br></br>
      <p>Don't you have an account?<Link to="/signup" style={{ textDecoration:"none"}}><b>Return</b></Link></p>
      </div>
      <br></br>
      <br></br>
        <TextField 
        label="Email" 
        variant="outlined" 
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        /><br></br>
        <TextField
        label="Password"
        type="password"
        autoComplete="current-password"
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <Button
       variant="contained" 
       disableElevation 
       className={classes.button} 
       style={{ background: '#00264D', width: '67ch'}}
       onClick={handleSubmit}
       >
       {login.loading?"loading":"Login"}
    </Button>
      </Box>
        </div>
    </div>
  )
}

export default Signin