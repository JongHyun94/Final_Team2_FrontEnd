import { getDatas } from "apis/data";
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


  const getData = async () => {
    try {
      var response = await getDatas();
      console.log(response.data.data1);
      calcData1(response.data.data1);
    } catch (e) {
      console.log(e);
    }
  };
  const calcData1 = (datalist) => {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    for (var data of datalist) {
      if (new Date(data.register_starttime).getMonth() === new Date().getMonth()) {
        count1++;
      } else if (new Date(data.register_starttime).getMonth() === new Date().getMonth() - 1) {
        count2++;
      } else if (new Date(data.register_starttime).getMonth() === new Date().getMonth() - 2) {
        count3++
      }
    }
    const newDataList = [
      {
        "month": "전전달",
        "treatments": count3
      },
      {
        "month": "전달",
        "treatments": count2
      },
      {
        "month": "이번달",
        "treatments": count1
      }
    ]
    setData1(newDataList);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.DataAnalysis}>
      <div className={style.DataAnalysis_row1}>
        <div className={style.DataAnalysis_col}>
          <Data1 data1={data1} />
        </div>
        <div className={style.DataAnalysis_col}>
          <Data2 data2={data2} />
        </div>
      </div>
      <div className={style.DataAnalysis_row2}>
        <div className={style.DataAnalysis_col}>
          <Data3 data3={data3} />
        </div>
        <div className={style.DataAnalysis_col}>
          <Data4 data4={data4} />
        </div>
      </div>
    </div>
  );
}
export default DataAnalysis;
