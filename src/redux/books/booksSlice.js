import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      });
    },
    removeBook: (state, action) => {
      const bookIdToRemove = action.payload.id;
      state.books = state.books.filter((book) => book.id !== bookIdToRemove);
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
