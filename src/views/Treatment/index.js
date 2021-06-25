import "./Treatment.css";
import TreatmentCreateForm from "./TreatmentCreateForm";
import TreatmentHistoryList from "./TreatmentHistoryList";
import TreatmentHistoryRead from "./TreatmentHistoryRead";
import TreatmentPatientList from "./TreatmentPatientList";

function Treatment(props) {
  return (
    <div className="Treatment">
        <div className="TreatmentLeft">
              {/* 접수 완료 환자 */}
              <div className="TreatmentPatientList">
                <TreatmentPatientList />
              </div>
              {/* 진료 기록 */}
              <div className="TreatmentHistoryList">
                <TreatmentHistoryList />
              </div>
        </div>
        <div className="TreatmentRight">
              {/* 진료 등록*/}
              <div className="TreatmentCreateForm">
                <TreatmentCreateForm />
              </div>
        </div>
    </div>
  );
}
export default Treatment;
