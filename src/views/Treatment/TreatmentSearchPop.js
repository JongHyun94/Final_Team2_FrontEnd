import React, { useState } from "react";
import "./TreatmentDrugModal.css";

function getDrugList() {
  const druglists = [
    { drugInjectionId: "NIZA15", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionId: "IRES", drugInjectionName: "IRESSA Tab 250mg", drugInjectionState: "약품" },
    { drugInjectionId: "ROPIN1", drugInjectionName: "ONIROL Tab 1mg", drugInjectionState: "약품" },
    { drugInjectionId: "ROXN", drugInjectionName: "ROXAN Cap 75mg", drugInjectionState: "주사" },
    { drugInjectionId: "NIZA16", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionId: "NIZA17", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
  ];
  return druglists;
}

export const TreatmentSearchPop = (props) => {
  const { open, close } = props;
  const [druglists, setDrugLists] = useState(getDrugList);
  return (
    <div className="TreatmentDrugmodal">
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <div className="TreatmentSearchPop">
              <div className="TreatmentSearchPop_1">
                <input type="text" />
                <button className="button_team2_fill">검색</button>
              </div>

              <table className="table table-bordered TreatmentPatientList_table">
                <thead className="TreatmentPatientList_table_thead">
                  <tr>
                    <th></th>
                    <th>약품/주사코드</th>
                    <th>약품/주사명</th>
                    <th>구분</th>
                  </tr>
                </thead>
                <tbody>
                  {druglists.map((druglist) => {
                    return (
                      <tr key={druglist.drugInjectionId}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <th>{druglist.drugInjectionId}</th>
                        <th>{druglist.drugInjectionName}</th>
                        <th>{druglist.drugInjectionState}</th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="TreatmentSearchPop_3">
                <button className="button_team2_fill" onClick={close}>
                  확인
                </button>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};
