import { useEffect, useRef, useState } from "react";
import "./Treatment.css";
import TreatmentCreateForm from "./TreatmentCreateForm";
import TreatmentHistoryList from "./TreatmentHistoryList";
import TreatmentPatientList from "./TreatmentPatientList";
import Paho from "paho-mqtt";
import { sendMqttMessage } from "apis/mqtt";

function Treatment(props) {

  ///////////////////////////////////////////////////////////////
  // MQTT 설정 
  ///////////////////////////////////////////////////////////////

  //-------------------------------------------------------------  
  //상태 선언
  //-------------------------------------------------------------

  const [subTopic, setSubTopic] = useState("/138010/doctor");  // 병원코드/간호사
  const [prevSubTopic, setPrevSubTopic] = useState("/138010/nurse"); // 병원코드/간호사
  const [pubMessage, setPubMessage] = useState({
    topic: "/138010/inspector",
    content: "addInspects",  //검사추가
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
    console.log("MESSAGE",message);
  });

  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////



  
  // 위에 생성한 환자 리스트
  // const [patientlists, setPatientlists] = useState([]);

 
  
  //진료 대기리스트에서 체크된 환자 정보
  const [checkedpatient, setCheckedpatient] = useState("");

  return (
    <div className="Treatment">
      <div className="TreatmentLeft">
        {/* 진료 대기 환자 */}
        <div className="TreatmentPatientList">
          <TreatmentPatientList setCheckedpatient={setCheckedpatient} message={message}/>
        </div>
        {/* 진료 기록 */}
        <div className="TreatmentHistoryList">
          <TreatmentHistoryList checkedpatient={checkedpatient}/>
        </div>
      </div>
      <div className="TreatmentRight">
        {/* 진료 등록*/}
        <div className="TreatmentCreateForm">
          <TreatmentCreateForm checkedpatient={checkedpatient}/>
        </div>
      </div>
    </div>
  );
}
export default Treatment;
