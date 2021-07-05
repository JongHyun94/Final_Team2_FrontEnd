import style from "./ToDoList.module.css";
import React, { useEffect, useState } from "react";
import moment from "moment";

function getToDoList() {
  const someToDoList = [];
  for (var i = 1; i <= 10; i++) {
    someToDoList.push({
      id: i,
      doctorId: "의사1",
      content: "내용" + i,
      date: "2021-06-29",
      state: "yet"
    });
  }
  for (i = 11; i <= 20; i++) {
    someToDoList.push({
      id: i,
      doctorId: "의사1",
      content: "내용" + i,
      date: "2021-06-29",
      state: "done"
    });
  }
  return someToDoList;
}
function ToDoList(props) {
  const {selectDate} = props;
  console.log(selectDate);

  const [someDay, setSomeDay] = useState(moment(selectDate).format("M/DD"));

  const [idNo, setIdNo] = useState(21);

  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState(getToDoList);

  const inputTextHandler = (event) => {
    setInputText(
      event.target.value
    );
  };
  const addToDoList = () => {
    console.log("click add ToDoList");
    const newToDo = {
      id: idNo,
      doctorId: "의사1",
      content: inputText,
      date: "2021-06-29",
      state: "yet"
    }
    const newToDoList = toDoList.concat(newToDo);
    newToDoList.sort((a, b) => {
      return b.id - a.id; //내림차순
    });
    setToDoList(newToDoList);
    setIdNo(idNo + 1);
    setInputText("");
  };

  const changeYet = (id) => {
    console.log(id);
    const newToDoList = toDoList.map(toDo => {
      if (toDo.id === id) {
        const newToDo = { ...toDo, state: "done" };
        return newToDo;
      } else {
        return toDo;
      }
    });
    setToDoList(newToDoList);
  };
  const changeDone = (id) => {
    console.log(id);
    const newToDoList = toDoList.map(toDo => {
      if (toDo.id === id) {
        const newToDo = { ...toDo, state: "yet" };
        return newToDo;
      } else {
        return toDo;
      }
    });
    setToDoList(newToDoList);
  };
  const deleteToDo = (id) => {
    const newToDoList = toDoList.filter(toDo => {
      return toDo.id !== id;
    });
    setToDoList(newToDoList);
  };



  return (
    <div className={style.ToDoList}>
      <div className={style.ToDoList_header}>
        <div className={style.ToDoList_header_name}>
          <h2>To Do List</h2>
        </div>
        <div>
          {someDay}
        </div>
        <div className={style.ToDoList_header_inputLabel}>
          <div className={style.ToDoList_header_inputLabel_input}>
            <input type="text" value={inputText} onChange={inputTextHandler} placeholder="할 일을 입력해주세요."></input>
          </div>
          <div className={style.ToDoList_header_inputLabel_button}>
            <button className="button_team2_fill" onClick={addToDoList}>+</button>
          </div>
        </div>
      </div>
      <div className={style.ToDoList_content}>
        <div className={style.ToDoList_content_header}>

        </div>
        <div className={style.ToDoList_content_items}>
          <div className={style.ToDoList_content_items_yet_header}>
            <div className={style.ToDoList_content_items_yet_header_1}>
              Doing
            </div>
            <div className={style.ToDoList_content_items_yet_header_2}>
              {toDoList.filter(toDo => {
                if (toDo.state === "yet") {
                  return toDo;
                }
              }).length}
            </div>
          </div>
          <div className={style.ToDoList_content_items_yet_itmes}>
            {toDoList.map(toDo => {
              if (toDo.state === "yet") {
                return (
                  <div className={style.ToDoList_content_items_yet_item} onDoubleClick={() => changeYet(toDo.id)} key={toDo.id}>
                    <div className={style.ToDoList_content_items_yet_item_content}>
                      {toDo.content}
                    </div>
                    <div className={style.ToDoList_content_items_yet_item_btns}>
                      {/* <div className="ToDoList_content_items_yet_item_btns_btn">
                        <button className="ToDoList_btn_V">V</button>
                      </div> */}
                      <div className={style.ToDoList_content_items_yet_item_btns_btn}>
                        <button className={style.ToDoList_btn_X} onClick={() => deleteToDo(toDo.id)}>X</button>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
          <div className={style.ToDoList_content_items_done_header}>
            <div className={style.ToDoList_content_items_done_header_1}>
              Done
            </div>
            <div className={style.ToDoList_content_items_done_header_2}>
              {toDoList.filter(toDo => {
                if (toDo.state === "done") {
                  return toDo;
                }
              }).length}
            </div>
          </div>
          <div className={style.ToDoList_content_items_done_itmes}>
            {toDoList.map(toDo => {
              if (toDo.state === "done") {
                return (
                  <div className={style.ToDoList_content_items_done_item} onDoubleClick={() => changeDone(toDo.id)} key={toDo.id}>
                    <div className={style.ToDoList_content_items_done_item_content}>
                      {toDo.content}
                    </div>
                    <div className={style.ToDoList_content_items_done_item_btns}>
                      {/* <div className="ToDoList_content_items_done_item_btns_btn">
                        <button className="ToDoList_btn_V">V</button>
                      </div> */}
                      <div className={style.ToDoList_content_items_done_item_btns_btn}>
                        <button className={style.ToDoList_btn_X2} onClick={() => deleteToDo(toDo.id)}>X</button>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
      {/* <div className="ToDoList_footer">

      </div> */}
    </div>
  );
}
export default ToDoList;
