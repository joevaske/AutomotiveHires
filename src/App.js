import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';

import BlogState from './context/blog/BlogState';

import './App.css';
import BlogSingle from './components/pages/BlogSingle';
import AddPost from './components/admin/pages/AddPost';
import AllPosts from './components/admin/pages/AllPosts';
import EditPost from './components/admin/pages/EditPost';

const App = () => {
  return (
    <BlogState>
      <Router>
        <Fragment>
          <Routes>
            <Route path='/' element={<Home />} exact></Route>
            <Route path='/blog' element={<Blog />} exact></Route>
            <Route
              path='/blog-single/:id'
              element={<BlogSingle />}
              exact
            ></Route>
            <Route path='/admin/add-post' element={<AddPost />} exact></Route>
            <Route path='/admin/all-posts' element={<AllPosts />} exact></Route>
            <Route
              path='/admin/edit-post/:id'
              element={<EditPost />}
              exact
            ></Route>
          </Routes>
        </Fragment>
      </Router>
    </BlogState>
  );
};

export default App;
