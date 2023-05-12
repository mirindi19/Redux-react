import {
    BLOG_REQUEST,
    BLOG_SUCCESS,
    BLOG_FAILURE,
  } from "../types/addBlogTypes";
  
  const initialState = {
    loading: false,
    data: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case  BLOG_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case  BLOG_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case  BLOG_FAILURE:
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
  