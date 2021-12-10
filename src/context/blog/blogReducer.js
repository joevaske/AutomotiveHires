import {
  GET_BLOGS,
  GET_BLOG,
  ADD_BLOG,
  EDIT_BLOG,
  DELETE_BLOG,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  RESET_BLOG,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };
    case GET_BLOG:
      return {
        ...state,
        blog: action.payload,
        loading: false,
      };

    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
        loading: false,
      };
    case EDIT_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === action.payload.id ? action.payload : blog
        ),
        loading: false,
      };

    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
