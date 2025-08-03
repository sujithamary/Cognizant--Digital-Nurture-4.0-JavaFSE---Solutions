import React from 'react';

const blogs = [
  { id: 101, title: "Why React?", author: "Andrew Clark" },
  { id: 102, title: "React vs Angular", author: "Ryan Florence" }
];

const BlogDetails = () => (
  <div>
    <h2>Blog Details</h2>
    <ul>
      {blogs.map(blog => (
        <li key={blog.id}>
          <strong>{blog.title}</strong> - {blog.author}
        </li>
      ))}
    </ul>
  </div>
);

export default BlogDetails;
