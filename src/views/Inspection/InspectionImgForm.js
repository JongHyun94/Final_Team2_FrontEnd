function InspectionImgForm(props) {
  return (
    <div className="InspectionImgForm">
      <div className="InspectionImgForm_title">
        검사 사진
      </div>
      <div className="InspectionImgForm_1 border">

          {/* InspectionBarcodePop */}
          <div className="InspectionBarcodePop_1_1 border">
            바코드 이미지
          </div>
          <div className="InspectionBarcodePop_1_2 border">
            <div>
              <div className="mb-3">검사명 :</div>
              <div className="mb-3">피검사자 :</div>
              <div>검사자 :</div>
            </div>
            <div>
              <div className="mb-3">백혈구 백분율</div>
              <div className="mb-3">이환자</div>
              <div>박더존</div>
            </div>
          </div>
          <div className="InspectionBarcodePop_1_3">
            <button className="button_team2_fill">확인</button>
            <button className="button_team2_empty">취소</button>
          </div>

      </div>
    </div>
  );
}

export default InspectionImgForm;