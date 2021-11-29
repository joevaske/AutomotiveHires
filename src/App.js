import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';

import BlogState from './context/blog/BlogState';

import './App.css';
import BlogSingle from './components/pages/BlogSingle';

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
          </Routes>
        </Fragment>
      </Router>
    </BlogState>
  );
};

export default App;
