import "./style.css";
import InspectionPatientList from "./InspectionPatientList";
import InspectionList from "./InspectionList";
import InspectionImgForm from "./InspectionImgForm";
import InspectionImgCreateForm from "./InspectionImgCreateForm";

function Inspection(props) {
  return (
    <>
      <div className="row">
        <div className="col-4">
          {/* 환자검색 */}
          <InspectionPatientList/>
        </div>
        <div className="col-5">
          {/* 검사상세내역 */}
          <InspectionList/>
        </div>
        <div className="col-3">
          <div className="Inspection_1">
            {/* 검사결과등록 */}
            <InspectionImgCreateForm/>
          </div>
          <div className="Inspection_2">
            {/* 검사사진 */}
            <InspectionImgForm/>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Inspection;