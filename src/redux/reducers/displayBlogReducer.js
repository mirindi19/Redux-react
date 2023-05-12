import {
    DBLOG_REQUEST,
    DBLOG_SUCCESS,
    DBLOG_FAILURE,
  } from "../types/displayBlogTypes";
  
  const initialState = {
    loading: false,
    data: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case  DBLOG_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case  DBLOG_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case  DBLOG_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  