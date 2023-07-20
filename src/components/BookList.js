import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookList = ({ books }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(books.item_id));
  };
  return (
    <li>
      {books.title}
      {' '}
      by
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
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookList;
