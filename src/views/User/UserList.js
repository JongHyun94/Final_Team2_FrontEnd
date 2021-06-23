import { useState } from "react";
import { AutoSizer, List } from "react-virtualized";

function getUserList() {
  const users = [];
  for (var i =1; i <= 10; i++) {
    users.push({userId: i, userName: "직원"+i, userAuthority: "의사", userSsn: "751026", userSex: "M", userTel: "010-1234-5678", userAddress: "서울 송파구 아이티벤처타워 12층 1강의실", userRegDate:"2021-06-01"})
  }
  for (i = 11; i <= 20; i++) {
    users.push({userId: i, userName: "직원"+i, userAuthority: "간호사", userSsn: "751026", userSex: "M", userTel: "010-1234-5678", userAddress: "서울 송파구 아이티벤처타워 12층 1강의실", userRegDate:"2021-06-01"})
  }
  for (i = 21; i <= 30; i++) {
    users.push({userId: i, userName: "직원"+i, userAuthority: "검사자", userSsn: "751026", userSex: "M", userTel: "010-1234-5678", userAddress: "서울 송파구 아이티벤처타워 12층 1강의실", userRegDate:"2021-06-01"})
  }
  return users;
}

function UserList(props) {
  // 직원 목록 상태
  const [users, setUsers] = useState(getUserList);

  // 검색 상태
  const [keyword, setKeyword] = useState("");

  // 직원 코드 비교를 위한 상태
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setKeyword(event.target.value);
    console.log(keyword);
  };

  // 검색
  const handleSearch = (event) => {
    event.preventDefault();
    const data = {...keyword};
    props.search(data);
    console.log(...keyword);
  };

  // 직원 선택
  const handleClick = (userId) => {
    setId(userId);
    props.changeId(userId);
  };

  const rowRenderer = ({index, key, style}) => {
    return (
      <tr className="UserList_tr" key={key} style={style} onClick={() => handleClick(users[index].userId)}>
        <td key={users.userId}><input type="checkbox" width={50} checked={id === users[index].userId? true : false} readOnly></input></td>
        <td width={100}>{users[index].userId}</td>
        <td width={80}>{users[index].userName}</td>
        <td width={80}>{users[index].userAuthority}</td>
        <td width={105}>{users[index].userSsn}</td>
        <td>{users[index].userSex}</td>
        <td>{users[index].userTel}</td>
        <td width={330}>{users[index].userAddress}</td>
        <td>{users[index].userRegDate}</td>
      </tr>
    );
  };

  return (
    <div>
      <div className="User_title">직원 목록</div>
      <div className="UserList_content border">
        <div className="mb-2">
          <input type="text" className="col-3" name="search" placeholder="이름/생년월일을 입력하세요." onChange={handleChange}></input>
          <button className="button_team2_fill" onClick={handleSearch}>검색</button>
        </div>
        <table className="table text-center">
          <thead>
            <tr className="UserList_Table">
              <th style={{width: "4%"}}></th>
              <th style={{width: "9%"}}>직원 코드</th>
              <th style={{width: "10%"}}>직원명</th>
              <th style={{width: "10%"}}>직급</th>
              <th style={{width: "9%"}}>생년월일</th>
              <th style={{width: "6%"}}>성별</th>
              <th style={{width: "15%"}}>전화번호</th>
              <th>주소</th>
              <th style={{width: "13%"}}>등록일</th>
              <th style={{width: "3%"}}></th>
            </tr>
          </thead>
          <tbody>
            <AutoSizer disableHeight>
              {({width, height}) => {
                return <List width={width} height={660} list={users} rowCount={users.length} rowHeight={44} rowRenderer={rowRenderer} overscanRowCount={5}></List>
              }}
            </AutoSizer>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;