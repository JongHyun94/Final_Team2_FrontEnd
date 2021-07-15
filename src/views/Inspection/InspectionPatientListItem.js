import { useCallback, useEffect, useState } from "react";
import { updateIstateI, updateIstateC } from "apis/inspections";

function InspectionPatientListItem(props) {
  useEffect(() => {
    if(props.iState === true){
      iStateChange1();
    }
    if(props.iStateFinish === true){
      iStateFinishChange();
    }
  });

  // //총검사상태: 대기~>검사 변경
  const iStateChange1 = async () => {
    try {
      if(props.patient.treatment_id === props.id){
        if(props.patient.treatment_istate === "대기"){
          //props.patient.treatment_istate = "검사";
            await updateIstateI(props.id);
        }
      }
      props.handleBarcodeBack();
    } catch(error) {
      console.log(error);
    }
    
  };

  //총검사상태: 검사~>완료 변경
  const iStateFinishChange = async () => {
    try {
      if(props.patient.treatment_id === props.id){
        if(props.patient.treatment_istate === "검사"){
          //props.patient.treatment_istate = "완료";
            await updateIstateC(props.id);
            props.publishTopic(1);
        }
      }
      props.handleFinishBack();
    } catch(error) {
      console.log(error);
    }
    
  };

  return (
    <>
      <tr className="InspectionPatientListItem" key={props.patient.treatment_id} onClick={() => {props.handleChecked(props.patient.treatment_id)}}>
        <td>
          <input type="checkbox" name="treatmentCheck" checked={props.id === props.patient.treatment_id ? true : false} readOnly/>
        </td>
        <td>{props.patient.treatment_id}</td>
        <td>{props.patient.patient_name}</td>
        <td>{props.patient.patient_ssn.split("-")[0]}</td>
        <td>{props.patient.patient_sex}</td>
        {props.patient.treatment_istate === "대기" ?
          <td style={{color:"#009900"}}>{props.patient.treatment_istate}</td>
        :
          props.patient.treatment_istate === "검사" ?
            <td style={{color:"#ff6600"}}>{props.patient.treatment_istate}</td>
          :
            <td style={{color:"#00AAF0"}}>{props.patient.treatment_istate}</td>
        }
        
        <td>{props.patient.treatment_communication}</td>
      </tr>
    </>
  );
}

export default InspectionPatientListItem;
