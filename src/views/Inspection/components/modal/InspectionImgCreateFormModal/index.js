import { useRef, useState } from "react";
import style from "./InspectionImgCreateFormModal.module.css";
import { createImage } from "apis/inspections";

function InspectionImgCreateFormModal(props) {
  const [inspectionImgResult, setInspecctionImgResult] = useState(props.inspection);

  const { open, closeR, close } = props;

  const inputFile = useRef();
  // const inputFile2 = useRef();
  // const inputFile3 = useRef();

  const inspectionImgResultBtn = async (event) => {
    event.preventDefault();

    // console.log(inputFile.current.files.length);
    try {
      const formData = new FormData();
      formData.append("inspection_img_inspection_id", inspectionImgResult.inspection_id);
      for(var i=0; i<=inputFile.current.files.length-1; i++){
      formData.append("inspection_img_attach", inputFile.current.files[i]);
      }
      await createImage(formData);

    // formData 콘솔 찍는 법
    // for (let value of formData.values()) {
    //   console.log(value);
    // }

    } catch(error) {
      console.log(error);
    }
    
    if(inputFile.current.files.length === 0) {
      alert("첨부파일이 없습니다.");
    } else {
      closeR();
    }
    
  };

  return (
    <div className={style.InspectionImgCreateModal}>
      <div className={open ? `${style.openModal} ${style.modal}`:`${style.modal}`}>
        {open ? (
          <section>
            <div className={style.InspectionImgCreateForm}>
              <div className={`${style.InspectionImgCreateForm_title} m-2`}>검사 결과 등록</div>
              <div className={`${style.InspectionImgCreateForm_1} border`}>
                <form encType="multipartFormData">
                  <div className={`${style.InspectionImgCreateForm_1_1} mt-3 mb-3`}>
                    <div className={`${style.InspectionImgCreateForm_1_1_1} mr-3`}>
                      <div className="mb-1">진단검사명 :</div>
                      <div className="mb-1">검사명 :</div>
                      <div className="mb-1">검사번호 :</div>
                      <div className="mb-1">담당의 :</div>
                      <div className="mb-1">검사자 :</div>
                      <div className="mb-1">검사실 :</div>
                      <div>첨부파일 : </div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className={style.InspectionImgCreateForm_1_1_2}>
                      <div className="mb-1">{inspectionImgResult.inspection_list_category}</div>
                      <div className="mb-1">{inspectionImgResult.inspection_list_name}</div>
                      {/* <div className="mb-1">{inspectionImgResult.inspectionId}</div> */}
                      <div className="mb-1">{props.id}</div>
                      <div className="mb-1">{inspectionImgResult.inspection_doctor_name}</div>
                      <div className="mb-1">{inspectionImgResult.inspection_inspector_name}</div>
                      <div className="mb-1">{inspectionImgResult.inspection_lab}</div>
                      <div className="mb-1"><input name="iattach" type="file" multiple style={{ width: "100%" }} ref={inputFile} /></div>
                      {/* <div className="mb-1"><input name="iattach2" type="file" style={{ width: "100%" }} ref={inputFile2} /></div> */}
                      {/* <div className="mb-1"><input name="iattach3" type="file" style={{ width: "100%" }} ref={inputFile3} /></div> */}
                    </div>
                  </div>
                  <div className={`${style.InspectionImgCreateForm_1_2} mb-3`}>
                    <button type="submit" className="button_team2_fill m-0" onClick={inspectionImgResultBtn}>등록</button>
                    <button className="button_team2_empty" onClick={close}>닫기</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

export default InspectionImgCreateFormModal;
