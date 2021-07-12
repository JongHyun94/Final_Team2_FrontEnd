import "./Inspection.css";
import InspectionPatientList from "./InspectionPatientList";
import InspectionList from "./InspectionList";
import { useEffect, useRef, useState } from "react";
import Paho from "paho-mqtt";
import { sendMqttMessage } from "apis/mqtt";

function Inspection(props) {
  //-------------------------------------------------------------  
  //상태 선언
  //-------------------------------------------------------------
  const [subTopic, setSubTopic] = useState("/138010/nurse/doctor/inspector");  // 병원코드/검사자
  const [pubMessage, setPubMessage] = useState({
    topic: "/138010/nurse/doctor/inspector",
    content: "updateInspects",  //검사 업데이트
  });
  const [message, setMessage] = useState("");
  //-------------------------------------------------------------
  //버튼 이벤트 처리
  //-------------------------------------------------------------
  let client = useRef(null);
  const connectMqttBroker = () => {
    // Paho.Mqtt.Client x
    client.current = new Paho.Client("localhost", 61614, "client-" + new Date().getTime());

    client.current.onConnectionLost = () => {
      console.log("Mqtt 접속 끊김");
    };

    client.current.onMessageArrived = (msg) => {
      console.log("메시지 수신");
      var Jmessage = JSON.parse(msg.payloadString);
      setMessage(() => {
        return Jmessage;
      });
    };

    client.current.connect({
      onSuccess: () => {
        client.current.subscribe(subTopic);
        console.log("Mqtt 접속 성공");
      }
    });
  };

  const disconnectMqttBroker = () => {
    client.current.disconnect(); // onConnectionLost 실행됨
  };

  const publishTopic = async () => {
    await sendMqttMessage(pubMessage);
  };

  useEffect(() => {
    connectMqttBroker();
  }, []);


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

  //진료번호 상태
  const [treatmentId, setTreatmentId] = useState("");

  //총검사상태: 대기~>검사 를 위한 state
  const [iState, setIState] = useState(false);
  //총검사상태: 검사~>완료 를 위한 state
  const [iStateFinish, setIStateFinish] = useState(false);

  const checkedtId = (id) => {
    setTreatmentId(id);
  };

  //바코드모달 확인 시, 총검사상태: 대기~>검사
  const handleBarcodeCheck = () => {
    setIState(true);
  };

  //총검사상태: 대기~>검사 바꾼 후 state 원래대로
  const handleBarcodeBack = () => {
    setIState(false);
  };

  //모든 검사상태가 완료 시, 총검사상태: 검사~>완료
  const handleFinish = () => {
    setIStateFinish(true);
  };

  //총검사상태: 검사~>완료 바꾼 후 state 원래대로
  const handleFinishBack = () => {
    setIStateFinish(false);
  };

  return (
      <div className="Inspection">
        <div className="Inspection_1">
          {/* 검사대기환자 */}
          <InspectionPatientList treatmentId={treatmentId} checkedtId={(id) => checkedtId(id)}
                                  iState={iState} handleBarcodeBack={handleBarcodeBack} 
                                  iStateFinish={iStateFinish} handleFinishBack={handleFinishBack}
                                  publishTopic={publishTopic} message={message}/>
        </div>
        <div className="Inspection_2">
          {/* 검사상세내역 */}
          <InspectionList treatmentId={treatmentId}
                          handleBarcodeCheck={handleBarcodeCheck}
                          handleFinish={handleFinish} handleFinishBack={handleFinishBack}
                          publishTopic={publishTopic} message={message}/>
        </div>
      </div>
  );
}

export default Inspection;