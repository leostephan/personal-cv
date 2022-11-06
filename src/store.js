import { configureStore } from "@reduxjs/toolkit";
import themeMiddleware from "./middlewares/theme";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    themeMiddleware,
  ],
});

export default store;
