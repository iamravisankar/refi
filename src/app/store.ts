import { configureStore } from '@reduxjs/toolkit';
import trendingAssetsReducer from '../reducers/trending/trendingAssetsSlice';

const store = configureStore({
  reducer: {
    trendingAssets: trendingAssetsReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
