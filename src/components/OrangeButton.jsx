import Button from './Button';

// 오렌지 버튼 특수화!! > 버튼 컴포넌트 불러와서 특수화한다
export default function OrangeButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#fae243"
      subColor="#fa9f1a"
      hoverColor="#faf000"
    />
  );
}
