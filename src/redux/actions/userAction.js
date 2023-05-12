import axios from "axios";
import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAILURE,
  } from "../types/userTypes";
export const userAction = () => async (dispatch) => {

  try {
    dispatch(userRequest());
    const token = await localStorage.getItem("access-token");
    let headers;
    if (token) {
      headers = {
        "Content-Type": "application/json",
        token: `${token}`,
      };
    } else {
      headers = {
        "Content-Type": "application/json",
      };
    }
    const res = await axios.get(
      `http://localhost:2000/auth/`,
      {
        headers: headers,
      });
    const dcollection = await res.data;
    dispatch(userSuccess(dcollection.data));
    console.log("our organization",dcollection);
  } catch (err) {
    console.log(err);
    if (err.response) {
      const errorMessage = await err.response.data.message;
      dispatch(userFailure(errorMessage));
    } else {
      dispatch(userFailure("Network  Error"));
    }
  }
};

export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess = (displayuser) => {
  return {
    type: USER_SUCCESS,
    payload: displayuser,
  };
};
export const userFailure = (error) => {
  return {
    type: USER_FAILURE,
    payload: error,
  };
};