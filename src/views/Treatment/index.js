import './Treatment.css';
import TreatmentCreateForm from './TreatmentCreateForm';
import TreatmentHistoryList from './TreatmentHistoryList';
import TreatmentHistoryRead from './TreatmentHistoryRead';
import TreatmentPatientList from './TreatmentPatientList';


function Treatment(props) {
  return (
    <div className="Treatment">
      <div className="Treatmentup">
        {/* 접수 완료 환자 */}
        <div className="item">
           <TreatmentPatientList/>
        </div>

        {/* 진료 등록*/}
        <div className="item">
          <TreatmentCreateForm/>      
        </div>

    </div>
    <div className="Treatmentdown">
        {/* 진료 기록 */}
        <div className="item">
          <TreatmentHistoryList/>
        </div>

        {/* 진료기록 상세 */}
        <div className="item">
          <TreatmentHistoryRead/>
        </div>
      </div>
      </div>  
  );
}
export default Treatment;