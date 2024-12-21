import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./SwiggySlice";
import swiggyReducer from "./SwiggySlice";

export const myStore = configureStore({
  reducer: {
    youtubeData: youtubeReducer,
    swiggyData: swiggyReducer,
  },
});

// Export RootState and AppDispatch for TypeScript
export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
