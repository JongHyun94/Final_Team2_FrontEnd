import "./Inspection.css";
import InspectionPatientList from "./InspectionPatientList";
import InspectionList from "./InspectionList";
import InspectionImgForm from "./InspectionImgForm";
import InspectionImgCreateForm from "./InspectionImgCreateForm";
import InspectionCreateForm from "./InspectionCreateForm";
import { useState } from "react";

function Inspection(props) {
  //true이면 이미지 첨부파일 있는 검사결과등록
  const [createForm, setCreateForm] = useState(true);

  const changeCreateForm = () => {
    if(createForm === true){
      setCreateForm(false);
    } else {
      setCreateForm(true);
    }
  };

  return (
      <div className="Inspection">
        <div className="Inspection_1">
          {/* 환자검색 */}
          <InspectionPatientList/>
        </div>
        <div className="Inspection_2">
          {/* 검사상세내역 */}
          <InspectionList createForm={createForm} changeCreateForm={changeCreateForm}/>
        </div>
        <div className="Inspection_3">
          <div className="Inspection_3_1">
            {/* 검사결과등록 */}
            {createForm === true ?
            <InspectionImgCreateForm/>
            :
            <InspectionCreateForm/>
            }
          </div>
          <div className="Inspection_3_2">
            {/* 검사사진 */}
            <InspectionImgForm/>
          </div>
        </div>
      </div>
  );
}

export default Inspection;