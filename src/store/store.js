import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greeting/greeting';

const store = configureStore({
  reducer: {
    // Reducers
    greeting: greetingSlice.reducer,
  },
});

export default store;
