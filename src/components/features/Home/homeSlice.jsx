import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  nowPlaying: [],
  popular: [],
};

// const baseURL: process.env.REACT_APP_BASE_URL

export const playingMovie = createAsyncThunk(
  'home/nowMoviesPlaying',
  async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=db1c6812d2a608d24bafbc337b36b53c',
      });
      return response?.data?.results;
    } catch (error) {
      if (error.message === 'Network Error') {
        return 'Check Connection';
      }
    }
  }
);

export const popularMovie = createAsyncThunk('home/moviesPlaying', async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=db1c6812d2a608d24bafbc337b36b53c',
    });
    return response?.data?.results;
  } catch (error) {
    console.log(error);
  }
});

export const searchMovie = createAsyncThunk(
  'home/moviesPlaying',
  async (search) => {
    try {
      const response = await axios({
        method: 'get',
        url: `
      https://api.themoviedb.org/3/search/movie?api_key=db1c6812d2a608d24bafbc337b36b53c&language=en-US&query=${search}&page=1&include_adult=false`,
      });
      return response?.data?.results;
    } catch (error) {
      console.log(error);
    }
  }
);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: {
    [playingMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.nowPlaying = action.payload;
    },
    [playingMovie.rejected]: (state) => {
      state.isLoading = false;
    },
    [popularMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.popular = action.payload;
    },
    [popularMovie.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default homeSlice.reducer;
