import React from "react";
import "./modal.css";

export const InspectionBarcodePop = (props) => {
  const {open, closeCheck, closeCancel, barcodeImg, inspection_list_name, patient_name, inspection_inspector_name} = props;

  return(
    <div className={open ? 'openModal modal':'modal'}>
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
                <div className="mb-3">{inspection_list_name}</div>
                <div className="mb-3">{patient_name}</div>
                <div>{inspection_inspector_name}</div>
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
  )
}