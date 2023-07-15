import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ title, author }) => (
  <>
    <li>
      {title}
      {' '}
      by
      {author}
      {' '}
      &nbsp;
      <button type="button">Remove</button>
    </li>
  </>
);

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookList;
