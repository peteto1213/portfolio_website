import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import BlogReducer from '../features/blog/blogSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: BlogReducer,
  },
});
