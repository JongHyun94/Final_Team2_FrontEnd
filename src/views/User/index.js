import { useState } from "react";
import "./User.css";
import UserCreateForm from "./UserCreateForm";
import UserList from "./UserList";
import UserUpdateForm from "./UserUpdateForm";

function User(props) {
  // 직원 코드 상태
  const [userId, setUserId] = useState("");

  // 검색 상태
  const [keyword, setKeyword] = useState("");
  
  function changeId(id) {
    setUserId(id);
  };

  function search(keyword) {
    setKeyword(keyword);
    console.log("keyword출력:", keyword);
  };

  return (
    <div className="row no-gutters User">
      {/* 좌측 */}
      <div className="User_left UserList">
        {/* 직원 목록 */}
        <UserList userId={userId} changeId={changeId} search={search}/>
      </div>

      {/* 우측 */}
      <div className="User_right">
        <div>
          {/* 직원 정보 수정 */}
          <UserUpdateForm userId={userId}/>
        </div>
        <div>
          {/* 직원 등록 */}
          <UserCreateForm/>
        </div>
      </div>
    </div>
  );
}

export default User;