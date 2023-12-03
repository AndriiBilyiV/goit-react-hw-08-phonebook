import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};
const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const createUser = createAsyncThunk(
  'user/create',
  async (personality, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', personality);
      setToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'user/login',
  async (pass, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', pass);
      setToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'user/logout',
  async (agr, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout');
      clearToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (arg, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.user.token;
    if (persistedToken === null) {
      return rejectWithValue('Persist is empty');
    }
    try {
      setToken(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (info, { rejectWithValue }) => {
    try {
      console.log(info);
      const { data } = await axios.post('/contacts', info);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
