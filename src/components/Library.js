import React from 'react';
import BookList from './BookList';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Library = () => {
  const library = useSelector((state) => state);

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
