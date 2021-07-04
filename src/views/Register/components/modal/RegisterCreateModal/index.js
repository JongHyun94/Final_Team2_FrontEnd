import style from "./RegisterCreateModal.module.css";
import React from 'react';
import RegisterCreateForm from "./RegisterCreateForm";
import RegisterPatientList from "./RegisterPatientList";
function RegisterCreateModal(props) {
  const { open, close, header, doctors, register } = props;
  return (
    <div className={style.RegisterCreateModal}>
      <div className={open ? `${style.openModal} ${style.modal}`:`${style.modal}`}>
        {open ? (
          <section>
            <header>
              <div className={style.RegisterCreateModal1}>
                {header}
              </div>
            </header>
            <main>
              <div className={style.RegisterCreateModal_main}>
                <RegisterPatientList register={register} />
                <RegisterCreateForm doctors1={doctors} register={register} />
              </div>
            </main>
            <footer>
              <div className={style.RegisterCreateModal_footer}>
                {register.registerState === "완료" ?
                <>
                  <button className="button_team2_empty" onClick={close}>확인</button>
                </>
                :
                <>
                  <button className="button_team2_empty" onClick={close}>취소</button>
                  {register.registerState === "대기" ?
                    <button className="button_team2_fill" onClick={close}>수정</button>
                    :
                    <button className="button_team2_fill" onClick={close}>등록</button>
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
