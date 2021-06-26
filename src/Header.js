import { removeAuthHeader } from "apis/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createSetAuthTokenAction, createSetUidAction } from "redux/auth-reducer";
import React, { useState } from "react";

function Header(props) {
  const globalUid = useSelector((state) => state.authReducer.uid);
  const dispatch = useDispatch();

  const logout = (event) => {
    dispatch(createSetUidAction(""));
    dispatch(createSetAuthTokenAction(""));
    removeAuthHeader();

    // SessionStorage에 인증 내용 제거
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("authToken");
  };

  // 모달 상태(open일 떄 true로 바뀌어 열림)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="header">
      <div className="header1 row no-gutters">
        <div className="header1_1 col-10">
          <span className="logo">TEAM2<img src="/resources/img/logo_white_bold.png" alt="" width={30}></img></span>
        </div>
        
        <div className="col-2">
          {globalUid !== ""?
            <div className="header1_2 d-flex justify-content-between">
              <div>서울 아산 병원</div>
              <React.Fragment>
                <div>{globalUid} 님</div>
                
              </React.Fragment>
              <div><Link to="/"><button className="button_team2_empty" onClick={logout}>LOGOUT</button></Link></div>
            </div>
          :
            <div className="d-flex justify-content-end"><Link to="/" className="button_team2_empty">LOGIN</Link></div>
          }
        </div>
      </div>
      {globalUid === ""? "":
        <div className="header2 row no-gutters">
          <div className="col-4 row d-flex justify-content-between">
            <div><Link to="/Register" className="link_team2">접수</Link></div>
            <div><Link to="/Treatment" className="link_team2">진료</Link></div>
            <div><Link to="/Inspection" className="link_team2">검사 및 치료</Link></div>
            <div><Link to="/DataAnalysis" className="link_team2">데이터분석</Link></div>
          </div>
          <div className="col-5"></div>
          <div className="col-3 row d-flex justify-content-between">
            <div><Link to="/User" className="link_team2">직원관리</Link></div>
            <div><Link to="/Auth" className="link_team2">회원정보 수정</Link></div>
            <div><Link to="/Help" className="link_team2">도움말</Link></div>
          </div>
        </div>
      }
    </div>
  );
}

export default Header;