import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author && category) {
      dispatch(addBook({ title, author, category }));
      setTitle('');
      setAuthor('');
      setCategory('');
    } else {
      alert('Please fill up all fields.');
    }
  };

  return (
    <form>
      <input type="Text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title..." />
      <input type="Text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author Name..." />
      <input type="Text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="category Name..." />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
