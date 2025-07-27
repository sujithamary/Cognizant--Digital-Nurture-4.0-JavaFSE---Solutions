import React from 'react';

function Post({ title, body }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Post;
