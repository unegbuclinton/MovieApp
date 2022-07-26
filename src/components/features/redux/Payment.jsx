import { createSlice } from '@reduxjs/toolkit';

export const paymentSlice = createSlice({
  name: 'paymentData',
  initialState: {
    paymentMethod: [
      // {
      //   id: '1',
      //   name: 'Sandra Williams',
      //   card: '5525544477844451',
      //   expiry: '08/2021',
      //   cvc: '556',
      // },
      {},
    ],
  },
  reducers: {
    updatePayment: (state, aciton) => {
      state.paymentMethod.push({
        id: state.paymentMethod.length + 1,
        ...aciton.payload,
      });
    },
    removePayment: (state, action) => {
      state.paymentMethod = state.paymentMethod.filter(
        (card) => card.id !== action.payload
      );
    },
  },
});

export const { updatePayment, removePayment } = paymentSlice.actions;
export default paymentSlice.reducer;
