// 라우터란 한 마디로 간단하게 설명하면 '연결 장치'입니다.
// 즉, index.js 한 파일에서만 런칭할 수 있는 것이 아닌 router라는 것을 이용해서 여러가지 .js 파일에다가 원하는 코드를 짤 수 있다는 겁니다.

// 사실 이 router를 이용하는 이유는 코드의 간략화 + 가독성 때문입니다.
// index.js 하나에 다 욱여 넣으면 길이도 길어지고 그러므로 가독성이 떨어지게 됩니다. 우리 모두 이런 문제를 해결하기 위해 갓갓 router를 쓰도록 합시다.

const router = require("express").Router(); // express 모듈에서 제공하는 Router 클래스를 사용
const salesMapRoute = require("../controllers/salesMapCtrl"); // salesMapCtrl.js 파일을 salesMapRoute 변수로 가져오기

router.get("/sales_map", salesMapRoute.getSalesMap);

module.exports = router; // router를 모듈로 내보내기
