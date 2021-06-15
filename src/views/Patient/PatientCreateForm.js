import style from "./style.module.css";

function PatientCreateForm(props) {
  return (
    <div className="mt-4">
      <div className={`${style.title}`}>환자 등록</div>
      <div className="border p-3">
        <form>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">환자명: </label>
            <div className="col-sm">
              <input type="text" className="form-control" name=""></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">주민등록번호: </label>
            <div className="col-sm">
              <input type="text" className="form-control" name=""></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">성별: </label>
            <div className="col-sm">
              <input type="radio" name="patient_sex" value="M"></input>
              <label className="ml-3">남</label>
            </div>
            <div className="col-sm">
              <input type="radio" name="patient_sex" value="F"></input>
              <label className="ml-3">여</label>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">전화번호: </label>
            <div className="col-sm">
              <input type="text" className="form-control" name=""></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">주소: </label>
            <div className="col-sm">
              <input type="text" className="form-control" name=""></input>
              {/* <button>검색</button> */}
            </div>
          </div>
          <div className="d-flex justify-content-end"><button className="btn btn-sm btn-info button1">등록</button></div>
        </form>
      </div>
    </div>
  );
}

export default PatientCreateForm;