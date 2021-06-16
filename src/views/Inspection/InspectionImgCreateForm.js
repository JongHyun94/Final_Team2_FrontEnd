function InspectionImgCreateForm(props) {
  return (
    <div className="InspectionImgCreateForm">
      <div className="InspectionImgCreateForm_title">
        검사 결과 등록
      </div>
      <div className="InspectionImgCreateForm_1 border">
        <div className="InspectionImgCreateForm_1_1 row">
          <div className="col-6">
            <div className="mb-1">진단검사명 :</div>
            <div className="mb-1">검사명 :</div>
            <div className="mb-1">진료번호 :</div>
            <div className="mb-1">담당의 :</div>
            <div className="mb-1">검사자 :</div>
            <div className="mb-1">검사실 :</div>
            <div>첨부파일 :</div>
          </div>
          <div className="col-6">
            <div className="mb-1">x-ray</div>
            <div className="mb-1">흉부 촬영</div>
            <div className="mb-1">1312</div>
            <div className="mb-1">김더존</div>
            <div className="mb-1">박더존</div>
            <div className="mb-1">피검사실</div>
            <div></div>
          </div>
        </div>
        <div className="InspectionImgCreateForm_1_1_1">
          <input type="file" style={{width:"100%"}}/>
        </div>
        <div className="InspectionImgCreateForm_1_2">
          <button className="button_team2_fill">등록</button>
        </div>
      </div>
      
    </div>
  );
}

export default InspectionImgCreateForm;