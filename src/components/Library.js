import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import BookList from './BookList';
import '../styles/Library.css';

const Library = () => {
  const { book, isLoading } = useSelector((store) => store.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const apiArr = Object.keys(book).flatMap((id) => book[id].map((item) => ({ ...item, id })));
  return (
    <section className="booklists-container">
      {isLoading ? (
        <div className="spinner">
          <div className="spinnanimation" />
        </div>
      ) : (
        <ul className="book-ul">
          {apiArr.map((book) => (
            <BookList key={book.item_id} books={book} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Library;
