import { baseURL, deleteFromAPI } from './apiLinks';
import axios from 'axios';

const baseURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UDCrn87onjJjIINBwkE0';

const API = {
  postToAPI: (data) => {
    const postURL = `${baseURL}/books`;

    return axios
      .post(postURL, data)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error posting data to API:', error);
        throw error;
      });
  },
};

export default API;
