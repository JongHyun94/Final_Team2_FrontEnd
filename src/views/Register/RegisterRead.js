function RegisterRead(props) {
  return (
    <div className="RegisterRead">
      {/* 상단 메뉴 이름 */}
      <div>
        <h3>접수 상세 내역</h3>
      </div>
      {/* 하단 내용 */}
      <div>
        {/* 접수 상세 내역 내용 */}
        <div>
          <form>
            <div>
              <label>환자명:</label>
              <input type="text" value="민지현"/>
            </div>
            <div>
              <label>생년월일:</label>
              <input type="text" value="960119"/>
            </div>
            <div>
              <label>전화번호:</label>
              <input type="text" value="010-1234-5678"/>
            </div>
            <div>
              <label>담당의:</label>
              <input type="text" value="김더존(D13801001001)"/>
            </div>
            <div>
              <label>진료 날짜:</label>
              <input type="text" value="2021-06-03"/>
            </div>
            <div>
              <label>진료 시간:</label>
              <input type="text" value="14:30"/>
            </div>
            <div>
              <label>접수 메모:</label>
              <input type="text" value="복통"/>
            </div>
            <div>
              <label>의사소통 메모:</label>
              <input type="text" value="10분 뒤에 들어갑니다."/>
            </div>
          </form>
        </div>
        {/* 수정 취소 버튼 */}
        <div>
          <button className="btn btn-primary btn-sm">수정</button>
          <button className="btn btn-primary btn-sm">취소</button>
        </div>
      </div>
    </div>
  );
}
export default RegisterRead;
