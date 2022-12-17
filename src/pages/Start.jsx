import styled from 'styled-components';
import OrangeButton from '../components/OrangeButton';
import { useDispatch } from 'react-redux';
import { next } from '../redux/modules/mbti';

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
  const dispatch = useDispatch();
  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인페이지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다!
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
