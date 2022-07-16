import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  nowPlaying: [],
  topRated: [],
  tvSeries: [],
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

export const topMovie = createAsyncThunk('home/popularMovies', async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=db1c6812d2a608d24bafbc337b36b53c&language=en-US&page=1',
    });
    return response?.data?.results;
  } catch (error) {
    console.log(error);
  }
});

export const getTvSeries = createAsyncThunk('home/tvSeries', async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/tv/popular?api_key=db1c6812d2a608d24bafbc337b36b53c&language=en-US&page=1',
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
    [topMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.topRated = action.payload;
    },
    [topMovie.rejected]: (state) => {
      state.isLoading = false;
    },

    [searchMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.nowPlaying = action.payload;
    },
    [getTvSeries.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.tvSeries = action.payload;
    },
    [getTvSeries.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default homeSlice.reducer;
