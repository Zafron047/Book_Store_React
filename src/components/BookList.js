import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import Button from './button';
import '../styles/BookList.css';

const BookList = ({ books }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = async () => {
    await dispatch(removeBook(books.id));
    await dispatch(fetchBooks());
  };
  const progressBarColor = '#00cc66';
  return (
    <li className="list-wrap">
      <section className="list-left">
        <div className="book-info">
          <p className="category">{books.category}</p>
          <p className="title">{books.title}</p>
          <p className="author">{books.author}</p>
        </div>
        <div className="btn-container">
          <Button className="btn-child" label="Comments" />
          <div className="btn-partition" />
          <Button className="btn-child" onClick={() => handleRemoveBook()} label="Remove" />
          <div className="btn-partition" />
          <Button className="btn-child" label="Edit" />
        </div>
      </section>
      <article className="list-mid">
        <div className="circle-bar">
          <CircularProgressbar
            value={45}
            styles={buildStyles({
              pathColor: '#307bbe',
              trailColor: '#e8e8e8',
              textColor: progressBarColor,
            })}
          />
        </div>
        <div className="progress">
          <p className="bar-percentage">45%</p>
          <p className="bar-completed">Completed</p>
        </div>
      </article>
      <article className="list-right">
        <div>
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-no">Chapter 13</p>
        </div>
        <Button className="update-btn" label="UPDATE PROGRESS" />
      </article>
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
