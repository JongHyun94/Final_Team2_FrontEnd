import React, { useState } from "react";
import "./TreatmentImgModal.css";

export const TreatmentImgRead = (props) => {
  const { open, close, inspectionImg, inspectionlistName, inspectionlistCategory, inspectionTreatmentId, inspectionDate } = props;
  // const [imgSrc, setImgSrc] = useState("xray01.jpg");
  return (
    <div className="TreatmentImgmodal">
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <div className="TreatmentImgRead">
              <div className="TreatmentImgRead_1">
                {/* <div className="TreatmentImgRead_1_1"> */}
                <div className="TreatmentImgRead_1_1">
                  <div>검사명 : {inspectionlistName} </div>
                  <div>진단 검사명 : {inspectionlistCategory} </div>
                  <div>진료 번호 : {inspectionTreatmentId}</div>
                  <div>검사 날짜 : {inspectionDate}</div>
                </div>
                {/* <div className="TreatmentImgRead_1_1_2">
                            <div > X-Ray 흉부</div>
                            <div >영상촬영 </div>
                            <div> aed1586</div>
                            <div> 2021-06-01</div>
                        </div> */}
                {/* 
                          <div>검사명 : X-Ray 흉부</div>
                          <div>진단 검사명 : 영상촬영</div>
                          <div>진료 번호 : aed1586</div>
                          <div>검사 날짜 : 2021-06-01</div> */}
                {/* </div> */}

                <div className="TreatmentImgRead_1_2">
                  <img src={`/resources/img/${inspectionImg}`} width="100%" height="100%" alt=""></img>
                </div>
              </div>
              <div className="TreatmentImgRead_2">
                <button className="button_team2_fill" onClick={close}>
                  확인
                </button>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};
