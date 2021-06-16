import "./Register.css";
import { AutoSizer, List } from "react-virtualized";
function RegisterList(props) {

  // const rowRenderer = ({index, key, style}) => {
  //   return (
  //     <div key={key} style={style}>
  //       <BoardListItem board={boards[index]} 
  //                      changeBoard={changeBoard} 
  //                      removeBoard={removeBoard}/>        
  //     </div>
  //   );
  // };
  return (
    <div>
      {/* 상단 메뉴 이름 + 버튼 */}
      <div className="RegisterList_header">
        <div className="RegisterList_header_content">
          <h4>접수 내역</h4>
        </div>
        <div className="RegisterList_header_button">
          <button className="btn btn-primary btn-sm">신규 환자 등록</button>
        </div>
      </div>
      {/* 하단 내용 */}
      <div className="RegisterList_content border">
        {/* 달력 , 상태 , 완료 버튼 */}
        <div className="RegisterList_content_1">
          <div className="RegisterList_content_1_1">
            <div>
              <input type="date" />
            </div>
            <div>
              <button className="btn btn-primary btn-sm">이동</button>
            </div>
          </div>
          <div className="RegisterList_content_1_2">
            <div className="RegisterList_content_1_2_ready">
              대기: 2명
            </div>
            <div className="RegisterList_content_1_2_finish">
              완료: 1명
            </div>
            <div className="RegisterList_content_1_2_cancel">
              취소: 1명
            </div>
          </div>
          <div className="RegisterList_content_1_3">
            <button className="btn btn-primary btn-sm">접수 완료</button>
          </div>
        </div>
        {/* 접수 내역 테이블 */}
        <div className="RegisterList_content_2">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>순번</th>
                <th>예약 시간</th>
                <th>접수 번호</th>
                <th>환자명</th>
                <th>생년월일</th>
                <th>성별</th>
                <th>담당의</th>
                <th>접수 메모</th>
                <th>의사소통 메모</th>
                <th>접수 상태</th>
              </tr>
            </thead>
            <tbody>
              {/* <AutoSizer disableHeight>
                {({ width, height }) => {
                  return (
                    <List width={width} height={300}
                      list={boards}
                      rowCount={boards.length}
                      rowHeight={40}
                      rowRenderer={rowRenderer}
                      overscanRowCount={5}
                    // style={{outline:"none"}}
                    />
                  );
                }}
              </AutoSizer> */}
              <tr>
                <td><input type="checkbox"/></td>
                <td>1</td>
                <td>10:30</td>
                <td>33333</td>
                <td>박빛나</td>
                <td>960903</td>
                <td>F</td>
                <td>나의사</td>
                <td>접수 메모</td>
                <td>의사소통 메모</td>
                <td>접수 상태</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>2</td>
                <td>11:30</td>
                <td>33334</td>
                <td>이종현</td>
                <td>940606</td>
                <td>M</td>
                <td>나의사</td>
                <td>접수 메모</td>
                <td>의사소통 메모</td>
                <td>접수 상태</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>3</td>
                <td>12:30</td>
                <td>33335</td>
                <td>민지현</td>
                <td>960119</td>
                <td>F</td>
                <td>나의사</td>
                <td>접수 메모</td>
                <td>의사소통 메모</td>
                <td>접수 상태</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>4</td>
                <td>13:30</td>
                <td>33336</td>
                <td>윤서영</td>
                <td>960708</td>
                <td>F</td>
                <td>나의사</td>
                <td>접수 메모</td>
                <td>의사소통 메모</td>
                <td>접수 상태</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default RegisterList;
