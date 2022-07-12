import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  singleMovie: [],
};

export const getMovieById = createAsyncThunk(
  'movie/getMovieById',
  async (id) => {
    try {
      const response = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=db1c6812d2a608d24bafbc337b36b53c&language=en-US`,
      });
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: {
    [getMovieById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleMovie = action.payload;
    },
    [getMovieById.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default movieSlice.reducer;
