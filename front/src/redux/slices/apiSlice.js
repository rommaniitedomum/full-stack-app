import {
  GET_VISITORS_API_URL,
  GET_REVENUE_API_URL,
  GET_CUSTOMERS_API_URL,
} from "../../constants/apiURL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../constants/requestMethods";

// reducers와 extraReducers의 차이를 간단히 말하자면, 슬라이스를 정의할 때 reducers는 슬라이스의 상태를 어떻게 업데이트할지에 대한 로직을 정의하는 반면 extraReducers는 외부에서 생성된 액션에 대한 리듀서 로직을 정의한다는 것이다.
// 즉 reducers는 슬라이스의 상태를 갱신하는 일반적인 동기적 작업을 다루고, extraReducers는 비동기적인 작업이나 외부 액션과의 상호작용을 다루는 데 사용한다.

// Actions get visitors
// create fetch thunk
// 액션 타입 문자열, 프로미스를 반환하는 비동기 함수, 추가 옵션 순서대로 인자를 받는 함수다.
// 입력받은 액션 타입 문자열을 기반으로 프로미스 라이프사이클 액션 타입을 생성하고, thunk action creator를 반환한다.
// thunk action creator: 프로미스 콜백을 실행하고 프로미스를 기반으로 라이프사이클 액션을 디스패치한다.
// 리듀서를 생성해주는 기능은 없기 때문에 액션들을 처리할 로직을 직접 작성해야 한다.

// thunk 함수 = 공통된 비동기 액션 생성 로직 별도의 함수로 분리
const createFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async () => {
    return await getRequest(apiURL);
  });
};

export const fetchVisitors = createFetchThunk(
  "fetchVisitors", // action type
  GET_VISITORS_API_URL // 요청 url
);

export const fetchRevenue = createFetchThunk(
  "fetchRevenue", // action type
  GET_REVENUE_API_URL // 요청 url
);

export const fetchCustomer = createFetchThunk(
  "fetchCustomer", // action type
  GET_CUSTOMERS_API_URL // 요청 url
);

// handlefulfilled 함수 정의 : 요청성공시 상태 업데이트 로직을 별도 함수로 분리

const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload; // action.payload에 응답 데이터가 들어있음
};

const handleRejected = (state, action) => {
  console.log("Error", action.payload);
  state.isError = true;
};

const apiSlice = createSlice({
  name: "apis", // slice 이름
  initialState: {
    // 초기상태
    visitorsData: null,
    revenueData: null,
    customersData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVisitors.fulfilled, handleFulfilled("visitorsData"))
      .addCase(fetchVisitors.rejected, handleRejected)
      .addCase(fetchRevenue.fulfilled, handleFulfilled("revenueData"))
      .addCase(fetchRevenue.rejected, handleRejected)
      .addCase(fetchCustomer.fulfilled, handleFulfilled("customersData"))
      .addCase(fetchCustomer.rejected, handleRejected);
  },
}); // slice 객체 저장

export default apiSlice.reducer;
