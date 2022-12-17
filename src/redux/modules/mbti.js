// 빈 초기 상태 설정
const initStateEmpty = {
  mbtiResult: '',
  page: 0,
  survey: [],
  explaination: {},
};

// 액션 타입 설정
const INIT = 'mbti/INIT'; // mongoDB로 부터 받아온 데이터값을 넣어주는 것
const CHECK = 'mbti/CHECK'; // 결과값
const NEXT = 'mbti/NEXT'; // 다음 페이지 이동
const RESET = 'mbti/RESET'; // 첫 페이지로 리셋

export function init(payload) {
  return {
    type: INIT,
    payload,
  };
}
export function check(result) {
  return {
    type: CHECK,
    payload: { result },
  };
}
export function next() {
  return {
    type: NEXT,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}

// state값 변경을 관리하는 리듀서 설정
export default function mbti(state = initStateEmpty, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        survey: action.payload.survey,
        explaination: action.payload.explaination,
      };
    case CHECK:
      return {
        ...state, //건드리지 않는 값은 그대로 전달해주고
        mbtiResult: state.mbtiResult + action.payload.result, // 변경할 값만 변경
        // mbtiResult는 선택한 result값을 차레대로 넣어준다. ex> E, S, T, P
      };
    case NEXT:
      return {
        ...state,
        page: state.page + 1, // 다음장으로 이동을 위해 +1 해준다
      };
    case RESET:
      return {
        ...state,
        page: 0, // 첫페이지로 이동
        mbtiResult: '', // 결과 문자열 초기화
      };
    default: // 기본값은 초기 state값
      return state;
  }
}
