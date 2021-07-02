import { useState } from "react";
import UserCreateForm from "./UserCreateForm";
import UserList from "./UserList";
import UserUpdateForm from "./UserUpdateForm";

function User(props) {
  // 직원 상태
  const [user, setUser] = useState({});

  // 검색 상태
  const [keyword, setKeyword] = useState("");

  function changeUser(user) {
    setUser({
      userId: user.userId,
      userName: user.userName,
      userAuthority: user.userAuthority,
      userSsn1: user.userSsn1,
      userSsn2: user.userSsn2,
      userSex: user.userSex,
      userTel1: user.userTel1,
      userTel2: user.userTel2,
      userTel3: user.userTel3,
      userEmail1: user.userEmail1,
      userEmail2: user.userEmail2,
      userZipcode: user.userZipcode,
      userAddress: user.userAddress,
      userDetailAddress1: user.userDetailAddress1,
      userDetailAddress2: user.userDetailAddress2,
      userRegDate: user.userRegDate
    });
  };
  console.log(user);

  function search(keyword) {
    setKeyword(keyword);
    console.log("keyword출력:", keyword);
  };

  return (
    <div className="row no-gutters User">
      {/* 좌측 */}
      <div className="User_left UserList">
        {/* 직원 목록 */}
        <UserList user={user} changeUser={changeUser} search={search}/>
      </div>

      {/* 우측 */}
      <div className="User_right">
        <div>
          {/* 직원 정보 수정 */}
          <UserUpdateForm user={user}/>
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