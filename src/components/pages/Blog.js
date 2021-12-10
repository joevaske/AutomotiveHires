import React, { Fragment, useContext, useEffect } from 'react';
import HeaderBlogPage from '../header/HeaderBlogPage';
import BlogContext from '../../context/blog/blogContext';

import Loading from '../loading/Loading';
import BlogList from '../blog/BlogList';
import PageHeading from '../page-heading/PageHeading';
import Hashtag from '../hashtag/Hashtag';

const Blog = () => {
  const blogContext = useContext(BlogContext);

  const { loading, blogs, getBlogs } = blogContext;

  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <HeaderBlogPage />
        <Hashtag />
        <PageHeading headingTitle='Blog' />
        <div className='container'>
          <ul class='blog-menu-list'>
            {blogs.map((blog) => (
              <BlogList key={blog.id} blog={blog} />
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
};

export default Blog;
