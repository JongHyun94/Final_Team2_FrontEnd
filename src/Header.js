import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="header">
      <div className="header1 row">
        <div className="header1_1 col-10">
          <span className="logo">TEAM2</span>
        </div>
        <div className="header1_2 col-2 d-flex justify-content-between">
          <div>서울 아산 병원</div>
          <div>김더존 님</div>
          <div><button className="btn btn-sm btn-info">LOGOUT</button></div>
        </div>
      </div>
      <div className="header2 row">
        <div className="col-6 row d-flex justify-content-between">
          <div><Link to="/Patient">환자관리</Link></div>
          <div><Link to="/Register">접수</Link></div>
          <div><Link to="/Treatment">진료</Link></div>
          <div><Link to="/Inspection">검사 및 치료</Link></div>
          <div><Link to="/DataAnalysis">데이터분석</Link></div>
        </div>
        <div className="col-4"></div>
        <div className="col-2 row d-flex justify-content-between">
          <div><Link to="/Auth">비밀번호 수정</Link></div>
          <div><Link to="/Help">도움말</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Header;