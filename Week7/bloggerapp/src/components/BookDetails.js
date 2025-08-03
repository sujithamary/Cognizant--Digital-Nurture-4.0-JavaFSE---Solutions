import React from 'react';

const books = [
  { id: 1, title: "React Essentials", author: "Dan Abramov" },
  { id: 2, title: "Learning JSX", author: "Sophie Alpert" }
];

const BookDetails = () => (
  <div>
    <h2>Book Details</h2>
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author}
        </li>
      ))}
    </ul>
  </div>
);

export default BookDetails;
