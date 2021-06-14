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
          <div>환자관리</div>
          <div>접수</div>
          <div>진료</div>
          <div>검사 및 치료</div>
          <div>데이터분석</div>
        </div>
        <div className="col-4"></div>
        <div className="col-2 row d-flex justify-content-between">
          <div>비밀번호 수정</div>
          <div>도움말</div>
        </div>
      </div>
    </div>
  );
}

export default Header;