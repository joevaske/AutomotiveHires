import React, { Fragment, useContext, useEffect } from 'react';

import BlogContext from '../../../context/blog/blogContext';
import AdminNavigation from '../navigation/AdminNavigation';
import Loading from '../../loading/Loading';

import './AllPosts.scss';
import PostItem from '../posts/PostItem';

const AllPosts = () => {
  const blogContext = useContext(BlogContext);

  const { getBlogs, loading, blogs, getBlog } = blogContext;

  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <AdminNavigation />
        <div className='container'>
          <h4>Admin All Posts</h4>

          {blogs.map((post) => (
            <PostItem key={post.id} post={post} />

            /*    <div>
              {post.title}
              <button onClick={() => getBlog(post.id)}>Edit</button>
            </div> */
          ))}
        </div>
      </Fragment>
    );
  }
};

export default AllPosts;
