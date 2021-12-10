import React, { useState, useContext } from 'react';
import BlogContext from '../../../context/blog/blogContext';
import './BlogForm.scss';

const BlogForm = () => {
  const blogContext = useContext(BlogContext);
  const [blog, setBlog] = useState({
    title: '',
    title2: '',
    excerpt: '',
    blogText: '',
  });

  const { title, title2, excerpt, blogText } = blog;

  const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    blogContext.addBlog(blog);
    setBlog({
      title: '',
      title2: '',
      excerpt: '',
      blogText: '',
    });
  };

  return (
    <form className='blog-form' onSubmit={onSubmit}>
      <h2>Add Post</h2>
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
        <textarea name='blogText' value={blogText} onChange={onChange} rows='4'>
          Add Post Content
        </textarea>
      </div>

      <input type='submit' value='Add Post' className='btn btn-medium' />
    </form>
  );
};

export default BlogForm;
