import { useState } from "react";
import style from "./style.module.css"

function Auth(props) {
  // 회원 상태
  const [user, setUser] = useState({
    userId: "D13801001001",
    userName: "김더존",
    oldPassword: "",
    newPassword: "",
    rePassword: ""
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
    console.log(user);
  };

  // 비밀번호 수정
  const handleUpdate = (event) => {
    event.preventDefault();
    let newUser;
    if(user.oldPassword === user.newPassword) {
      alert("이전 비밀번호와 동일합니다.");
    } else if(user.newPassword === user.rePassword) {
      newUser = {...user};
      alert("비밀번호가 변경되었습니다.");
      setUser({
        ...user,
        oldPassword: "",
        newPassword: "",
        rePassword: ""
      })
    } else {
      alert("비밀번호가 동일하지 않습니다.");
    }
    console.log(newUser);
  };

  return (
    <div className={`d-flex justify-content-center`}>
      <div className={`${style.Auth}`}>
        <form>
          <div className="row mb-5 d-flex align-items-center">
            <label className="col-sm-4 m-0">회원 코드: </label>
            <div className="col-sm">{user.userId}</div>
          </div>
          <div className="row mb-5 d-flex align-items-center">
            <label className="col-sm-4 m-0">회원 이름: </label>
            <div className="col-sm">{user.userName}</div>
          </div>
          <div className="row mb-5 d-flex align-items-center">
            <label className="col-sm-4 m-0">기존 비밀번호: </label>
            <input type="text" className="col-sm-8" name="oldPassword" value={user.oldPassword} onChange={handleChange}></input>
          </div>
          <div className="row mb-5 d-flex align-items-center">
            <label className="col-sm-4 m-0">새로운 비밀번호: </label>
            <input type="text" className="col-sm-8" name="newPassword" value={user.newPassword} onChange={handleChange}></input>
          </div>
          <div className="row d-flex align-items-center">
            <label className="col-sm-4 m-0">비밀번호 재입력: </label>
            <input type="text" className="col-sm-8" name="rePassword" value={user.rePassword} onChange={handleChange}></input>
          </div>
          <div className="d-flex justify-content-center mt-5"><button className={`button_team2_fill`} onClick={handleUpdate}>수정</button></div>
        </form>
      </div>
    </div>
  );
}

export default Auth;