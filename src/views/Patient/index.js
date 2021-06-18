import { PatientContextProvider } from "./PatientContext";
import PatientCreateForm from "./PatientCreateForm";
import PatientList from "./PatientList";
import PatientUpdateForm from "./PatientUpdateForm";
import "./Patient.css";

function Patient(props) {
  return (
    <div className={`row no-gutters Patient`}>
      <PatientContextProvider>
        {/* 좌측 */}
        <div className="left">
          {/* 환자 목록 */}
          <PatientList />
        </div>

        {/* 우측 */}
        <div className="right">
          <div className="right1">
            {/* 환자 정보 수정 */}
            <PatientUpdateForm />
          </div>
          <div className="right2">
            {/* 환자 등록 */}
            <PatientCreateForm />
          </div>
        </div>
      </PatientContextProvider>
    </div>
  );
}

export default Patient;