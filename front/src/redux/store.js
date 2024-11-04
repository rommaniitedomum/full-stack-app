import { combineReducers, configureStore } from "@reduxjs/toolkit";
// combinereducers 리듀서 하나로 뭉치기
// configureStore 스토어를 생성하는 함수
import apisReducer from "./slices/apiSlice";

const store = configureStore({
  reducer: combineReducers({
    apis: apisReducer, // 만들어야함
  }),
});

export default store;
