import "./RegisterCreateModal.css"
import React from 'react';
import RegisterCreateForm from "./RegisterCreateForm";
import RegisterPatientList from "./RegisterPatientList";
function RegisterCreateModal(props) {
  const { open, close, header, doctors } = props;
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
          </header>
          <main>
            <div className="RegisterCreateModal_main">
              <RegisterPatientList/>
              <RegisterCreateForm doctors1={doctors}/>
            </div>
          </main>
          <footer>
            <button className="button_team2_empty" onClick={close}>취소</button>
            <button className="button_team2_fill" onClick={close}>등록</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
export default RegisterCreateModal;
