import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Progress from '../components/Progress';
import SkyButton from '../components/SkyButton';
import { next, check } from '../redux/modules/mbti';

// styled
const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2em;
  padding-top: 1em;
`;

export default function Mbti() {
  // redux에서 값 받아오기(질문과 페이지값)
  //   질문
  const survey = useSelector((state) => state.mbti.survey);
  //   페이지 번호
  const page = useSelector((state) => state.mbti.page);

  //   dispatch로 사용할 함수 선택
  const dispatch = useDispatch();
  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyButton
                text={el.text}
                clickEvent={() => {
                  dispatch(check(el.result)); // 결과값 저장
                  dispatch(next()); // 페이지 이동
                }}
              />
              {index === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </>
  );
}
