const DOMAIN = "http://localhost:8000";

const COUNTRIES_API_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,languages";

const GET_VISITORS_API_URL = `${DOMAIN}/visitors`;

export { COUNTRIES_API_URL, GET_VISITORS_API_URL };

// 도메인을 상수로 선언하고 visitor 에서 참조한다
//아 왜 그랬지
