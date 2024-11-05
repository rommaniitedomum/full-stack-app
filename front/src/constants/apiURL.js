const DOMAIN = "http://localhost:8000";

const COUNTRIES_API_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,languages";

const GET_VISITORS_API_URL = `${DOMAIN}/visitors`;
const GET_REVENUE_API_URL = `${DOMAIN}/revenue`;
const GET_CUSTOMERS_API_URL = `${DOMAIN}/customers`;
const GET_TARGET_REALITY_API_URL = `${DOMAIN}/targetReality`;

export {
  COUNTRIES_API_URL,
  GET_VISITORS_API_URL,
  GET_REVENUE_API_URL,
  GET_CUSTOMERS_API_URL,
  GET_TARGET_REALITY_API_URL,
};

// 도메인을 상수로 선언하고 visitor 에서 참조한다
//아 왜 그랬지
