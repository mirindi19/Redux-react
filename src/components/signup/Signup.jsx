import './signup.scss';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch,useSelector } from "react-redux";
import { SignupAction } from "../../redux/actions/SignupAction"
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  button: {
    height: '60px',
  },
});
const Signup = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const signup=useSelector(state=>state.signup)
  
  const [Fullname, setFullname] = React.useState("");
  const [age, setAge] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit= async()=>{
    await dispatch(SignupAction({Fullname,age,email,password},navigate))
    setFullname("")
    setAge("")
    setEmail("")
    setPassword("")
    console.log(Fullname,age,email,password)
  }
    const classes = useStyles();
  return (
    <div className='signup'>
        <div className='wordsignup'>
           <h1>!Hi</h1>
           <p>By create account you will be able to like or commect </p>
        </div>
        <div className='inputsignup'>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '65ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <div className='titlesig'>
      <h2>Signup</h2>
      <br></br>
      <p>Do you have an account?  <Link to="/signin" style={{ textDecoration:"none"}}><b style={{color: '#00264D'}}>Get started</b></Link></p>
      </div>
      <br></br>
      <br></br>
        <TextField
         label="Full Name" 
         variant="outlined"
         name="Fullname"
         value={Fullname}
         onChange={(e)=>setFullname(e.target.value)}
          /><br></br>
        <TextField
         label="Age" 
         variant="outlined" 
         name="age"
         value={age}
         onChange={(e)=>setAge(e.target.value)}
         /><br></br>
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
      {signup.loading?"loading":"create account"}
        
    </Button>
      </Box>
        </div>
    </div>
  )
}

export default Signup