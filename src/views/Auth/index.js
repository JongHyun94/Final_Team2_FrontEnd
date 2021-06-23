import { Modal } from "../Patient/AddressModal";
import React, { useState } from "react";
import "./Auth.css"

function Auth(props) {
  // 회원 상태
  const [user, setUser] = useState({
    userId: "D13801001001",
    userName: "김더존",
    oldPassword: "",
    newPassword: "",
    rePassword: "",
    userAuthority : "의사",
    userSsn: "751026",
    userSex: "M",
    userTel1: "010",
    userTel2: "1234",
    userTel3: "5678",
    userZipcode: "01234",
    userAddress: "서울 송파구",
    userDetailAddress1: "12층 강의실",
    userDetailAddress2: "아이티벤처타워",
    userRegDate: "2021-06-01"
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  // 회원정보 수정
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
    console.log("비밀번호 수정");
    console.log(newUser);
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
  const sendModal = (data) => {
    setModalOpen(false);
    console.log("send1 실행", data);
    setUser({
      ...user,
      userZipcode: data.zonecode, 
      userAddress: data.address
    })
    if (data.buildingName === "") {
      setUser(prevUser => {
        return {
          ...prevUser,
          userDetailAddress2: data.bname          
        };
      });
    } else {
      setUser(prevUser => {
        return {
          ...prevUser,
          userDetailAddress2: data.bname + ", " + data.buildingName   
        };
      });
    }
  };

  return (
    <div className={`d-flex justify-content-center`}>
      <div className="Auth">
        <form>
          <div className="row mb-3 d-flex align-items-center">
            <label className="col-sm-4 m-0">회원 코드: </label>
            <div className="col-sm">{user.userId}</div>
          </div>
          <div className="row mb-3 d-flex align-items-center">
            <label className="col-sm-4 m-0">회원 이름: </label>
            <div className="col-sm">{user.userName}</div>
          </div>
          <div className="row mb-3 d-flex align-items-center">
            <label className="col-sm-4 m-0">직급: </label>
            <div className="col-sm">{user.userAuthority}</div>
          </div>
          <div className="row mb-3 d-flex align-items-center">
            <label className="col-sm-4 m-0">생년월일: </label>
            <div className="col-sm">{user.userSsn}</div>
          </div>
          <div className="row mb-3 d-flex align-items-center">
            <label className="col-sm-4 m-0">성별: </label>
            <div className="col-sm">{user.userSex}</div>
          </div>
          <div className="row mb-3 d-flex align-items-center">
            <label className="col-sm-4 m-0">전화 번호: </label>
            <div className="row col-sm mr-0">
              <select className="col-sm-3" name="userTel1" value={user.userTel1} onChange={handleChange}>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="02">02</option>
                <option value="031">031</option>
                <option value="032">032</option>
                <option value="033">033</option>
                <option value="041">041</option>
                <option value="042">042</option>
                <option value="043">043</option>
                <option value="044">044</option>
                <option value="051">051</option>
                <option value="052">052</option>
                <option value="053">053</option>
                <option value="054">054</option>
                <option value="055">055</option>
                <option value="061">061</option>
                <option value="062">062</option>
                <option value="063">063</option>
                <option value="064">064</option>
              </select>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm-3" name="userTel2" value={user.userTel2} onChange={handleChange}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm-3" name="userTel3" value={user.userTel3} onChange={handleChange}></input>
            </div>
          </div>
          <div className="row mb-3 d-flex align-items-center no-gutters">
            <label className="col-sm-4 m-0">주소: </label>
            <div className="col-sm">
              <div className="row mb-2"> 
                <input type="text" className="col-sm-3" name="userZipcode" value={user.userZipcode} placeholder="우편번호" readOnly></input>
                <React.Fragment>
                  <button className="button_team2_empty" onClick={openModal}>우편번호 찾기</button>
                  <Modal open={modalOpen} close={closeModal} send={sendModal}></Modal>
                </React.Fragment>   
              </div>
              <input type="text" className="col-sm mb-2 " name="userAddress" value={user.userAddress} placeholder="주소" readOnly></input>
              <div className="row mb-2">
                <input type="text" className="col-sm-4 mr-2" name="userDetailAddress1" value={user.userDetailAddress1} placeholder="상세주소" onChange={handleChange}></input>
                <input type="text" className="col-sm-4" name="userDetailAddress2" value={user.userDetailAddress2} placeholder="참고항목" readOnly></input>
              </div>
            </div>
          </div>
          <div className="row mb-3 d-flex align-items-center">
            <label className="col-sm-4 m-0">기존 비밀번호: </label>
            <input type="text" className="col-sm-8" name="oldPassword" onChange={handleChange}></input>
          </div>
          <div className="row mb-3 d-flex align-items-center">
            <label className="col-sm-4 m-0">새로운 비밀번호: </label>
            <input type="text" className="col-sm-8" name="newPassword" onChange={handleChange}></input>
          </div>
          <div className="row d-flex align-items-center">
            <label className="col-sm-4 m-0">비밀번호 재입력: </label>
            <input type="text" className="col-sm-8" name="rePassword" onChange={handleChange}></input>
          </div>
          <div className="d-flex justify-content-center mt-5"><button className={`button_team2_fill`} onClick={handleUpdate}>수정</button></div>
        </form>
      </div>
    </div>
  );
}

export default Auth;