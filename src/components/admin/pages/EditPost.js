import React from 'react';
import EditBlogForm from '../forms/EditBlogForm';
import AdminNavigation from '../navigation/AdminNavigation';

const EditPost = () => {
  return (
    <div>
      <AdminNavigation />

      <div className='container'>
        <EditBlogForm />
      </div>
    </div>
  );
};

export default EditPost;
