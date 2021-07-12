import "./Help.css";
import { RiCustomerServiceLine } from "react-icons/ri";

function Help(props) {
  return (
    <div className={`Help`}>
      <div className={`user_guide`}>
        <a href="/resources/pdf/더존ICT그룹_프로젝트과제_H_ERP_0527.pdf" download>
        <div>사용자 가이드</div>
        <div className={`icon mt-2`}><i className="bi bi-question-circle"></i></div> 
        </a>       
      </div>
      <div className={`online_center`}>        
        <div>온라인 고객센터</div>
          <a href="https://help.douzone.com/support/voice.jsp">
            <div className={`icon icon1 mt-2`}><i className="bi bi-globe"></i></div>
          </a>
      </div>
      <div className={`as`}>
        <div>원격 A/S</div>
        {/* <div className={`icon`}><i className="bi bi-laptop"></i></div> */}
        <div className="icon"><RiCustomerServiceLine/></div>
        <div></div>
        <div className="text-center"><i className="bi bi-telephone mr-1" style={{"fontSize":"1.6rem"}}></i>1688-6000</div>
      </div>
    </div>
  );
}

export default Help;