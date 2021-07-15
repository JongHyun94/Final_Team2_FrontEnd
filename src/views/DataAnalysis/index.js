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
      console.log(response.data.data3);
      console.log(response.data.data4);
      calcData1(response.data.data1);
      calcData3(response.data.data3);
      calcData4(response.data.data4);
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
  const calcData3 = (datalist) => {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let count7 = 0;
    let count8 = 0;
    let count9 = 0;
    let pAge = 0;
    let yearToday = new Date().getFullYear();
    yearToday *= 1;
    console.log("year:",yearToday);
    for (var data of datalist) {
      // 월요일
      if(new Date(data.register_starttime).getDay() === 1){
        if((data.patient_ssn.slice(7,8) === "3")||(data.patient_ssn.slice(7,8) === "4")){
          var newAge = "20" + (data.patient_ssn.slice(0,2));
          newAge *= 1;
          console.log(yearToday - newAge);
          pAge = yearToday - newAge;
        } else {
          var newAge2 = "19" + (data.patient_ssn.slice(0,2));
          newAge2 *= 1;
          console.log(yearToday - newAge2);
          pAge = yearToday - newAge2;
        }
      }
      // 화요일
      else if(new Date(data.register_starttime).getDay() === 2){
      
      }
      // 수요일
      else if(new Date(data.register_starttime).getDay() === 3){
      
      }
      // 목요일
      else if(new Date(data.register_starttime).getDay() === 4){
      
      }
      // 금요일
      else if(new Date(data.register_starttime).getDay() === 5){
      
      }
      // // 2000년생 3 , 4
      // if((data.patient_ssn.slice(7,8) === "3")||(data.patient_ssn.slice(7,8) === "4")){
      //   // 월요일
      //   if(new Date(data.register_starttime).getDay() === 1){
      //     var newAge = "20" + (data.patient_ssn.slice(0,2));
      //     newAge *= 1;
      //     console.log(yearToday - newAge);
      //   }
      // }
      // // 1900년생 1, 2 
      // else {

      // }
    }
  }
  const calcData4 = (datalist) => {
    let countQ1 = 0;
    let countQ2 = 0;
    let countQ3 = 0;
    let countQ4 = 0;
    for (var data of datalist) {
      if (new Date(data.register_starttime).getMonth() >= 0 && new Date(data.register_starttime).getMonth() < 3) {
        countQ1++;
      } else if (new Date(data.register_starttime).getMonth() >= 3 && new Date(data.register_starttime).getMonth() < 6) {
        countQ2++;
      } else if (new Date(data.register_starttime).getMonth() >= 6 && new Date(data.register_starttime).getMonth() < 9) {
        countQ3++
      } else if (new Date(data.register_starttime).getMonth() >= 9 && new Date(data.register_starttime).getMonth() < 12) {
        countQ4++
      }
    }
    const newDataList = [
      {
        "id": "1분기",
        "label": "1분기",
        "value": countQ1,
      },
      {
        "id": "2분기",
        "label": "2분기",
        "value": countQ2,
      },
      {
        "id": "3분기",
        "label": "3분기",
        "value": countQ3,
      },
      {
        "id": "4분기",
        "label": "4분기",
        "value": countQ4,
      }
    ]
    setData4(newDataList);
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
