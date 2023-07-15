import React from 'react';

const Library = () => {
  const array = [
    {
      title: 'The Witcher',
      author: 'Andrzej Sapkowski',
      id: 1,
    },
    {
      title: 'Titanic',
      author: 'James Cameron',
      id: 2,
    },
    {
      title: 'A song of ice and fire',
      author: 'George R. R. Martin',
      id: 3,
    },
  ];

  return (
    <ul>
      {array.map((book) => (
        <li key={book.id}>
          {book.title}
          {' '}
          by&nbsp;
          {book.author}
        </li>
      ))}
    </ul>
  );
};

export default Library;
