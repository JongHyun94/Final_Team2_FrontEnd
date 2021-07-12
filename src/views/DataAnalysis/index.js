import { useEffect, useState } from "react";
import Data1 from "./Data1";
import Data2 from "./Data2";
import Data3 from "./Data3";
import Data4 from "./Data4";
import style from "./DataAnalysis.module.css";

function DataAnalysis(props) {

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  useEffect(() => {

  },[]);

  return (
    <div className={style.DataAnalysis}>
      <div className={style.DataAnalysis_row1}>
        <div className={style.DataAnalysis_col}>
          <Data1 data1={data1}/>
          </div>
        <div className={style.DataAnalysis_col}>
          <Data2 data2={data2}/>
          </div>
      </div>
      <div className={style.DataAnalysis_row2}>
        <div className={style.DataAnalysis_col}>
          <Data3 data3={data3}/>
        </div>
        <div className={style.DataAnalysis_col}>
          <Data4 data4={data4}/>
        </div>
      </div>
    </div>
  );
}
export default DataAnalysis;
