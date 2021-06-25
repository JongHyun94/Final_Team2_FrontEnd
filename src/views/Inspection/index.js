import "./Inspection.css";
import InspectionPatientList from "./InspectionPatientList";
import InspectionList from "./InspectionList";
import InspectionCreateForm from "./InspectionCreateForm";
import { useState } from "react";

function Inspection(props) {
  //진료번호 상태
  const [treatmentId, setTreatmentId] = useState("");

  //총검사상태: 대기~>검사 를 위한 state
  const [iState, setIState] = useState(false);
  //총검사상태: 검사~>완료 를 위한 state
  const [iStateFinish, setIStateFinish] = useState(false);

  const checkedtId = (id) => {
    setTreatmentId(id);
  };

  //바코드모달 확인 시, 총검사상태: 대기~>검사
  const handleBarcodeChekck = () => {
    setIState(true);
  };

  //총검사상태: 대기~>검사 바꾼 후 state 원래대로
  const handleBarcodeBack = () => {
    setIState(false);
  };

  //모든 검사상태가 완료 시, 총검사상태: 검사~>완료
  const handleFinsish = () => {
    setIStateFinish(true);
  };

  //총검사상태: 검사~>완료 바꾼 후 state 원래대로
  const handleFinsishBack = () => {
    setIStateFinish(false);
  };

  return (
      <div className="Inspection">
        <div className="Inspection_1">
          {/* 환자검색 */}
          <InspectionPatientList treatmentId={treatmentId} checkedtId={(id) => checkedtId(id)}
                                  iState={iState} handleBarcodeBack={handleBarcodeBack} 
                                  iStateFinish={iStateFinish} handleFinsishBack={handleFinsishBack}/>
        </div>
        <div className="Inspection_2">
          {/* 검사상세내역 */}
          <InspectionList treatmentId={treatmentId}
                          handleBarcodeChekck={handleBarcodeChekck}
                          handleFinsish={handleFinsish} />
        </div>
        {/* <div className="Inspection_3">
          <div className="Inspection_3_1">
            {createForm === true ?
            <InspectionImgCreateForm/>
            :
            <InspectionCreateForm/>
            }
          </div>
          <div className="Inspection_3_2">
            <InspectionImgForm/>
          </div>
        </div> */}
      </div>
  );
}

export default Inspection;