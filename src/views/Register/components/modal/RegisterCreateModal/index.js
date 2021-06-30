import "./RegisterCreateModal.css"
import React from 'react';
import RegisterCreateForm from "./RegisterCreateForm";
import RegisterPatientList from "./RegisterPatientList";
function RegisterCreateModal(props) {
  const { open, close, header, doctors, register } = props;
  return (
    <div className="RegisterCreateModal">
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
            </header>
            <main>
              <div className="RegisterCreateModal_main">
                <RegisterPatientList register={register} />
                <RegisterCreateForm doctors1={doctors} register={register} />
              </div>
            </main>
            <footer>
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
            </footer>
          </section>
        ) : null}
      </div>
    </div>
  );
}
export default RegisterCreateModal;
