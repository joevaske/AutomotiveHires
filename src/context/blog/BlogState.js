import React, { useReducer } from 'react';
import axios from 'axios';
import BlogContext from './blogContext';
import BlogReducer from './blogReducer';

import {
  GET_BLOGS,
  GET_BLOG,
  ADD_BLOG,
  EDIT_BLOG,
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
    console.log(res.data[0]);

    dispatch({
      type: GET_BLOG,
      payload: res.data[0],
    });
  };

  // Add blog   ----  create blog

  const addBlog = async (blog) => {
    setLoading();
    axios.post('http://localhost:8000/Blogs', { ...blog });

    dispatch({
      type: ADD_BLOG,
      payload: blog,
    });
  };

  // Edit Blog
  const editBlog = async (id, post) => {
    setLoading();
    axios.put(`http://localhost:8000/Blogs/${id}`, post);
    dispatch({
      type: EDIT_BLOG,
      payload: post,
    });
  };

  // Delete Blog

  const deleteBlog = (id) => {
    dispatch({
      type: DELETE_BLOG,
      payload: id,
    });
  };

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
        addBlog,
        editBlog,
        deleteBlog,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
