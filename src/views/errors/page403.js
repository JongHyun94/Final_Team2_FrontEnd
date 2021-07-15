import { FcInfo } from "react-icons/fc";

function page403(props) {
  const handleGoback = () => {
    props.goback();
  };

  return (
    <div>
      <div><FcInfo/> 접근 제한된 페이지 입니다.</div>
      <button className="button_team2_fill" onClick={handleGoback}>뒤로가기</button>
    </div>
  );
}

export default page403;