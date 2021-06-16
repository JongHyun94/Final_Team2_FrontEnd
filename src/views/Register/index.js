import Switch from "react-router-dom";
import RegisterCreateForm from "./RegisterCreateForm";
import RegisterList from "./RegisterList";
import RegisterPatientList from "./RegisterPatientList";
import RegisterRead from "./RegisterRead";
import RegisterTimeTable from "./RegisterTimeTable";
import RegisterUpdateForm from "./RegisterUpdateForm";

function Register(props) {
  return (
    <div className="Register">
    {/* 상단 */}
      <div className="Register_1">
        {/* 접수 내역 */}
        <div className="RegisterList">
          <RegisterList/>
        </div>
        {/* 접수 상세 내역 or  접수 수정*/}
        <div className="RegisterRead">
          <RegisterRead/>
          {/* <RegisterUpdateForm/> */}
          {/* <Switch>
            <Route path="" exact component={}/>
          </Switch> */}
        </div>
      </div>
      {/* 하단 */}
      <div className="Register_2">
        {/* 환자 검색 */}
        <div className="RegisterPatientList">
          <RegisterPatientList/>
        </div>
        {/* 접수 등록 */}
        <div className="RegisterCreateForm">
          <RegisterCreateForm/>
        </div>
        {/* 접수 타임테이블 */}
        <div className="RegisterTimeTable">
          <RegisterTimeTable/>
        </div>
      </div>
    </div>
  );
}
export default Register;