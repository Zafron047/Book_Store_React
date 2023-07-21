import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

const BookList = ({ books }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = async () => {
    await dispatch(removeBook(books.id));
    await dispatch(fetchBooks());
  };
  return (
    <li>
      {books.title}
      {' '}
      {books.author}
      {' '}
      {books.category}
      {' '}
      <button onClick={handleRemoveBook} type="button">Remove</button>
    </li>
  );
};

BookList.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookList;
