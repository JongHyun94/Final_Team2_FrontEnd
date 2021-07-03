import { Modal } from "../../components/common/Address";
import React, { useEffect, useState } from "react";

function UserCreateForm(props) {
  // 직원 상태
  const [user, setUser] = useState({
    userName: "",
    userAuthority: "",
    userSsn1: "",
    userSsn2: "",
    userSex: "",
    userTel1: "010",
    userTel2: "",
    userTel3: "",
    userEmail1: "",
    userEmail2: "naver.com",
    userZipcode: "",
    userAddress: "",
    userDetailAddress1: "",
    userDetailAddress2: "",
  });

  // 이메일 비교 상태
  const [email, setEmail] = useState(true);

  // 마스킹 상태
  const [masking, setMasking] = useState("");

  useEffect(() => {
    if (user.userEmail2 === "") {
      setEmail(false);
    } else if (user.userEmail2 === "naver.com" || user.userEmail2 === "gmail.com" || user.userEmail2 === "daum.net" || user.userEmail2 === "nate.com") {
      setEmail(true);
    }
  }, [user.userEmail2])

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSSn = (event) => {
    setUser({
      ...user,
      userSsn2 : event.target.value
    });
    setMasking(event.target.value);
  };

  // 직원 정보 수정
  const handleCreate = (event) => {
    event.preventDefault();
    const createUser = { ...user };
    console.log("직원 등록: ", createUser);
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
      userAddress: data.address,
    });
    if (data.buildingName === "") {
      setUser((prevUser) => {
        return {
          ...prevUser,
          userDetailAddress2: data.bname,
        };
      });
    } else {
      setUser((prevUser) => {
        return {
          ...prevUser,
          userDetailAddress2: data.bname + ", " + data.buildingName,
        };
      });
    }
  };

  return (
    <div className="mt-2">
      <div className="User_title">직원 등록</div>
      <div className="border p-2">
        <form>
          <div className="User_item">
            <label className="col-sm-3 m-0">직원명: </label>
            <div className="col-sm">
              <input type="text" name="userName" placeholder="직원명" onChange={handleChange}></input>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 m-0">주민등록번호: </label>
            <div className="row ml-3 mr-0">
              <input type="text" className="col-sm-4" name="userSsn1" placeholder="999999" onChange={handleChange}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              {/* <input type="text" className="col-sm-4" name="userSsn2" placeholder="1234567" onChange={handleChange}></input> */}
              <input type="text" className="col-sm" name="userSsn2" value={masking} placeholder="1234567" 
              onChange={handleChangeSSn} onBlur={() => {setMasking(masking?.replace(/(?<=.{1})./gi, '*'));}}></input>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 m-0">성별: </label>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="userSex" value="M" onChange={handleChange}></input>
              <label className="ml-3 mb-0">남</label>
            </div>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="userSex" value="F" onChange={handleChange}></input>
              <label className="ml-3 mb-0">여</label>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 m-0">직책:</label>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="userAuthority" value="의사" onChange={handleChange}></input>
              <label className="ml-3 mb-0">의사</label>
            </div>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="userAuthority" value="간호사" onChange={handleChange}></input>
              <label className="ml-3 mb-0">간호사</label>
            </div>
            <div className="col-sm-4 d-flex align-items-center">
              <input type="radio" name="userAuthority" value="임상병리사" onChange={handleChange}></input>
              <label className="ml-3 mb-0">임상병리사</label>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 m-0 pr-0">전화 번호: </label>
            <div className="row col-sm mr-0">
              <select className="col-sm ml-3" name="userTel1" onChange={handleChange}>
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
              <input type="text" className="col-sm" name="userTel2" onChange={handleChange}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm" name="userTel3" onChange={handleChange}></input>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 m-0">이메일: </label>
            <div className="row ml-3 mr-0">
              <input type="text" className="col-sm-3 mr-1" name="userEmail1" value={user.userEmail1} placeholder="ABC1234" onChange={handleChange}></input>
              <div className="mr-1 d-flex align-items-center">@</div>
              <input type="text" className="col-sm-4 mr-1" name="userEmail2" value={user.userEmail2} placeholder="naver.com" onChange={handleChange} disabled={email}></input>
              <select className="col-sm-4" name="userEmail2" onChange={handleChange} value={user.userEmail2}>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="daum.net">daum.net</option>
                <option value="nate.com">nate.com</option>
                <option value={email === false? user.userEmail2: ""}>직접입력</option>
              </select>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 m-0">주소: </label>
            <div className="col-sm">
              <div className="row mb-2 pr-0">
                <input type="text" className="col-sm-5 ml-3" name="userZipcode" value={user.userZipcode} placeholder="우편번호" onChange={handleChange} readOnly></input>
                <React.Fragment>
                  <button className="button_team2_empty" onClick={openModal}>
                    우편번호 찾기
                  </button>
                  <Modal open={modalOpen} close={closeModal} send={sendModal}></Modal>
                </React.Fragment>
              </div>
              <input type="text" className="col-sm mb-2" name="userAddress" placeholder="주소" value={user.userAddress} onChange={handleChange} readOnly></input>
              <div className="row no-gutters mb-2">
                <input type="text" className="col-sm mr-2" name="userDetailAddress1" placeholder="상세주소" onChange={handleChange}></input>
                <input type="text" className="col-sm" name="userDetailAddress2" value={user.userDetailAddress2} placeholder="참고항목" onChange={handleChange} readOnly></input>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="button_team2_fill" onClick={handleCreate}>
              등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserCreateForm;
