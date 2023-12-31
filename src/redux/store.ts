import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import bookReducer from "./feature/books/bookSlice";
import userReducer from "./feature/users/userSlice";
const store = configureStore({
  reducer: {
    book: bookReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
