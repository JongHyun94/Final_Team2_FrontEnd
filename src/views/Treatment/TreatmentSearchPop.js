import React, { useState } from "react";
import "./TreatmentDrugModal.css";

function getDrugList() {
    const druglists = [
        {drug_injection_id:"NIZA15", drug_injection_name:"AXID Cap 150mg",drug_injection_state:"약품"},
        {drug_injection_id:"IRES", drug_injection_name:"IRESSA Tab 250mg",drug_injection_state:"약품"},
        {drug_injection_id:"ROPIN1", drug_injection_name:"ONIROL Tab 1mg",drug_injection_state:"약품"},
        {drug_injection_id:"ROXN", drug_injection_name:"ROXAN Cap 75mg",drug_injection_state:"주사"},
        {drug_injection_id:"NIZA15", drug_injection_name:"AXID Cap 150mg",drug_injection_state:"약품"},
        {drug_injection_id:"NIZA15", drug_injection_name:"AXID Cap 150mg",drug_injection_state:"약품"},
    ];
    return druglists;
  }


export const TreatmentSearchPop = (props) => {
  const {open, close} = props;
  const [druglists, setDrugLists] = useState(getDrugList);
  return(
      <div className="TreatmentDrugmodal">
    <div className={open ? 'openModal modal':'modal'}>
      {open? (
        <section>
          <main>
              <div>
                <div>
                    <input type="text"  />
                    <button className="button_team2_fill">검색</button>
                </div>
                <div>
                <div className="TreatmentPatientList_Totaltable">
                    <table className="table table-bordered TreatmentPatientList_table" >
                        <thead className="TreatmentPatientList_table_thead">
                            <tr>
                            <th></th>
                            <th>약품/주사코드</th>
                            <th>약품/주사명</th>
                            <th>구분</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {boards.map(board=>{
                                        return(
                                    <tr key={board.b1}>   
                                        <td><input type="checkbox"/></td>
                                        <th>{board.b1}</th>
                                        <th>{board.b2}</th>
                                        <th>{board.b3}</th>
                                        <th>{board.b4}</th>
                                        <th>{board.b5}</th>
                                        <th>{board.b6}</th>
                                    </tr>
                                    );
                                })} */}

                                {druglists.map(druglist=>{
                                    return(
                                    <tr key={druglist.drug_injection_id}>   
                                        <td><input type="checkbox"/></td>
                                        <th>{druglist.drug_injection_id}</th>
                                        <th>{druglist.drug_injection_name}</th>
                                        <th>{druglist.drug_injection_state}</th>
                                    </tr>
                                    );
                                    
                                })}
                                   
                                    {/* <tr>   
                                        <td><input type="checkbox"/></td>
                                        <th>NIZA15</th>
                                        <th>AXID Cap 150mg</th>
                                        <th>약품</th>
                                    </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
                <div>
                    <button className="close" onClick={close}>close</button>
                </div>

              </div>
          </main>
        </section>
      ):null}
    </div>
    </div>
  )
}
