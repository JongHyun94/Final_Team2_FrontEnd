import { FcInfo } from "react-icons/fc";

function page404(props) {
  const handleGoback = () => {
    props.goback();
  };

  return (
    <div>
      <div><FcInfo/> 잘못된 경로의 페이지 입니다.</div>
      <button className="button_team2_fill" onClick={handleGoback}>뒤로가기</button>
    </div>
  );
}

export default page404;