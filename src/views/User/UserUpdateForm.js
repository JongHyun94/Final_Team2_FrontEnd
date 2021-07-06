import { Modal } from "../../components/common/Address";
import React, { useEffect, useState } from "react";
import "./User.css";

function UserUpdateForm(props) {
  // 직원 상태
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");

  // 이메일 비교 상태
  const [email, setEmail] = useState(true);
  
  // 마스킹 상태
  const [masking, setMasking] = useState("");

  const handleChange = (event) => {
    setUser({
      ...user,
      user_id: props.user.user_id,
      [event.target.name]: event.target.value
    });
    if (event.target.name === "user_ssn2") {
      setMasking(event.target.value);
    }
  };

  const handleChangeSSn = (event) => {
    setUser({
      ...user,
      userSsn2 : event.target.value
    });
    setMasking(event.target.value);
  };
  
  useEffect(() => {
    setUser({
      ...user,
      user_id: props.user.user_id,
      user_name: props.user.user_name,
      user_authority : props.user.user_authority,
      user_ssn1: props.user.user_ssn1,
      user_ssn2: props.user.user_ssn2,
      user_sex: props.user.user_sex,
      user_tel1: props.user.user_tel1,
      user_tel2: props.user.user_tel2,
      user_tel3: props.user.user_tel3,
      user_email1: props.user.user_email1,
      user_email2: props.user.user_email2,
      user_zipcode: props.user.user_zipcode,
      user_address: props.user.user_address,
      user_detailaddress1: props.user.user_detailaddress1,
      user_detailaddress2: props.user.user_detailaddress2,
      user_regdate: props.user.user_regdate
    });
    setUserId(props.user.user_id);
  }, [props]);

  useEffect(() => {
    if (user.user_email2 === "") {
      setEmail(false);
    } else if (user.user_email2 === "naver.com" || user.user_email2 === "gmail.com" || user.user_email2 === "daum.net" || user.user_email2 === "nate.com") {
      setEmail(true);
    } 
  }, [user.user_email2])

  // 직원 정보 수정
  const handleUpdate = (event) => {
    event.preventDefault();
    const updateUser = {...user};
    console.log("직원 정보 수정: ", updateUser);
  }

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
      user_zipcode: data.zonecode, 
      user_address: data.address
    })
    if (data.buildingName === "") {
      setUser(prevUser => {
        return {
          ...prevUser,
          user_detailaddress2: data.bname          
        };
      });
    } else {
      setUser(prevUser => {
        return {
          ...prevUser,
          user_detailaddress2: data.bname + ", " + data.buildingName   
        };
      });
    }
  };

  return (
    <div>
      <div className="User_title">직원 정보 수정</div>
      <div className="border p-2">
      <form>
          <div className="User_item">
            <label className="col-sm-3 pl-3 p-0 m-0">직원 코드: </label>
            <div className="col-sm d-flex ">{user.user_id}</div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 pl-3 p-0 m-0">직원명: </label>
            <div className="col-sm">
              <input type="text" name="user_name" value={user.user_name} placeholder="직원명" onChange={handleChange}></input>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 m-0">주민등록번호: </label>
            <div className="row ml-3 mr-0">
              <input type="text" className="col-sm" name="user_ssn1" value={user.user_ssn1} placeholder="999999" onChange={handleChange}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              {/* <input type="text" className="col-sm" name="user_ssn2" value={user.user_ssn2} placeholder="1234567" onChange={handleChange}></input> */}
              <input type="text" className="col-sm" name="user_ssn2" value={masking} placeholder="1234567" 
              onChange={handleChangeSSn} onBlur={() => {setMasking(masking?.replace(/(?<=.{1})./gi, '*'));}}></input>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 pl-3 p-0 m-0">성별: </label>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="user_sex" value="M" checked={user.user_sex === "M"? true : false} onChange={handleChange}></input>
              <label className="ml-3 mb-0">남</label>
            </div>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="user_sex" value="F" checked={user.user_sex === "F"? true : false} onChange={handleChange}></input>
              <label className="ml-3 mb-0">여</label>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 pl-3 p-0 m-0">직책: </label>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="user_authority" value="ROLE_DOCTOR" checked={user.user_authority === "ROLE_DOCTOR"? true : false} onChange={handleChange}></input>
              <label className="ml-3 mb-0">의사</label>
            </div>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="user_authority" value="ROLE_NURSE" checked={user.user_authority === "ROLE_NURSE"? true : false} onChange={handleChange}></input>
              <label className="ml-3 mb-0">간호사</label>
            </div>
            <div className="col-sm-4 d-flex align-items-center">
              <input type="radio" name="user_authority" value="ROLE_INSPECTOR" checked={user.user_authority === "ROLE_INSPECTOR"? true : false} onChange={handleChange}></input>
              <label className="ml-3 mb-0">임상병리사</label>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 m-0">전화 번호: </label>
            <div className="row col-sm mr-0">
              <select className="col-sm ml-3" name="user_tel1" value={user.user_tel1} onChange={handleChange}>
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
              <input type="text" className="col-sm" name="user_tel2" value={user.user_tel2} onChange={handleChange}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm" name="user_tel3" value={user.user_tel3} onChange={handleChange}></input>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 m-0">이메일: </label>
            <div className="row ml-3 mr-0">
              <input type="text" className="col-sm-3 mr-1" name="user_email1" value={user.user_email1} placeholder="ABC1234" onChange={handleChange}></input>
              <div className="mr-1 d-flex align-items-center">@</div>
              <input type="text" className="col-sm-4 mr-1" name="user_email2" value={user.user_email2} placeholder="naver.com" onChange={handleChange} disabled={email}></input>
              <select className="col-sm-4" name="user_email2" onChange={handleChange} value={user.user_email2}>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="daum.net">daum.net</option>
                <option value="nate.com">nate.com</option>
                <option value={email === false? user.user_email2: ""}>직접입력</option>
              </select>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 m-0">주소: </label>
            <div className="col-sm">
              <div className="row mb-2"> 
                <input type="text" className="col-sm-5 ml-3" name="user_zipcode" value={user.user_zipcode} placeholder="우편번호" readOnly></input>
                <React.Fragment>
                  <button className="button_team2_empty" onClick={openModal}>우편번호 찾기</button>
                  <Modal open={modalOpen} close={closeModal} send={sendModal}></Modal>
                </React.Fragment>   
              </div>
              <input type="text" className="col-sm mb-2" name="user_address" value={user.user_address} placeholder="주소" readOnly></input>
              <div className="row no-gutters mb-2">
                <input type="text" className="col-sm mr-2" name="user_detailaddress1" value={user.user_detailaddress1} placeholder="상세주소" onChange={handleChange}></input>
                <input type="text" className="col-sm" name="user_detailaddress2" value={user.user_detailaddress2} placeholder="참고항목" readOnly></input>
              </div>
            </div>
          </div>
          <div className="User_item">
            <label className="col-sm-3 col-form-label pl-3 p-0">등록 날짜: </label>
            <div className="col-sm d-flex align-items-center">{user.user_regdate}</div>
          </div>
          {userId !== undefined?
          <div className= "d-flex justify-content-end"><button className="button_team2_fill" onClick={handleUpdate}>수정</button></div> 
          :<div className= "d-flex justify-content-end" style={{"visibility":"hidden"}}><button className="button_team2_fill" onClick={handleUpdate}>수정</button></div> 
          }
        </form>
      </div>
    </div>
  );
}

export default UserUpdateForm;