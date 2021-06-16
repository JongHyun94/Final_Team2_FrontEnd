import style from "./style.module.css";

function PatientCreateForm(props) {
  return (
    <div className="mt-4">
      <div className={`${style.title}`}>환자 등록</div>
      <div className={`border p-3 ${style.PatientCreateForm}`}>
        <form>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 m-0">환자명: </label>
            <div className="col-sm">
              <input type="text" name="" placeholder="환자명"></input>
            </div>
          </div>
          <div className="row  align-items-center mb-2">
            <label className="col-sm-3 m-0">주민등록번호: </label>
            <div className="row ml-3">
              <input type="text" className="col-sm" name=""></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm" name=""></input>
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 m-0">성별: </label>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="patient_sex" value="M"></input>
              <label className="ml-3 mb-0">남</label>
            </div>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="patient_sex" value="F"></input>
              <label className="ml-3 mb-0">여</label>
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 m-0">전화 번호: </label>
            <div className="row col-sm">
              <select className="col-sm-2 ml-3">
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>02</option>
                <option>031</option>
                <option>032</option>
                <option>033</option>
                <option>041</option>
                <option>042</option>
                <option>043</option>
                <option>044</option>
                <option>051</option>
                <option>052</option>
                <option>053</option>
                <option>054</option>
                <option>055</option>
                <option>061</option>
                <option>062</option>
                <option>063</option>
                <option>064</option>
              </select>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm-2" name="" value=""></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm-2" name="" value=""></input>
            </div>
          </div>
          <div className="row">
            <label className="col-sm-3 m-0">주소: </label>
            <div className="col-sm">
              <div className="row mb-2"> 
                <input type="text" className="col-sm-2 ml-3" name="" placeholder="우편번호"></input>
                <button className="button_team2_empty">우편번호 찾기</button>
              </div>
              <input type="text" className=" mb-2" name="" placeholder="주소"></input>
              <div className="row no-gutters mb-2">
                <input type="text" className="col-sm mr-2" name="" placeholder="상세주소"></input>
                <input type="text" className="col-sm" name="" placeholder="참고항목"></input>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end"><button className="button_team2_fill">등록</button></div>
        </form>
      </div>
    </div>
  );
}

export default PatientCreateForm;