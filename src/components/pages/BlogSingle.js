import React, { Fragment, useContext } from 'react';
import parse from 'html-react-parser';
import BlogContext from '../../context/blog/blogContext';

import Loading from '../loading/Loading';
import Hashtag from '../hashtag/Hashtag';
import HeaderBlogPage from '../header/HeaderBlogPage';

const BlogSingle = () => {
  const blogContext = useContext(BlogContext);

  const { loading, blog } = blogContext;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <HeaderBlogPage />
        <Hashtag />
        <div className='container'>{parse(blog.blogText)}</div>
      </Fragment>
    );
  }
};

export default BlogSingle;
