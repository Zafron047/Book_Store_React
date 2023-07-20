import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ fields }) => {
  const { title, author, category } = fields;
  return (
    <li>
      {title}
      {' '}
      by
      {author}
      {' '}
      {category}
        &nbsp;
      <button type="button">Remove</button>
    </li>
  );
};

BookList.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookList;
