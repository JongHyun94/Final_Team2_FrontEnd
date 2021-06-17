import { useState } from "react";

function TreatmentCreateForm(props) {

    //soap 입력폼
    const [content1, setContent1] = useState("");
    const [content2, setContent2] = useState("");
    const [content3, setContent3] = useState("");
    const [content4, setContent4] = useState("");

    //의사소통메모
    const [content5, setContent5] = useState("");

    //검사 checkbox
    const [inspectionlist, setInspectionlist] = useState({
        inspectioncategory:"",
        inspection:[]
      });



    const handleChange1 = (event) => {
        console.log("Subjective:",event.target.value);
        setContent1(event.target.value);
      }
      const handleChange2= (event) => {
        console.log("Objective:",event.target.value);
        setContent2(event.target.value);
      }
      const handleChange3 = (event) => {
        console.log("Assessment:",event.target.value);
        setContent3(event.target.value);
      }
      const handleChange4 = (event) => {
        console.log("Plan:",event.target.value);
        setContent4(event.target.value);
      }

      const handleChange5 = (event) => {
        console.log("Memo:",event.target.value);
        setContent5(event.target.value);
      }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("접수완료 : ",inspectionlist);
    };

    const handleChange = (event) => {
        console.log("name : ",event.target.name);
        console.log("value : ",event.target.value);
        console.log("target : ",event.target);
        
        if(event.target.name !== "inspection"){
            setInspectionlist({
                ...inspectionlist,
                [event.target.name] : event.target.value 
              });
        }else {
          if(event.target.checked){
  
            setInspectionlist(prevInspectionlist => {
                return {
                  ...prevInspectionlist,
                  inspection: prevInspectionlist.inspection.concat(event.target.value)
                };
              })
  
          }else {
            
            setInspectionlist(prevInspectionlist => {
              return {
                ...prevInspectionlist,
                inspection: prevInspectionlist.inspection.filter(item => item !== event.target.value)
              };
            })
  
          }
        }
  
      };

    return (

        <div>
            <form onSubmit={handleSubmit}>
            <div className="TreatmentCreateForm_title">
                진료 등록
            </div>
            <div className="TreatmentCreateForm_border border">
            <div className="TreatmentCreateForm_1">
            <div className="TreatmentCreateForm_1_border">
                        <div className="TreatmentCreateForm_1_1_title">
                        Subjective
                        </div>
                        <textarea className="TreatmentCreateForm_1_1_content border" rows="4" cols="40" onChange={handleChange1} value={content1}>
                            당일 검사 요청
                        </textarea>
                        <div className="TreatmentCreateForm_1_1_title">
                        Objective
                        </div>
                        <textarea className="TreatmentCreateForm_1_1_content border" rows="4" cols="40" onChange={handleChange2} value={content2}>
                            당일 검사 요청
                        </textarea>
                        <div className="TreatmentCreateForm_1_1_title">
                        Assessment
                        </div>
                        <textarea className="TreatmentCreateForm_1_1_content border" rows="4" cols="40" onChange={handleChange3} value={content3}>
                            당일 검사 요청
                        </textarea>
                        <div className="TreatmentCreateForm_1_1_title">
                        Plan
                        </div>
                        <textarea className="TreatmentCreateForm_1_1_content border" rows="4" cols="40" onChange={handleChange4} value={content4}>
                            당일 검사 요청
                        </textarea>
            </div>
        </div>
        <div className="TreatmentCreateForm_2">
            <div className="TreatmentCreateForm_2_border border">
                <div className="TreatmentCreateForm_2_title">
                    진단 검사 목록
                </div>
                <div className="TreatmentCreateForm_2_content">
                <div className="reatmentCreateForm_select">
                    {/* <select name="inspectioncategory">
                        <option value="진단검사선택" selected="selected">진단 검사 선택</option>
                        <option value="blood"  name="inspectioncategory" onChange={handleChange} checked={inspectionlist.inspectioncategory === "blood"}>혈액검사</option>
                        <option value="xray"  name="inspectioncategory" onChange={handleChange} checked={inspectionlist.inspectioncategory === "xray"}>영상검사</option>
                        <option value="glass" name="inspectioncategory" onChange={handleChange} checked={inspectionlist.inspectioncategory === "glass"}>유리검사</option>
                    </select> */}
                    <select name="inspectioncategory" onChange={handleChange}>
                        <option selected value="">진단 검사 선택</option>
                        <option value="blood"  >혈액검사</option>
                        <option value="xray"  >영상검사</option>
                        <option value="glass"  >유리검사</option>
                    </select>
                </div>
                <div className="reatmentCreateForm_checkbox">
                    <div className="reatmentCreateForm_checkbox_1"><input  type="checkbox" name="inspection" value="고밀도 콜레스테롤" onChange={handleChange}/> 고밀도 콜레스테롤(High density lipoprotein cholesterol)</div>
                    <div className="reatmentCreateForm_checkbox_1"><input type="checkbox" name="inspection" value="당뇨 검사" onChange={handleChange}/>  당뇨 검사(Diabetes mellitus Tset)</div>
                    <div className="reatmentCreateForm_checkbox_1"><input type="checkbox" name="inspection" value="신경 특이 에놀라제"  onChange={handleChange}/>  신경 특이 에놀라제(Neuron Specific Enolase)</div>
                    <div className="reatmentCreateForm_checkbox_1"><input type="checkbox" name="inspection" value="빈혈 검사1"  onChange={handleChange}/>  빈혈 검사1(Anemia Test)</div>
                    <div className="reatmentCreateForm_checkbox_1"><input type="checkbox" name="inspection" value="빈혈 검사2"  onChange={handleChange}/>  빈혈 검사2(Anemia Test)</div>
                    <div className="reatmentCreateForm_checkbox_1"><input type="checkbox" name="inspection" value="빈혈 검사3"  onChange={handleChange}/>  빈혈 검사3(Anemia Test)</div>
                </div>
                </div>
                </div>
            </div>
                <div className="TreatmentCreateForm_3 row">
                    <div className="TreatmentCreateForm_3_border border">
                        <div className="TreatmentCreateForm_3_title">
                            의사소통 메모
                        </div>
                        <textarea className="TreatmentCreateForm_3_content border" rows="7" cols="32" onChange={handleChange5} value={content5}>
                            당일 검사 요청
                        </textarea>
                    </div>
                    <div className="TreatmentCreateForm_4">
                        <button type="submit" className="button_team2_fill">접수완료</button>
                    </div>
                </div>
               {/* <div className="TreatmentCreateForm_4">
               <button className="button_team2_fill">접수완료</button>
               </div> */}
                {/* <button className="button_team2_fill">접수완료</button>   */}
              
            </div>
            </form>
        </div>
    );
}
export default TreatmentCreateForm;
