import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';


const BookList = ({ books }) => {
  const dispatch = useDispatch();
  const handleRemoveBook(removeBook())

  return (
    <li key={book.item_id}>
      {book.title} by {book.author}
      <button type="button" onClick={() => handleRemoveBook(book.item_id)}>
        Remove
      </button>
    </li>
  );
}
BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookList;
