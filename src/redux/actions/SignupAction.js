import axios from "axios";
import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAILURE,
  } from "../types/SignupTypes";
export const SignupAction = (data,navigate) => async (dispatch) => {
  const {Fullname}=data
  const {age}=data
  const {email}=data 
  const {password}=data
  try {
    dispatch(registerRequest());

console.log("our data",data)
    const res = await axios.post(
      `http://localhost:2000/auth/signup`,
      { 
    Fullname:Fullname,
    age:age,
    email:email,   
    password:password,
       },
    );
    const org = await res.data;
    dispatch(registerSuccess({ data: org.data }));
    alert(" successfully");
    navigate('/signin', { replace: true });
   
  } catch (err) {
    console.log(err);
    if (err.response) {
      const errorMessage = await err.response.data.message;
      dispatch(registerFailure(errorMessage));
    } else {
      dispatch(registerFailure("Network  Error"));
    }
  }
};

export const registerRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const registerSuccess = (user) => {
  return {
    type: USER_SUCCESS,
    payload: user,
  };
};
export const registerFailure = (error) => {
  return {
    type: USER_FAILURE,
    payload: error,
  };
};