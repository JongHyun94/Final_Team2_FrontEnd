function InspectionImgCreateForm(props) {
  return (
    <div className="InspectionImgCreateForm">
      <div className="InspectionImgCreateForm_title">
        검사 결과 등록
      </div>
      <div className="InspectionImgCreateForm_1">
        <div className="InspectionImgCreateForm_1_1">
          <div className="mr-5">
            <div className="mb-3">진단검사명 :</div>
            <div className="mb-3">검사명 :</div>
            <div className="mb-3">진료번호 :</div>
            <div>결과 :</div>
          </div>
          <div>
            <div className="mb-3">x-ray</div>
            <div className="mb-3">흉부 촬영</div>
            <div className="mb-3">1312</div>
            <input type="text"></input>
          </div>
        </div>
        <div className="InspectionImgCreateForm_1_2">
          <button className="btn btn-sm btn-primary">등록</button>
        </div>
      </div>
      
    </div>
  );
}

export default InspectionImgCreateForm;