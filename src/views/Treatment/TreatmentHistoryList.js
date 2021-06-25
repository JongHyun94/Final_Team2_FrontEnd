import React, { useState } from "react";
import TreatmentHistoryRead from "./TreatmentHistoryRead";

function getTreatmentHistory() {
    const treatmentHistoryList = [];
    for(var i = 10; i >=1; i--){
        treatmentHistoryList.push({index: i, treatmentId:"aed158"+i,treatmentDate:"2021-06-01", treatmentDname:"나의사"+i, treatmentMemo:"메모"+i});
    }
    return treatmentHistoryList;
}

function TreatmentHistoryList(props) {
    const [treatmentHistoryList, setTreatmentHistoryList] = useState(getTreatmentHistory);
    // 모달 상태(open일 떄 true로 바뀌어 열림)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
    setModalOpen(true);
    };
    const closeModal = () => {
    setModalOpen(false);
    }
    return(
       <div>
           <div className="TreatmentHistoryList_title">
                진료기록 
                <React.Fragment><button type="submit" className="button_team2_fill" onClick={openModal}>상세기록</button>
                <TreatmentHistoryRead open={modalOpen} close={closeModal}></TreatmentHistoryRead>
                </React.Fragment>
           </div>
           <div className="TreatmentHistoryList_border border">
                <div className="TreatmentHistoryList_Totaltable">
                    <table className="table table-bordered TreatmentHistoryList_table">
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
                            {treatmentHistoryList.map(treatmentHistory=>{
                                return(
                                    <tr key={treatmentHistory.index}>   
                                        <td><input type="checkbox"/></td>
                                        <th>{treatmentHistory.treatmentId}</th>
                                        <th>{treatmentHistory.treatmentDate}</th>
                                        <th>{treatmentHistory.treatmentDname}</th>
                                        <th>{treatmentHistory.treatmentMemo}</th>
                                    </tr>
                                );
                            })}       
                        </tbody>
                    </table>
                </div>
        </div>
        </div> 
    );
}
export default TreatmentHistoryList;
