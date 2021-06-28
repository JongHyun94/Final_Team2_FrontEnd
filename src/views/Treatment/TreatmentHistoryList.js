import React, { useState } from "react";
import TreatmentHistoryRead from "./TreatmentHistoryRead";

// function getTreatmentHistory() {
//     const treatmentHistoryList = [];
//     for(var i = 10; i >=1; i--){
//         treatmentHistoryList.push({patientId: 1, treatmentId:i,treatmentDate:"2021-06-01", treatmentDname:"나의사"+i, treatmentMemo:"메모"+i});
//     }
//     for(var i = 10; i >=1; i--){
//         treatmentHistoryList.push({patientId: 2, treatmentId:i,treatmentDate:"2021-06-01", treatmentDname:"나의사"+i, treatmentMemo:"메모"+i});
//     }
//     for(var i = 10; i >=1; i--){
//         treatmentHistoryList.push({patientId: 3, treatmentId:i,treatmentDate:"2021-06-01", treatmentDname:"나의사"+i, treatmentMemo:"메모"+i});
//     }
//     return treatmentHistoryList;
// }


// function getTreatment(treatmentHistoryList ) {
//     const treatmentHList = [];
    
//     if(patientlist.patientId == treatmentHistoryList.patientId){

//         treatmentHList = treatmentHistoryList;
//     }

//     return treatmentHList;

// }


function TreatmentHistoryList(props) {
    // const [treatmentHistoryList, setTreatmentHistoryList] = useState();

    // const [treatmentHList, setTreatmentHList] = useState(getTreatment);

    const {historyList} = props;
    console.log("####00");
    console.log(historyList);
    // 모달 상태(open일 떄 true로 바뀌어 열림)
    const [modalOpen, setModalOpen] = useState(false);
    // const { registerPatientName } = props;
    var sPatientlist = { 
         registerId: "" ,
        patientId: "" , 
        registerPatientName: "aa" , 
        patientSsn: "", 
        patientSex: "", 
        registerMemo: "", 
        registerState: "" 
    };
    var selectedPatient;
    if(props.patientlist){
        selectedPatient = props.patientlist;
    } else {
        selectedPatient = sPatientlist;
    }

    // var sHistoryList = {
    //     patientId: "" ,
    //     treatmentId: "" , 
    //     treatmentDate: "" , 
    //     treatmentDname: "", 
    //     treatmentMemo: ""
    // };

    // var treatmentHistoryList;

    // if(props.historyList){
    //     treatmentHistoryList = props.historyList;
    // }else {
    //     treatmentHistoryList = sHistoryList;
    // }
 
   
    const [patient , setPatient] = useState();
    const [selectedPatientId , setSelectedPatientId] = useState("");
    const openModal = () => {
    setModalOpen(true);
    };
    const closeModal = () => {
    setModalOpen(false);
    }

    const checkedtreatment = (treatmentId) => {
        console.log(treatmentId);
    
        setSelectedPatientId(treatmentId);
      
      }
    return(
       <div>
           <div className="TreatmentHistoryList_title">
              {selectedPatient.registerPatientName} 님의 진료기록 
                <React.Fragment>
                    {/* <button type="submit" className="button_team2_fill" onClick={openModal}>상세기록</button> */}
                <TreatmentHistoryRead open={modalOpen} close={closeModal}></TreatmentHistoryRead>
                </React.Fragment>
           </div>
           <div className="TreatmentHistoryList_border border">
                <div className="TreatmentHistoryList_Totaltable">
                    <table className="table TreatmentHistoryList_table">
                        <thead className="TreatmentHistoryList_table_thead">
                            <tr>
                                <th></th>
                                <th>진료 번호</th>
                                <th>진료 날짜</th>
                                <th>담당의</th>
                                <th>의사소통 메모</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {historyList.map(treatmentHistory=>{
                                return( */}
                                    <tr className="TreatmentHistoryList_table_tr"onClick={(event) =>  checkedtreatment(historyList.treatmentId) , openModal}>   
                                        <td> <React.Fragment>
                                            <input type="checkbox"  checked={selectedPatientId === historyList.treatmentId ? true : false} readOnly />
                                            {/* <TreatmentHistoryRead open={modalOpen} close={closeModal}></TreatmentHistoryRead> */}
                                            </React.Fragment>
                                        </td>
                                        {/* <th>{treatmentHistory.patientId}</th> */}
                                        <th>{historyList.treatmentId}</th>
                                        <th>{historyList.treatmentDate}</th>
                                        <th>{historyList.treatmentDname}</th>
                                        <th>{historyList.treatmentMemo}</th>
                                    </tr>
                                {/* );
                            })}        */}
                        </tbody>
                    </table>
                </div>
        </div>
        </div> 
    );
}
export default TreatmentHistoryList;
