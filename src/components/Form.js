import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
// import addBook from './addBook';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        category,
      }),
    );

    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="Text" placeholder="Book title..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="Text" placeholder="Author Name..." value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
