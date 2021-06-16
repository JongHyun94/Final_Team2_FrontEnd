import style from "./style.module.css";

function PatientUpdateForm(props) {
  return (
    <div>
      <div className={`${style.title}`}>환자 정보 수정</div>
      <div className="border p-3">
        <form>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label pl-3 p-0">환자 코드: </label>
            <div className="col-sm d-flex align-items-center">321654</div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label pl-3 p-0">환자명: </label>
            <div className="col-sm d-flex align-items-center">홍길동</div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label pl-3 p-0">생년 월일: </label>
            <div className="col-sm d-flex align-items-center">910625</div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label pl-3 p-0">성별: </label>
            <div className="col-sm d-flex align-items-center">M</div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">전화 번호: </label>
            <div className="col-sm">
              <input type="text" className="form-control" name="" value=""></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">주소: </label>
            <div className="col-sm">
              <input type="text" className="form-control" name="" value=""></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label pl-3 p-0">등록 날짜: </label>
            <div className="col-sm d-flex align-items-center">2021-06-01</div>
          </div>
          <div className="d-flex justify-content-end"><button className="button_team2_fill">수정</button></div>
        </form>
      </div>
    </div>
  );
}

export default PatientUpdateForm;