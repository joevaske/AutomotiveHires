import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../../loading/Loading';

import BlogContext from '../../../context/blog/blogContext';
import './BlogForm.scss';

const EditBlogForm = () => {
  const blogContext = useContext(BlogContext);
  const { blog, getBlog, editBlog, loading } = blogContext;

  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    title2: '',
    excerpt: '',
    blogText: '',
  });

  useEffect(() => {
    if (blog !== null) {
      setPost(blog);
    } else {
      setPost({
        title: '',
        title2: '',
        excerpt: '',
        blogText: '',
      });
    }
  }, [blogContext, blog]);

  const { id, title, title2, excerpt, blogText } = post;

  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    editBlog(id, post);

    let path = `/admin/all-posts`;
    navigate(path);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <form className='blog-form' onSubmit={onSubmit}>
        <h2>Edit Post</h2>
        <div className='form-group'>
          {' '}
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={onChange}
          />{' '}
        </div>
        <div className='form-group'>
          {' '}
          <input
            type='text'
            name='title2'
            placeholder='Subtitle'
            value={title2}
            onChange={onChange}
          />{' '}
        </div>
        <div className='form-group'>
          {' '}
          <input
            type='text'
            name='excerpt'
            placeholder='Excerpt'
            value={excerpt}
            onChange={onChange}
          />{' '}
        </div>
        <div className='form-group'>
          {' '}
          <textarea
            name='blogText'
            value={blogText}
            onChange={onChange}
            rows='4'
          >
            Add Post Content
          </textarea>
        </div>

        <input type='submit' value='Update Post' className='btn btn-medium' />
      </form>
    );
  }
};

export default EditBlogForm;
