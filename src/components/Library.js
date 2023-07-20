import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';

const Library = () => {
  // const array = [
  //   {
  //     title: 'The Witcher',
  //     author: 'Andrzej Sapkowski',
  //     id: 1,
  //   },
  //   {
  //     title: 'Titanic',
  //     author: 'James Cameron',
  //     id: 2,
  //   },
  //   {
  //     title: 'A song of ice and fire',
  //     author: 'George R. R. Martin',
  //     id: 3,
  //   },
  // ];
  const books = useSelector((state) => state);

  return (
    <ul>
      {books.map((book) => (
        <BookList />
      ))}
    </ul>
  );
};

export default Library;
