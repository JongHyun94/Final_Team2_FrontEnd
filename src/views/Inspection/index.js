import "./style.css";
import InspectionPatientList from "./InspectionPatientList";
import InspectionList from "./InspectionList";
import InspectionImgForm from "./InspectionImgForm";
import InspectionImgCreateForm from "./InspectionImgCreateForm";

function Inspection(props) {
  return (
      <div className="Inspection">
        <div className="Inspection_1 ">
          {/* 환자검색 */}
          <InspectionPatientList/>
        </div>
        <div className="Inspection_2 ">
          {/* 검사상세내역 */}
          <InspectionList/>
        </div>
        <div className="Inspection_3">
          <div className="Inspection_3_1">
            {/* 검사결과등록 */}
            <InspectionImgCreateForm/>
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