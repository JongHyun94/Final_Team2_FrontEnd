import { useEffect, useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import { getAllUserList, getUserList } from "apis/users";
import moment from "moment";

function UserList(props) {
  // 직원 목록 상태
  const [users, setUsers] = useState([]);
  // 직원 직책 상태
  const [userState, setUserState] = useState([]);

  useEffect(() => {
    const work = async () => {
      try {
        const response = await getAllUserList();
        // console.log(response.data.userList)
        setUsers(response.data.userList);
        setUserState(() => getUsersAuthority(response.data.userList));
      } catch(error) {
        console.log(error);
      }
    };
    work();
  }, []);

  // 직원 직책 카운트
  function getUsersAuthority(userList) {
    const userAuthority = [];
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var countAll = 0;
    for (var i = 0; i < userList.length; i++) {
      if(userList[i].user_authority === "ROLE_DOCTOR") {
        count1++;
      } else if(userList[i].user_authority === "ROLE_NURSE") {
        count2++;
      } else if(userList[i].user_authority === "ROLE_INSPECTOR") {
        count3++;
      }
      countAll++;
    }
    userAuthority.push(count1);
    userAuthority.push(count2);
    userAuthority.push(count3);
    userAuthority.push(countAll);
  
    return userAuthority;
  };

  // 검색 상태
  const [keyword, setKeyword] = useState("");

  // 직원 코드 비교를 위한 상태
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  // 검색
  const handleSearch = async (event) => {
    try {
      event.preventDefault();
      console.log(keyword);
      const response = await getUserList(keyword, "");
      console.log(response.data.userList)
      setUsers(response.data.userList);
    } catch(error) {
      console.log(error);
    }
  };

  // 직원 선택
  const handleClick = (user) => {
    setId(user.user_id);
    props.changeUser(user)
  };

  // 직책 선택
  const clickAuthority = async (authority) => {
    try {
      console.log(authority, "선택");
      const response = await getUserList("", authority);
      setUsers(response.data.userList);
    } catch(error) {
      console.log(error);
    }
    // if(authority === "ROLE_DOCTOR") {
    //   setUsers(prevUsers => {
    //     const newUsers = prevUsers.filter(users => users.user_authority === "ROLE_DOCTOR");
    //     return newUsers;
    //   });
    // } else if (authority === "ROLE_NURSE") {
    //   setUsers(prevUsers => {
    //     const newUsers = prevUsers.filter(users => users.user_authority === "ROLE_NURSE");
    //     return newUsers;
    //   });
    // } else if (authority === "ROLE_INSPECTOR") {
    //   setUsers(prevUsers => {
    //     const newUsers = prevUsers.filter(users => users.user_authority === "ROLE_INSPECTOR");
    //     return newUsers;
    //   });
    // }  else {
    //   setUsers(prevUsers => {
    //     const newUsers = prevUsers.filter(users => users.user_authority !== "");
    //     return newUsers;
    //   });
    // } 
  };

  const rowRenderer = ({index, key, style}) => {
    return (
      <div className="UserList_tr" key={key} style={style} onClick={() => handleClick(users[index])}>
        <div style={{width: "3%"}} key={users.user_id}><input type="checkbox" width={50} checked={id === users[index].user_id? true : false} readOnly></input></div>
        <div style={{width: "11%"}}>{users[index].user_id}</div>
        <div style={{width: "6%"}}>{users[index].user_name}</div>
        <div style={{width: "9%"}}>{users[index].user_authority === "ROLE_DOCTOR"? "의사" 
                                    : (users[index].user_authority === "ROLE_NURSE"? "간호사" : "임상병리사")}</div>
        <div style={{width: "8%"}}>{users[index].user_ssn1}</div>
        <div style={{width: "4%"}}>{users[index].user_sex === "M"? "남" : "여"}</div>
        <div style={{width: "12%"}}>{users[index].user_tel1} - {users[index].user_tel2} - {users[index].user_tel3}</div>
        <div style={{width: "12%"}}>{users[index].user_email1}@{users[index].user_email2}</div>
        <div style={{width: "34%"}}>{users[index].user_address} {users[index].user_detailaddress1} {users[index].user_detailaddress2}</div>
        <div style={{width: "11%"}}>{moment(users[index].user_regdate).format("yyyy-MM-DD")}</div>
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
          <div className="pr-3" onClick={() => clickAuthority("")}>전체: {userState[3]}명</div>
            <div className="pr-3" onClick={() => clickAuthority("ROLE_DOCTOR")}>의사: {userState[0]}명</div>
            <div className="pr-3" onClick={() => clickAuthority("ROLE_NURSE")}>간호사: {userState[1]}명</div>
            <div onClick={() => clickAuthority("ROLE_INSPECTOR")}>임상병리사: {userState[2]}명</div>
          </div>
        </div>
        <div className="text-center">
            <div className="UserList_Table">
              <div style={{width: "2%"}}></div>
              <div style={{width: "11%"}}>직원 코드</div>
              <div style={{width: "7%"}}>직원명</div>
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