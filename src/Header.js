import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="header">
      <div className="header1 row no-gutters">
        <div className="header1_1 col-10">
          <span className="logo">TEAM2<img src="/resources/img/logo_white_bold.png" alt="" width={30}></img></span>
        </div>
        <div className="header1_2 col-2 d-flex justify-content-between">
          <div>서울 아산 병원</div>
          <div>김더존 님</div>
          <div><button className="button_team2_empty">LOGOUT</button></div>
        </div>
      </div>
      <div className="header2 row no-gutters">
        <div className="col-6 row d-flex justify-content-between">
          <div><Link to="/Patient" className="link_team2">환자관리</Link></div>
          <div><Link to="/Register" className="link_team2">접수</Link></div>
          <div><Link to="/Treatment" className="link_team2">진료</Link></div>
          <div><Link to="/Inspection" className="link_team2">검사 및 치료</Link></div>
          <div><Link to="/DataAnalysis" className="link_team2">데이터분석</Link></div>
        </div>
        <div className="col-4"></div>
        <div className="col-2 row d-flex justify-content-between">
          <div><Link to="/Auth" className="link_team2">비밀번호 수정</Link></div>
          <div><Link to="/Help" className="link_team2">도움말</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Header;