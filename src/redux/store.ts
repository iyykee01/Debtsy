import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from "./features/loadingFeature/loadingFeature";
import userReducer from "./features/userFeature/userFeature";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
