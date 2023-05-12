import axios from "axios";
import {
    DBLOG_REQUEST,
    DBLOG_SUCCESS,
    DBLOG_FAILURE,
  } from "../types/displayBlogTypes";
export const displayBlogAction = () => async (dispatch) => {

  try {
    dispatch(blogRequest());

    const res = await axios.get(
      `http://localhost:2000/blog/`
);
    const displayblog = await res.data;
    dispatch(blogSuccess(displayblog.data));
    console.log("our organization",displayblog);
  } catch (err) {
    console.log(err);
    if (err.response) {
      const errorMessage = await err.response.data.message;
      dispatch(blogFailure(errorMessage));
    } else {
      dispatch(blogFailure("Network  Error"));
    }
  }
};

export const blogRequest = () => {
  return {
    type: DBLOG_REQUEST,
  };
};

export const blogSuccess = (displayblogs) => {
  return {
    type: DBLOG_SUCCESS,
    payload: displayblogs,
  };
};
export const blogFailure = (error) => {
  return {
    type: DBLOG_FAILURE,
    payload: error,
  };
};