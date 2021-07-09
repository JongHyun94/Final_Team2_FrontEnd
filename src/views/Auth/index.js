import { Modal } from "../../components/common/Address";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getUser, updateUserInfo } from "apis/users";
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from "react-toasts";
import { ValidationModal } from "components/common/ValidationModal";

function Auth(props) {
  const { open, close } = props;
  const globalUid = useSelector((state) => state.authReducer.uid);
  
  // 유효성 검사를 위한 함수 사용
  const { handleSubmit, register, errors } = useForm({ mode: "onChange" });

  // 회원 상태
  const [user, setUser] = useState({});

  useEffect(() => {
    const work = async () => {
      try {
        const response = await getUser(globalUid);
        setUser(response.data);
      } catch(error) {
        console.log(error);
      }
    };
    work()
  }, []);
  
  // 이메일 비교 상태
  const [email, setEmail] = useState(true);

  useEffect(() => {
    if (user.user_email2 === "") {
      setEmail(false);
    } else if (user.user_email2 === "naver.com" || user.user_email2 === "gmail.com" || user.user_email2 === "daum.net" || user.user_email2 === "nate.com") {
      setEmail(true);
    }
  }, [user.user_email2])

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
      user_tel: user.user_tel1 + "-" + user.user_tel2 + "-" + user.user_tel3,
      user_email: user.user_email1 + "@" + user.user_email2
    });
  };

  // 회원정보 수정
  const handleUpdate = async (event) => {
    try {      
      if (user.old_password !== "" && user.old_password === user.new_password) {
        // alert("이전 비밀번호와 동일합니다.");
        openvalidationModal();
        setErrorMsg({
          ...errorMsg,
          content: "이전 비밀번호와 동일합니다."
        });  
      } else if (user.new_password !== "" && user.new_password === user.re_password) {
        const response = await updateUserInfo(user);
        if (response.data === "success") {
          // alert("회원 정보가 수정되었습니다.");
          ToastsStore.success("회원 정보가 수정되었습니다.");
          setUser({
            ...user,
            old_password: "",
            new_password: "",
            re_password: "",
          });
          close();
        } else {
          // alert("기존 비밀번호가 맞지 않습니다.");
          openvalidationModal();
          setErrorMsg({
            ...errorMsg,
            content: "기존 비밀번호가 맞지 않습니다."
          });
        }        
      } else if (user.old_password !== "") {
        // alert("비밀번호가 동일하지 않습니다.");
        openvalidationModal();
        setErrorMsg({
          ...errorMsg,
          content: "비밀번호가 동일하지 않습니다."
        });
      }
    } catch(error) {
      console.log(error);
    }    
  };

  // 주소 모달 상태(open일 떄 true로 바뀌어 열림)
  const [addressModalOpen, setAddressModalOpen] = useState(false);

  const openAddressModal = async (event) => {
    try {
      event.preventDefault();
      setAddressModalOpen(true);
    } catch(error) {
      console.log(error);
    }    
  };
  const closeAddressModal = () => {
    setAddressModalOpen(false);
  };
  const sendModal = (data) => {
    setAddressModalOpen(false);
    console.log("send1 실행", data);
    setUser({
      ...user,
      user_zipcode: data.zonecode,
      user_Address: data.address,
    });
    if (data.buildingName === "") {
      setUser((prevUser) => {
        return {
          ...prevUser,
          user_detailaddress2: data.bname,
        };
      });
    } else {
      setUser((prevUser) => {
        return {
          ...prevUser,
          user_detailaddress2: data.bname + ", " + data.buildingName,
        };
      });
    }
  };

  // validation 모달 상태(open일 떄 true로 바뀌어 열림)
  const [validationModalOpen, setValidationModalOpen] = useState(false);
  // 유효성 검사 오류 메시지
  const [errorMsg, setErrorMsg] = useState({
    title : "회원정보 수정 실패",
    content: ""
  });

  const openvalidationModal = (event) => {
    setValidationModalOpen(true);
  };
  const closeValidationModal = () => {
    setValidationModalOpen(false);
  };

  return (
    <div className={`${style.Auth}`}>
      <div className={open ? `${style.openModal} ${style.modal}` : `${style.modal}`}>
        {open ? (
          <section>
            <div className={`${style.Auth_header}`}>
              <div>회원정보 수정</div>
              <button className="close" onClick={close}>
                {" "}
                &times;{" "}
              </button>
            </div>
            <main>
              <div className={`d-flex justify-content-center`}>
                <div className={`${style.Auth_box}`}>
                  <form onSubmit={handleSubmit(handleUpdate)}>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0">회원 코드: </label>
                      <div className="col-sm">{user.user_id}</div>
                    </div>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0">회원 이름: </label>
                      <div className="col-sm">{user.user_name}</div>
                    </div>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0">직급: </label>
                      <div className="col-sm">{user.user_authority === "ROLE_DOCTOR"? "의사" 
                                              : (user.user_authority === "ROLE_NURSE"? "간호사" : "임상병리사")}</div>
                    </div>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0">생년월일: </label>
                      <div className="col-sm">{user.user_ssn1}</div>
                    </div>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0">성별: </label>
                      <div className="col-sm">{user.user_sex === "M" ? "남" : "여"}</div>
                    </div>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0 pb-3">전화 번호: </label>
                      <div>
                        <div className="row col-sm">
                          <select className="col-sm-3" name="user_tel1" value={user.user_tel1} onChange={handleChange}>
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
                          <input type="text" className="col-sm-3" name="user_tel2" value={user.user_tel2} ref={register({required: true, minLength:3, maxLength:4})} onChange={handleChange}></input>
                          <div className="mr-2 ml-2 d-flex align-items-center">-</div>
                          <input type="text" className="col-sm-3" name="user_tel3" value={user.user_tel3} ref={register({required: true, minLength:3, maxLength:4})} onChange={handleChange}></input>
                        </div>
                        <div className={(errors.user_tel2 || errors.user_tel3)? `${style.Auth_error}` : `${style.Auth_noterror}`}>
                          {(errors.user_tel2 || errors.user_tel3)?.type === "required" ? "전화번호를 입력해주세요." 
                          :
                            (errors.userTel2 || errors.userTel3)?.type === "minLength" ? "3자리 이상 작성해주세요." :
                            "4자리 이하 작성해주세요."
                          }
                        </div>
                      </div>
                    </div>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0 pb-3">이메일: </label>
                      <div>
                        <div className="row col-sm p-0 m-0">
                          <input type="text" className="col-sm mr-1" name="user_email1" value={user.user_email1} placeholder="ABC1234" onChange={handleChange} 
                                  ref={register({required: true, pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z]).{2,}$/})}></input>
                          <div className="mr-1 d-flex align-items-center">@</div>
                          <input type="text" className="col-sm mr-1" name="user_email2" value={user.user_email2} onChange={handleChange} 
                                  ref={register({required: true, pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z].{2,}$/})} disabled={email}></input>
                          <select className="col-sm" name="user_email2" onChange={handleChange} value={user.user_email2}>
                            <option value="naver.com">naver.com</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="nate.com">nate.com</option>
                            <option value={email === false? user.user_email2: ""}>직접입력</option>
                          </select>    
                        </div>                 
                        <div className={(errors.user_email1 || errors.user_email2)? `${style.Auth_error}` : `${style.Auth_noterror}`}>
                          {(errors.user_email2 || errors.user_email1)?.type === "pattern" ? "올바른 형식으로 입력해주세요." : "이메일를 입력해주세요."}
                        </div>             
                      </div>
                    </div>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0">주소: </label>
                      <div className="col-sm">
                        <div className="row mb-2">
                          <input type="text" className="col-sm-6" name="user_zipcode" value={user.user_zipcode} placeholder="우편번호" readOnly></input>
                          <React.Fragment>
                            <button className="button_team2_empty" onClick={openAddressModal}>우편번호 찾기</button>
                            <Modal open={addressModalOpen} close={closeAddressModal} send={sendModal}></Modal>
                          </React.Fragment>
                        </div>
                        <div className="row mb-2"><input type="text" className="col-sm" name="user_address" value={user.user_address} placeholder="주소" readOnly></input></div>
                        <div className="row mb-2">
                          <input type="text" className="col-sm mr-2" name="user_detailaddress1" value={user.user_detailaddress1} placeholder="상세주소" onChange={handleChange}></input>
                          <input type="text" className="col-sm" name="user_detailaddress2" value={user.user_detailaddress2} placeholder="참고항목" readOnly></input>
                        </div>
                      </div>
                    </div>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0 pb-3">기존 비밀번호: </label>
                      <div className="col-sm-8 p-0">
                        <input type="password" className={`col-sm ${style.Auth_password}`} name="old_password" ref={register({required: true})} onChange={handleChange}></input>
                        <div className={errors.old_password? `${style.Auth_error}` : `${style.Auth_noterror}`}>비밀번호롤 입력하세요.</div>
                      </div>
                    </div>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0 pb-3">새로운 비밀번호: </label>
                      <div className="col-sm-8 p-0">
                        <input type="password" className={`col-sm ${style.Auth_password}`} name="new_password" onChange={handleChange}
                                ref={register({required: true,  minLength: 8, maxLength: 16, pattern: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/})}></input>
                        <div className={errors.new_password? `${style.Auth_error}` : `${style.Auth_noterror}`}>
                          {(errors.new_password)?.type === "required" ? "비밀번호롤 입력하세요."
                           : 
                           (errors.new_password)?.type === "minLength" ? "8자리 이상 작성해주세요." 
                           : 
                           (errors.new_password)?.type === "maxLength" ? "16자리 이하로 작성해주세요." : "숫자, 영문, 특수문자 1개 이상 사용해주세요."}
                          </div>
                      </div>
                    </div>
                    <div className={`${style.Auth_content}`}>
                      <label className="col-sm-4 m-0 pb-3">비밀번호 재입력: </label>
                      <div className="col-sm-8 p-0">
                        <input type="password" className={`col-sm ${style.Auth_password}`} name="re_password" onChange={handleChange}
                                ref={register({required: true,  minLength: 8, maxLength: 16, pattern: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/})}></input>
                        <div className={errors.re_password? `${style.Auth_error}` : `${style.Auth_noterror}`}>
                          {(errors.re_password)?.type === "required" ? "비밀번호롤 입력하세요."
                           : 
                           (errors.re_password)?.type === "minLength" ? "8자리 이상 작성해주세요." 
                           : 
                           (errors.re_password)?.type === "maxLength" ? "16자리 이하로 작성해주세요." : "숫자, 영문, 특수문자 1개 이상 사용해주세요."}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className={`button_team2_fill`} type="submit">수정</button>  
                      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} lightBackground/>        
                      <React.Fragment>
                        <ValidationModal open={validationModalOpen} close={closeValidationModal} errorMsg={errorMsg}></ValidationModal>
                      </React.Fragment>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </section>
        ) : null}
      </div>
    </div>

    
  );
}

export default Auth;
