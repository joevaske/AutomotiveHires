import React, { Fragment, useContext, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import BlogContext from '../../context/blog/blogContext';

import Loading from '../loading/Loading';
import Hashtag from '../hashtag/Hashtag';
import HeaderBlogPage from '../header/HeaderBlogPage';

import PageHeading from '../page-heading/PageHeading';

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
        <PageHeading headingTitle={blog[0].title} />
        <div className='container'>{parse(blog[0].text)}</div>
      </Fragment>
    );
  }
};

export default BlogSingle;
