import React, { useState } from "react";
import "./TreatmentImgModal.css";


export const TreatmentImgRead = (props) => {
  const {open, close, inspectionImg, inspection_list_name, inspection_list_category, inspection_treatment_id, inspection_date } = props;
  // const [imgSrc, setImgSrc] = useState("xray01.jpg");
  return(
    <div className="TreatmentImgmodal">
        <div className={open ? 'openModal modal':'modal'}>
          {open? (
            <section>
              <div className = "TreatmentImgRead">
                <div className="TreatmentImgRead_1">
                {/* <div className="TreatmentImgRead_1_1"> */}
                        <div className="TreatmentImgRead_1_1">
                            <div>검사명 : {inspection_list_name} </div>
                            <div>진단 검사명 : {inspection_list_category} </div>
                            <div>진료 번호 : {inspection_treatment_id}</div>
                            <div>검사 날짜 : {inspection_date}</div>
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
                      <button className="close" onClick={close}>close</button>
                  </div>
              </div>
          </section>
        ):null}
      </div>
    </div>
  )
}
