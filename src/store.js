import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from 'src/store/apiSlice';
import { appSlice } from 'src/store/appSlice'

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
})

store.subscribe(() => {
  localStorage.setItem('app', JSON.stringify(store.getState().app))
})

export default store
