import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createSetUidAction } from "redux/auth-reducer";
import "./Login.css";

function Login(props) {
  // 유저 상태
  const [user, setUser] = useState({
    userId: "",
    userPassword: ""
  });

  // 바인딩할 상태함수
  const globalUid = useSelector((state) => state.authReducer.uid);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  // 로그인
  const login = (event) => {
    event.preventDefault();
    dispatch(createSetUidAction(user.userId));
    setUser({
      userId: "",
      userPassword: ""
    });
    props.history.push("/Register");
  };
  
  // console.log(user);
  
  return (
    <div className="box">
      <div className="Login">
        <h2 className="text-center mb-5">의료정보 시스템</h2>
        <form>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">아이디</label>
            <div className="col-sm">
              <input type="text" className="form-control" name="userId" onChange={handleChange}></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">비밀번호</label>
            <div className="col-sm">
              <input type="text" className="form-control" name="userPassword" onChange={handleChange}></input>
            </div>
          </div>
          <div className="d-flex justify-content-end"><button className="button_team2_fill" onClick={login}>LOGIN</button></div>
        </form>
      </div>
      <div>
        {/* <div className="row">
          <div className={`${style.Register_box} d-flex justify-content-between`}>
            <div>접수</div>
            <div className={style.icon}><i className="bi bi-card-list"></i></div>
          </div>
          <div className={`${style.Treatment_box} d-flex justify-content-between`}>
            <div>진료</div>
            <div className={style.icon}><i className="bi bi-clipboard-plus"></i></div>
          </div>
        </div>
        <div className="row">
          <div className={`${style.Inspection_box} d-flex justify-content-between`}>
            <div>검사 및 치료</div>
            <div className={style.icon}><i className="bi bi-file-earmark-medical"></i></div>
          </div>
          <div className={`${style.DataAnalysis_box} d-flex justify-content-between`}>
            <div>데이터 분석</div>
            <div className={style.icon}><i className="bi bi-file-earmark-bar-graph"></i></div>
          </div>
        </div> */}
        <div className="img"><img src="/resources/img/login_img.png" alt="" width="664rem"></img></div>
        <div className={`Help_box d-flex justify-content-between`}>
          <div>도움말</div>
          <Link to="/Help" className="link_team2">
            <div className="Help_icon"><i className="bi bi-question-circle"></i></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;