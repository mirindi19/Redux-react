import './signin.scss';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    height: '60px',
  },
});
const Signin = () => {
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
      <p>Don't you have an account? <b>Return</b></p>
      </div>
      <br></br>
      <br></br>
        <TextField id="outlined-basic" label="Email" variant="outlined" /><br></br>
        <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button variant="contained" disableElevation className={classes.button} style={{ background: '#00264D', width: '67ch'}}>
        Login
    </Button>
      </Box>
        </div>
    </div>
  )
}

export default Signin