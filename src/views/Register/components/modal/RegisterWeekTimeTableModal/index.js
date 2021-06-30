import "./RegisterWeekTimeTableModal.css"
import React, { useState } from 'react';
import MonthTimeTable from "./MonthTimeTable";
import ToDoList from "./ToDoList";
function RegisterWeekTimeTableModal(props) {
  const { open, close, header } = props;
  const [selectDate, setSelectDate] = useState();
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
          </header>
          <main>
            <div className="Main_content">
              <div className="RegisterWeekTimeTableModal_main">
                <MonthTimeTable
                 selectDate={selectDate}
                 setSelectDate={setSelectDate}/>
              </div>
              <div className="ToDoList_main">
                <ToDoList selectDate={selectDate}/>
              </div>
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
