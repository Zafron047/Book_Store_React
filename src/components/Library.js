import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import BookList from './BookList';

const Library = () => {
  const library = useSelector((state) => state.books);

  return (
    <ul>
      {library.map((book) => (
        <BookList
          key={book.item_id}
          fields={{
            title: book.title,
            author: book.author,
            category: book.category,
          }}
        />
      ))}
    </ul>

  );
};

export default Library;
