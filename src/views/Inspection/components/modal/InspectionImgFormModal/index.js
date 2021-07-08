import { useEffect, useState } from "react";
import  style from "./InspectionImgFormModal.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { readImage } from "apis/inspections";

function InspectionImgFormModal(props) {
  const [inspectionImgResult, setInspecctionImgResult] = useState(props.inspection);

  const { open, close } = props;

  //let images = [];
  var response;

  useEffect(() => {
    const work = async () => {
      try {
        if(props.id === props.inspection.inspection_id){
            response = await readImage(props.id);
            console.log(response.data);
            // console.log(response.data.inspectionImgList);
            // for(var i=0; i<=response.data.inspectionImgList.length-1; i++) {
            //   images.push({
            //     original: response.data.inspectionImgList[i].inspection_img_path,
            //     thumbnail: response.data.inspectionImgList[i].inspection_img_path
            //   });
            // }
        }
      } catch(error) {
        console.log(error);
      }
    };
    work();
  });


  return (
    <div className={style.InspectionImgModal}>
      <div className={open ? `${style.openModal} ${style.modal}`:`${style.modal}`}>
        {open ? (
          <section>
            <div className={`${style.InspectionImgForm_title} m-2`}>검사 사진</div>
            <div className={`${style.InspectionImgForm_1} border`}>
              <div className={`${style.InspectionImgForm_1_1} m-3`}>
                <div className={`${style.InspectionImgForm_1_1_1} mr-3 ml-3`}>
                  <div className="mb-1">진단검사명 :</div>
                  <div className="mb-1">검사명 :</div>
                  <div className="mb-1">검사번호 :</div>
                  <div className="mb-1">담당의 :</div>
                  <div className="mb-1">검사자 :</div>
                  <div className="mb-1">검사실 :</div>
                </div>
                <div className={style.InspectionImgForm_1_1_2}>
                  <div className="mb-1">{inspectionImgResult.inspection_list_category}</div>
                  <div className="mb-1">{inspectionImgResult.inspection_list_name}</div>
                  {/* <div className="mb-1">{inspectionImgResult.inspectionId}</div> */}
                  <div className="mb-1">{props.id}</div>
                  <div className="mb-1">{inspectionImgResult.inspection_doctor_name}</div>
                  <div className="mb-1">{inspectionImgResult.inspection_inspector_name}</div>
                  <div className="mb-1">{inspectionImgResult.inspection_lab}</div>
                </div>
              </div>
              <div className={`${style.InspectionImgForm_1_2} m-3`}>
                <img src={response} width="100%" height="100%" alt=""></img>
                {/* <ImageGallery items={images}/> */}
              </div>
            </div>
            <div className={`${style.InspectionImgForm_2} m-2`}>
              <button className="button_team2_fill" onClick={close}>닫기</button>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

export default InspectionImgFormModal;
