import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAILURE,
  } from "../types/SignupTypes";
  
  const initialState = {
    loading: false,
    data: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case  USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case  USER_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case  USER_FAILURE:
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
  