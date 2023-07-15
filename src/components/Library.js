import React from 'react';
import BookList from './BookList';

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
        <BookList
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default Library;
