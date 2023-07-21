import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UDCrn87onjJjIINBwkE0/books';

const initialState = {
  book: [],
  isLoading: false,
};

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(baseURL);
  const fetchResponse = response.data;
  return fetchResponse;
});

const postBooks = createAsyncThunk(
  'books/postBooks',
  async ([title, author, category]) => {
    const newBook = {
      item_id: `Item${initialState.book.length + 1}`,
      title,
      author,
      category,
    };

    const response = await axios.post(baseURL, newBook);
    const post = response.data;
    return post;
  },
);

const removeBook = createAsyncThunk('books/removeBook', async (param) => {
  const response = await axios.delete(`${baseURL}/${param}`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchBooks.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      book: action.payload,
    }));
    builder.addCase(fetchBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));

    builder.addCase(postBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postBooks.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(postBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));

    builder.addCase(removeBook.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(removeBook.fulfilled, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(removeBook.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export const booksReducer = booksSlice.reducer;
export { fetchBooks, postBooks, removeBook };
