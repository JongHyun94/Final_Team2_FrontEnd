import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createSetUidAction } from "redux/auth-reducer";
import Help from "./Help";
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
    if(user.userId.slice(0,1) === "N") {
      props.history.push("/Register");}
    else if (user.userId.slice(0,1) === "D") {
      props.history.push("/Treatment");
    } else if (user.userId.slice(0,1) === "I") {      
      props.history.push("/Inspection");
    } else {
      props.history.push("/User");
    }
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
        <div>
          <Help/>
        </div>
        <div className="border">
          <div className="Board_title">공지사항</div>
          <table className="table">
            <thead>
              <th>제목</th>
              <th>작성일</th>
            </thead>
            <tbody>
              <tr>
                <td>점검 관련 문의</td>
                <td>2021-06-01</td>
              </tr>
              <tr>
                <td>점검 관련 문의</td>
                <td>2021-06-01</td>
              </tr>
              <tr>
                <td>점검 관련 문의</td>
                <td>2021-06-01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Login;