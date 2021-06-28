import "./RegisterCreateModal.css"
import React from 'react';
import MonthTimeTable from "./MonthTimeTable";
function RegisterWeekTimeTableModal(props) {
  const { open, close, header } = props;
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
          </header>
          <main>
            <div className="RegisterWeekTimeTableModal_main">
              <MonthTimeTable/>
            </div>
          </main>
          <footer>
            <button className="button_team2_fill" onClick={close}>확인</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
export default RegisterWeekTimeTableModal;
