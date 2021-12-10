import React, { Fragment } from 'react';
import BlogForm from '../forms/BlogForm';
import AdminNavigation from '../navigation/AdminNavigation';

const AddPost = () => {
  return (
    <Fragment>
      <AdminNavigation />
      <div className='container'>
        <BlogForm />
      </div>
    </Fragment>
  );
};

export default AddPost;
