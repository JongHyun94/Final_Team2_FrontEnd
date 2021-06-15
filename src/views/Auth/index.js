import style from "./style.module.css"

function Auth(props) {
  return (
    <div className={`${style.Auth} border d-flex justify-content-center`}>
      <form>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">회원 코드: </label>
          <div className="col-sm d-flex align-items-center">D13801001001</div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">회원 이름: </label>
          <div className="col-sm d-flex align-items-center">김더존</div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">기존 비밀번호: </label>
          <div className="col-sm">
            <input type="text" className="form-control" name="" value=""></input>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">새로운 비밀번호: </label>
          <div className="col-sm">
            <input type="text" className="form-control" name="" value=""></input>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">비밀번호 재입력: </label>
          <div className="col-sm">
            <input type="text" className="form-control" name="" value=""></input>
          </div>
        </div>
        <div className="d-flex justify-content-center"><button className={`btn btn-sm btn-info`}>수정</button></div>
      </form>
    </div>
  );
}

export default Auth;