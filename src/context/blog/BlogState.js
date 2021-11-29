import React, { useReducer } from 'react';
import axios from 'axios';
import BlogContext from './blogContext';
import BlogReducer from './blogReducer';

import {
  GET_BLOGS,
  GET_BLOG,
  CREATE_BLOG,
  DELETE_BLOG,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const BlogState = (props) => {
  const initialState = {
    blogs: [],
    blog: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  // Get blogs

  const getBlogs = async () => {
    setLoading();
    const res = await axios.get('http://localhost:8000/Blogs');
    dispatch({
      type: GET_BLOGS,
      payload: res.data,
    });
  };

  // Get blog

  const getBlog = async (id) => {
    setLoading();
    const res = await axios.get(`http://localhost:8000/Blogs?id=${id}`);

    dispatch({
      type: GET_BLOG,
      payload: res.data,
    });
  };

  // Create blog

  // Edit Blog

  // Delete Blog

  // Set Loading

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        blog: state.blog,
        loading: state.loading,
        getBlogs,
        getBlog,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
