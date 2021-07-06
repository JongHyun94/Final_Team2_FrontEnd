import style from "./RegisterWeekTimeTableModal.module.css"
import React, { useEffect, useState } from 'react';
import MonthTimeTable from "./MonthTimeTable";
import ToDoList from "./ToDoList";
function RegisterWeekTimeTableModal(props) {
  
  const { open, close, header } = props;
  const [selectDate, setSelectDate] = useState(new Date());
  useEffect(()=>{
    console.log("selectDate",selectDate);
  },[selectDate]);

  return (
    <div className={style.RegisterWeekTimeTableModal}>
      <div className={open ? `${style.openModal} ${style.modal}`:`${style.modal}`}>
        {open ? (
          <section>
            <header>
              <div className={style.RegisterWeekTimeTableModal_header}>
                {header}
              </div>
            </header>
            <main>
              <div className={style.Main_content}>
                <div className={style.RegisterWeekTimeTableModal_main}>
                  <MonthTimeTable
                    selectDate={selectDate}
                    setSelectDate={setSelectDate} />
                </div>
                <div className={style.ToDoList_main}>
                  <ToDoList selectDate={selectDate} />
                </div>
              </div>
            </main>
            <footer>
              <div className={style.RegisterWeekTimeTableModal_footer}>
                <button className="button_team2_fill" onClick={close}>확인</button>
              </div>
            </footer>
          </section>
        ) : null}
      </div>
    </div>
  );
}
export default RegisterWeekTimeTableModal;
