// Auto defualt redux dev tools,thunk middleware,development mistakes
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appSlice from "./slicers/appSlice";

const combinedReducer = combineReducers({
  app: appSlice,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
});
