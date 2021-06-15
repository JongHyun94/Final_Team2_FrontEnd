function RegisterRead(props) {
  return (
    <div className="border">
      {/* 상단 메뉴 이름 */}
      <div className="RegisterRead_header">
        <h4>접수 상세 내역</h4>
      </div>
      {/* 하단 내용 */}
      <div className="RegisterRead_content">
        {/* 접수 상세 내역 내용 */}
        <div className="RegisterRead_content_form">
          <form>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                <h6>환자명:</h6>
              </div>
              <div className="RegisterRead_content_list_input">
                <input type="text" value="민지현" />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                <h6>생년월일:</h6>
              </div>
              <div className="RegisterRead_content_list_input">
                <input type="text" value="960119" />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                <h6>전화번호:</h6>
              </div>
              <div className="RegisterRead_content_list_input">
                <input type="text" value="010-1234-5678" />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                <h6>담당의:</h6>
              </div>
              <div className="RegisterRead_content_list_input">
                <input type="text" value="김더존(D13801001001)" />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                <h6>진료 날짜:</h6>
              </div>
              <div className="RegisterRead_content_list_input">
                <input type="text" value="2021-06-03" />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                <h6>진료 시간:</h6>
              </div>
              <div className="RegisterRead_content_list_input">
                <input type="text" value="14:30" />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                <h6>접수 메모:</h6>
              </div>
              <div className="RegisterRead_content_list_input">
                <input type="text" value="복통" />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                <h6>의사소통 메모:</h6>
              </div>
              <div className="RegisterRead_content_list_input">
                <input type="text" value="10분 뒤에 들어갑니다." />
              </div>
            </div>
          </form>
        </div>
        {/* 수정 취소 버튼 */}
        <div className="RegisterRead_content_button">
          <button className="btn btn-primary btn-sm mb-2">수정</button>
          <button className="btn btn-primary btn-sm">취소</button>
        </div>
      </div>
    </div>
  );
}
export default RegisterRead;
