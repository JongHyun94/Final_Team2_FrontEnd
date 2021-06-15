import PatientCreateForm from "./PatientCreateForm";
import PatientList from "./PatientList";
import PatientUpdateForm from "./PatientUpdateForm";
import style from "./style.module.css";

function Patient(props) {
  return (
    <div className="row">
      {/* 좌측 */}
      <div className={style.left}>
        {/* 환자 목록 */}
        <PatientList />
      </div>

      {/* 우측 */}
      <div className={style.right}>
        <div>
          {/* 환자 정보 수정 */}
          <PatientUpdateForm />
        </div>
        <div>
          {/* 환자 등록 */}
          <PatientCreateForm />
        </div>
      </div>
    </div>
  );
}

export default Patient;