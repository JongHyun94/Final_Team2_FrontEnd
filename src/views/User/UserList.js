import { useEffect, useState } from "react";
import { AutoSizer, List, Table, Column } from "react-virtualized";

function getUserList() {
  const users = [];
  for (var i =1; i <= 7; i++) {
    users.push({userId: i, userName: "직원"+i, userAuthority: "의사", userSsn1: "751026", userSsn2: "1234567", userSex: "M", userTel1: "010", userTel2: "1234", userTel3: "5678", userEmail1: "abcde" + i, userEmail2: "@naver.com", userZipcode: "01234", userAddress: "서울 송파구", userDetailAddress1: "12층 1강의실", userDetailAddress2: "아이티벤처타워", userRegDate:"2021-06-01"})
  }
  for (i = 8; i <= 12; i++) {
    users.push({userId: i, userName: "직원"+i, userAuthority: "간호사",  userSsn1: "751026", userSsn2: "2234567", userSex: "F", userTel1: "010", userTel2: "1234", userTel3: "5678", userEmail1: "fghij" + i, userEmail2: "@gmail.com", userZipcode: "01234", userAddress: "서울 송파구", userDetailAddress1: "12층 1강의실", userDetailAddress2: "아이티벤처타워", userRegDate:"2021-06-01"})
  }
  for (i = 13; i <= 20; i++) {
    users.push({userId: i, userName: "직원"+i, userAuthority: "임상병리사",  userSsn1: "751026", userSsn2: "1234567", userSex: "M",  userTel1: "010", userTel2: "1234", userTel3: "5678", userEmail1: "klmno" + i, userEmail2: "@daum.net", userZipcode: "01234", userAddress: "서울 송파구", userDetailAddress1: "12층 1강의실", userDetailAddress2: "아이티벤처타워", userRegDate:"2021-06-01"})
  }
  return users;
};

function getUsersAuthority(userList) {
  const userAuthority = [];
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var countAll = 0;
  for (var i = 0; i < userList.length; i++) {
    if(userList[i].userAuthority === "의사") {
      count1++;
    } else if(userList[i].userAuthority === "간호사") {
      count2++;
    } else if(userList[i].userAuthority === "임상병리사") {
      count3++;
    }
    countAll++;
  }
  userAuthority.push(count1);
  userAuthority.push(count2);
  userAuthority.push(count3);
  userAuthority.push(countAll);

  return userAuthority;
}

function UserList(props) {
  // 직원 목록 상태
  const [users, setUsers] = useState(getUserList);

  // 직원 직책 상태
  const [userState, setUserState] = useState(() => getUsersAuthority(users));

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
  const handleClick = (user) => {
    setId(user.userId);
    props.changeUser(user)
  };

  // 직책 선택
  const clickAuthority = (authority) => {
    console.log(authority, "선택");
   /*  if(authority === "의사") {
      setUsers(prevUsers => {
        const newUsers = prevUsers.filter(users => users.userAuthority === "의사");
        return newUsers;
      });
    } else if (authority === "간호사") {
      setUsers(prevUsers => {
        const newUsers = prevUsers.filter(users => users.userAuthority === "간호사");
        return newUsers;
      });
    } else if (authority === "임상병리사") {
      setUsers(prevUsers => {
        const newUsers = prevUsers.filter(users => users.userAuthority === "임상병리사");
        return newUsers;
      });
    }  else {
      setUsers(prevUsers => {
        const newUsers = prevUsers.filter(users => users.userAuthority !== "");
        return newUsers;
      });
    } */
  };

  // users가 변동되면 직책 상태 다시 리렌더링
  useEffect(() => {
    setUserState((getUsersAuthority(users)));
  }, [users]);

  const rowRenderer = ({index, key, style}) => {
    return (
      <div className="UserList_tr" key={key} style={style} onClick={() => handleClick(users[index])}>
        <div style={{width: "3%"}} key={users.userId}><input type="checkbox" width={50} checked={id === users[index].userId? true : false} readOnly></input></div>
        <div style={{width: "11%"}}>{users[index].userId}</div>
        <div style={{width: "10%"}}>{users[index].userName}</div>
        <div style={{width: "9%"}}>{users[index].userAuthority}</div>
        <div style={{width: "9%"}}>{users[index].userSsn1}</div>
        <div style={{width: "4%"}}>{users[index].userSex}</div>
        <div style={{width: "16%"}}>{users[index].userTel1} - {users[index].userTel2} - {users[index].userTel3}</div>
        <div>{users[index].userEmail1}{users[index].userEmail2}</div>
        <div style={{width: "35%"}}>{users[index].userAddress} {users[index].userDetailAddress1} ({users[index].userDetailAddress2})</div>
        <div style={{width: "11%"}}>{users[index].userRegDate}</div>
      </div>
    );
  };

  return (
    <div>
      <div className="User_title">직원 목록</div>
      <div className="UserList_content border">
        <div className="mb-2 UserList_content1">
          <div className="UserList_content1_1">
            <input type="text" className="col" name="search" placeholder="이름/생년월일을 입력하세요." onChange={handleChange}></input>
            <button className="button_team2_fill" onClick={handleSearch}>검색</button>
          </div>
          <div className="UserList_content1_2">
          <div className="pr-3" onClick={() => clickAuthority("전체")} value="전체">전체: {userState[3]}명</div>
            <div className="pr-3" onClick={() => clickAuthority("의사")} value="의사">의사: {userState[0]}명</div>
            <div className="pr-3" onClick={() => clickAuthority("간호사")} value="간호사">간호사: {userState[1]}명</div>
            <div onClick={() => clickAuthority("임상병리사")} value="임상병리사">임상병리사: {userState[2]}명</div>
          </div>
        </div>
        <div className="text-center">
            <div className="UserList_Table">
              <div style={{width: "2%"}}></div>
              <div style={{width: "11%"}}>직원 코드</div>
              <div style={{width: "8%"}}>직원명</div>
              <div style={{width: "10%"}}>직책</div>
              <div style={{width: "7%"}}>생년월일</div>
              <div style={{width: "5%"}}>성별</div>
              <div style={{width: "13%"}}>전화번호</div>
              <div style={{width: "13%"}}>이메일</div>
              <div style={{width: "32%"}}>주소</div>
              <div style={{width: "11%"}}>등록일</div>
            </div>
          <div>
            <AutoSizer disableHeight>
              {({width, height}) => {
                return <List width={width} height={660} list={users} rowCount={users.length} rowHeight={44} rowRenderer={rowRenderer} overscanRowCount={5}></List>
              }}
            </AutoSizer>
          </div>
        </div>
        {/* <div className="UserList_container">
          <div className="content">
            <AutoSizer disableHeight>
              {({width, height}) => {
                return <Table headerHeight={44} width={width} height={500} rowHeight={200} rowCount={users.length} rowGetter={({index}) => users[index]} overscanRowCount={5}>
                  <Column className="border" label="선택" dataKey="userId" width={width}><input type="checkbox"></input></Column>
                  <Column label="직원 코드" dataKey="userId" width={width}/>
                  <Column label="직원명" dataKey="userName" width={width}/>
                  <Column label="직책" dataKey="userAuthority" width={width}/>
                  <Column label="생년월일" dataKey="userSSn" width={width}/>
                  <Column label="성별" dataKey="userSex" width={width}/>
                  <Column label="전화번호" dataKey="userTel1" width={width}/>
                  <Column label="주소" dataKey="userAddress" width={width}/>
                  <Column label="등록일" dataKey="userRegDate" width={width}/>
                </Table>
              }}
            </AutoSizer>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default UserList;