import style from "./style.module.css";

function Help(props) {
  return (
    <div className={`${style.Help} row d-flex justify-content-between`}>
      <div className={`${style.user_guide}`}>
        <div>사용자 가이드</div>
        <div className={`${style.icon}`}><i className="bi bi-question-circle"></i></div>        
      </div>
      <a href="https://help.douzone.com/support/voice.jsp" className={`${style.online_center}`}><div>
        <div>온라인 고객센터</div>
        <div className={`${style.icon}`}><i className="bi bi-globe"></i></div>
      </div></a>
      <div className={`${style.as}`}>
        <div>원격 A/S</div>
        <div className={`${style.icon}`}><i className="bi bi-laptop"></i></div>
        <div className="text-center">1688-6000</div>
      </div>
    </div>
  );
}

export default Help;