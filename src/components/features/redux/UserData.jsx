import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    user: {
      firstName: 'Unegbu',
      lastName: 'Clinton',
      emial: 'list@gmail.com',
      phone: '08030905388',
    },
  },
  reducers: {
    updateUser: (state, aciton) => {
      state.user = aciton.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
