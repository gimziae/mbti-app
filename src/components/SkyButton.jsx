import Button from './Button';

// 오렌지 버튼 특수화!! > 버튼 컴포넌트 불러와서 특수화한다
export default function SkyButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#7edcfa"
      subColor="#3a82e0"
      hoverColor="#cfecf2"
    />
  );
}
