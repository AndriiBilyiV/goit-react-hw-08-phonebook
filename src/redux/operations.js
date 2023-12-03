import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://6568df639927836bd9758882.mockapi.io/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('', info);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
