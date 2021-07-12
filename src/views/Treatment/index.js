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
  //메시지 종류
  //-------------------------------------------------------------

  // 1. 리스트 호출 - nurse -> docter
  // { topic: "/138010/docter", content: "refreshTreatments"}
  // 2. 검사 추가   - doctor -> inspector
  // { topic: "/138010/inspector", content: "addInspections"}
  // 3.  추가
  // { topic: "/138010/doctor", content: "refreshToDoList"}
  
  //-------------------------------------------------------------  
  //상태 선언
  //-------------------------------------------------------------

  // const [subTopic, setSubTopic] = useState("/138010/doctor");  // 병원코드/간호사
  // const [prevSubTopic, setPrevSubTopic] = useState("/138010/nurse"); // 병원코드/간호사
  // const [pubMessage, setPubMessage] = useState({
  //   topic: "/138010/inspector",
  //   content: "addInspects",  //검사추가
  // });
  const [subTopic, setSubTopic] = useState(["/138010/doctor","/138010/inspector"]);  // 병원코드/간호사
  const [prevSubTopic, setPrevSubTopic] = useState("/138010/nurse"); // 병원코드/간호사
  const [pubMessage, setPubMessage] = useState([
    {
      topic: "/138010/doctor",
      content: "refreshTreatments" 
    },
    {
      topic: "/138010/inspector",
      content: "addInspections"
    }
  ]
  );
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
      console.log(Jmessage);
      setMessage(() => {
        return Jmessage;
      });
    };

    client.current.connect({
      onSuccess: () => {
        client.current.subscribe(subTopic[0]);
        console.log("Mqtt 접속 성공");
      }
    });
  };

  const disconnectMqttBroker = () => {
    client.current.disconnect(); // onConnectionLost 실행됨
  };

  const sendSubTopic = () => {
    client.current.unsubscribe(prevSubTopic);
    client.current.subscribe(subTopic[0]);
    setPrevSubTopic(subTopic[0]);
  };

  const publishTopic = async (num) => {
    await sendMqttMessage(pubMessage[num]);
  };


  // const publishTopic = async () => {
  //   await sendMqttMessage(pubMessage);
  // };

  useEffect(() => {
    connectMqttBroker();
    console.log("MESSAGE",message);
  });

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
          <TreatmentPatientList setCheckedpatient={setCheckedpatient} 
          message={message} publishTopic={publishTopic}/>
        </div>
        {/* 진료 기록 */}
        <div className="TreatmentHistoryList">
          <TreatmentHistoryList checkedpatient={checkedpatient}/>
        </div>
      </div>
      <div className="TreatmentRight">
        {/* 진료 등록*/}
        <div className="TreatmentCreateForm">
          <TreatmentCreateForm checkedpatient={checkedpatient} publishTopic={publishTopic}/>
        </div>
      </div>
    </div>
  );
}
export default Treatment;
