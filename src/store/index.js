import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './features/data/dataSlice';

export default configureStore({
  reducer: {
    data: dataSlice,
  },
});