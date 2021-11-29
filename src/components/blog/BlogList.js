import React, { useContext } from 'react';
import BlogContext from '../../context/blog/blogContext';
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';

const BlogList = ({ blog }) => {
  const blogContext = useContext(BlogContext);
  const { loading, getBlog } = blogContext;

  const setBlog = () => {
    getBlog(blog.id);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <li>
        <Link to={`/blog-single/${blog.id}`} onClick={setBlog}>
          {blog.title}
          <span>{blog.title2}</span>
        </Link>
      </li>
    );
  }
};

export default BlogList;
