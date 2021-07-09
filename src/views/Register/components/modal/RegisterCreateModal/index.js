import style from "./RegisterCreateModal.module.css";
import React, { useEffect, useState } from 'react';
import RegisterCreateForm from "./RegisterCreateForm";
import RegisterPatientList from "./RegisterPatientList";
import { createRegister, updateRegister } from "apis/register";
import moment from "moment";
function RegisterCreateModal(props) {
  const { open, close, header, doctors, register, publishTopic } = props;

  const [newRegister, setNewRegister] = useState(register.register_id ? register : {
    register_id: "",
    register_patient_id: "",
    register_user_id: "",
    register_regdate: "",
    register_date: moment().format("yyyy-MM-DD H:m"),
    register_starttime: "",
    register_memo: "",
    register_communication: "",
    register_state: "",

    // Add Data
    patient_name: "",
    patient_ssn: "",
    patient_sex: "",
    patient_tel: "",

    user_name: "",
  });
  // const noneDoctor = {
  //   user_id: "",
  //   user_hospital_id: "",
  //   user_password: "",
  //   user_name: "",
  //   user_ssn: "",
  //   user_tel: "",
  //   user_email: "",
  //   user_sex: "",
  //   user_zipcode: "",
  //   user_address: "",
  //   user_detailaddress1: "",
  //   user_detailaddress2: "",
  //   user_regdate: "",
  //   user_enabled: "",
  //   user_authority: "",
  // };
  // var doctor;
  // if (props.doctors) {
  //   doctor = doctors;
  // } else {
  //   doctor = noneDoctor;
  // }

  // const [newMemo, setNewMemo] = useState(register.register_memo);
  // const [newCMemo, setNewCMemo] = useState(register.register_communication);

  const createNewRegister = async () => {
    console.log("등록");
    try {
      console.log("000접수",newRegister);
      var list = await createRegister(newRegister);
      console.log("결과값", list.data.result);
      if (list.data.result === "중복") {
        console.log("이미 예약이 되어있습니다.");
      } else if (list.data.result === "성공") {
        publishTopic(0);
        close();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const updateNewRegister = async () => {
    console.log("수정");
    try {
      console.log("3333접수",newRegister);
      var list = await updateRegister(newRegister);
      console.log("결과값", list.data.result);
      if (list.data.result === "중복") {
        console.log("이미 예약이 되어있습니다.");
      } else if (list.data.result === "성공") {
        publishTopic(0);
        close();
      }
    } catch (e) {
      console.log(e);
    }
  };

  //-------------------------------------------------------------
  //마운트 및 언마운트에 실행할 내용
  //-------------------------------------------------------------  
  useEffect(() => {
    setNewRegister({ ...newRegister, register_state: "대기" });
  }, [newRegister]);
  //-------------------------------------------------------------
  //렌더링 내용
  //-------------------------------------------------------------
  return (
    <div className={style.RegisterCreateModal}>
      <div className={open ? `${style.openModal} ${style.modal}` : `${style.modal}`}>
        {open ? (
          <section>
            <header>
              <div className={style.RegisterCreateModal1}>
                {header}
              </div>
            </header>
            <main>
              <div className={style.RegisterCreateModal_main}>
                <RegisterPatientList register={register} newRegister={newRegister} setNewRegister={setNewRegister} />
                <RegisterCreateForm doctors={doctors} register={register} newRegister={newRegister} setNewRegister={setNewRegister} />
              </div>
            </main>
            <footer>
              <div className={style.RegisterCreateModal_footer}>
                {register.register_state === "완료" ?
                  <>
                    <button className="button_team2_empty" onClick={close}>확인</button>
                  </>
                  :
                  <>
                    <button className="button_team2_empty" onClick={close}>취소</button>
                    {register.register_state === "대기" ?
                      <button className="button_team2_fill" onClick={updateNewRegister}>수정</button>
                      :
                      <button className="button_team2_fill" onClick={createNewRegister}>등록</button>
                    }
                  </>
                }
              </div>
            </footer>
          </section>
        ) : null}
      </div>
    </div>
  );
}
export default RegisterCreateModal;
