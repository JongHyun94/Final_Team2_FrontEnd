import style from "./RegisterCreateModal.module.css";
import React, { useState } from 'react';
import RegisterCreateForm from "./RegisterCreateForm";
import RegisterPatientList from "./RegisterPatientList";
import { createRegister } from "apis/register";
function RegisterCreateModal(props) {
  const { open, close, header, doctors, register } = props;

  const [newRegister, setNewRegister] = useState({
    register_id: "",
    register_patient_id: "",
    register_user_id: "",
    register_regdate: "",
    register_date: new Date(),
    register_starttime: "",
    register_memo: "",
    register_communication: "",
    register_state: "대기",
  });

  const createNewRegister = async () => {
    console.log("등록");
    try {
      console.log(newRegister);
      await createRegister(newRegister);
    } catch (e) {
      console.log(e);
    } finally {
      close();
    }
  };
  const updateRegister = async () => {
    console.log("수정");
    try {
      console.log(newRegister);
      await updateRegister(newRegister);
    } catch (e) {
      console.log(e);
    } finally {
      close();
    }
  };

  //-------------------------------------------------------------
  //마운트 및 언마운트에 실행할 내용
  //-------------------------------------------------------------  

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
                <RegisterPatientList register={register} newRegister={newRegister} setNewRegister={setNewRegister}/>
                <RegisterCreateForm doctors={doctors} register={register} newRegister={newRegister} setNewRegister={setNewRegister}/>
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
                      <button className="button_team2_fill" onClick={updateRegister}>수정</button>
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
