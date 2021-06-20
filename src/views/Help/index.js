import "./Help.css";

function Help(props) {
  return (
    <div className={`Help row d-flex justify-content-between no-gutters`}>
      <div className={`user_guide`}>
        <div>사용자 가이드</div>
        <div className={`icon`}><i className="bi bi-question-circle"></i></div>        
      </div>
      <div className={`online_center`}>        
        <div>온라인 고객센터</div>
          <a href="https://help.douzone.com/support/voice.jsp">
            <div className={`icon icon1`}><i className="bi bi-globe"></i></div>
          </a>
      </div>
      <div className={`as`}>
        <div>원격 A/S</div>
        <div className={`icon`}><i className="bi bi-laptop"></i></div>
        <div></div>
        <div className="text-center"><i className="bi bi-telephone mr-1" style={{"fontSize":"1.6rem"}}></i>1688-6000</div>
      </div>
    </div>
  );
}

export default Help;