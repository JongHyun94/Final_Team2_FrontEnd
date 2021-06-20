import React from "react";
import "./InspectionModal.css";

export const InspectionBarcodePop = (props) => {
  const {open, closeCheck, closeCancel, barcodeImg, inspectionListName, patientName, inspectionInspectorName} = props;

  return(
    <div className="InspectionModal">
    <div className={open ? 'openModal modal':'modal'} >
      {open? (
        <section>
            {/* InspectionBarcodePop */}
          <div className="InspectionBarcodePop">
            <div className="InspectionBarcodePop_1_1">
              <img src={`/resources/img/${barcodeImg}`} width="100%" height="100%" alt=""></img>
            </div>
            <div className="InspectionBarcodePop_1_2 border">
              <div className="mr-3 ml-3">
                <div className="mb-3">검사명 :</div>
                <div className="mb-3">피검사자 :</div>
                <div>검사자 :</div>
              </div>
              <div>
                <div className="mb-3">{inspectionListName}</div>
                <div className="mb-3">{patientName}</div>
                <div>{inspectionInspectorName}</div>
              </div>
            </div>
            <div className="InspectionBarcodePop_1_3">
              <button className="button_team2_fill" onClick={closeCheck}>확인</button>
              <button className="button_team2_empty" onClick={closeCancel}>취소</button>
            </div>
          </div>
        </section>
      ):null}
    </div>
    </div>
  )
}