import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavigation.scss';

const AdminNavigation = () => {
  return (
    <div className='admin-navigation'>
      <ul>
        <li>
          <Link to='/admin/all-posts'>All posts</Link>
        </li>
        <li>
          <Link to='/admin/add-post'>Add New Post</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavigation;
