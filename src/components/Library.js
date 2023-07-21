import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import BookList from './BookList';

const Library = () => {
  const { book, isLoading } = useSelector((store) => store.books);
  // console.log(book);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const apiArr = Object.keys(book).flatMap((id) => book[id].map((item) => ({ ...item, id })));
  // console.log(apiArr);
  return (
    <section>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {apiArr.map((book) => (
            <BookList key={book.item_id} books={book} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Library;
