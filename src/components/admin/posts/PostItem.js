import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlogContext from '../../../context/blog/blogContext';

const PostItem = ({ post }) => {
  const blogContext = useContext(BlogContext);
  const { deleteBlog, getBlog } = blogContext;

  const navigate = useNavigate();

  const deletePost = () => {
    deleteBlog(post.id);
    //console.log('baka');
  };

  const setBlog = () => {
    getBlog(post.id);

    let path = `/admin/edit-post/${post.id}`;
    navigate(path);
  };

  return (
    <div className='all-posts-list'>
      <div className='all-posts-list__title'>
        <h4 onClick={setBlog}>{post.title}</h4>
      </div>
      <div className='all-posts-list__action'>
        {/*  <Link to={`/admin/edit-post/${blog.id}`} onClick={setBlog}>
          Edit
        </Link> */}
        <button className='btn btn-small btn-yellow' onClick={setBlog}>
          Edit
        </button>{' '}
        <button className='btn btn-small btn-yellow' onClick={deletePost}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
