import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouriteMovie: [{ id: 1 }],
  },
  reducers: {
    addToFavorite: (state, payload) => {
      if (!state.favouriteMovie.includes(payload)) {
        state.favouriteMovie = [
          ...state.favouriteMovie,
          { id: state.favouriteMovie.length + 1, ...payload },
        ];
      } else {
        return state.favouriteMovie;
      }
    },
    removeFromFavorite: (state, action) => {
      state.favouriteMovie = state.favouriteMovie.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
