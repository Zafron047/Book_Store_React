import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks, postBooks } from '../redux/books/booksSlice';
import '../styles/Form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && author && category) {
      await dispatch(postBooks([title, author, category]));
      setTitle('');
      setAuthor('');
      setCategory('');
      await dispatch(fetchBooks());
    } else {
      alert('Please fill up all fields.');
    }
  };

  return (
    <section className="form-section">
      <h2 className="form-header">Add New Book</h2>
      <form className="form-container">
        <input
          className="input-class"
          type="Text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
        />
        <input
          className="input-class input-width"
          type="Text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <input
          className="input-class input-width"
          type="Text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <button className="submit-btn" type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Form;
