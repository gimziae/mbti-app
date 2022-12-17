import styled from 'styled-components';
import OrangeButton from '../components/OrangeButton';
import { useDispatch } from 'react-redux';
import { init, next } from '../redux/modules/mbti';
import { useEffect, useState } from 'react';

const MainImg = styled.img`
  width: inherit;
`;
const Header = styled.p`
  font-size: 3em;
`;
const SubHeader = styled.p`
  font-size: 1.5.em;
  color: #777;
`;
export default function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch(); // 설정해 둔 함수를 참조하기 위함

  // mongoDB 데이타 불러오는 함수
  async function mongoFetchData() {
    // 방문자수
    const resMongoCount = await fetch('http://localhost:4000/mongo/count');
    // 통신 성공 시 (cf. status 코드가 200번임)
    if (resMongoCount.status === 200) {
      const numOfCounts = await resMongoCount.json();
      // console.log()
      if (numOfCounts.length !== 0) setCounts(numOfCounts[0].counts);
    } else {
      throw new Error('방문자수 통신 이상');
    }

    // 데이타
    const resMongoData = await fetch('http://localhost:4000/mongo/getdata');
    if (resMongoData.status === 200) {
      const data = await resMongoData.json();
      if (data.length !== 0) dispatch(init(data[0])); // 참조하기 위해 가져온다.
    } else {
      throw new Error('데이타 통신 이상');
    }
  }

  useEffect(() => {
    // 데이터 받아온 함수 실행
    mongoFetchData();
  }, []);

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인페이지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다!
        <br />
        <br />
        지금까지 {counts}명 참여했습니다!!
      </SubHeader>
      {/* 텍스트 설정해주는 이유 : 버튼을 컴포넌트로 만들어 사용할 예정이므로 props 값을 전달해줘야 하기 때문에!  */}
      {/* <a text="테스트 시작">테스트 시작</a> */}
      <OrangeButton
        text="테스트 시작"
        clickEvent={() => {
          dispatch(next());
        }}
      />
    </>
  );
}
