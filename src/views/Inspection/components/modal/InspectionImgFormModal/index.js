import { useState } from "react";
import  style from "./InspectionImgFormModal.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function getInspectionImgResults() {
  const inspectionImgResults = {
    inspectionListCategory: "영상검사",
    inspectionListSpecimen: "x-ray",
    inspectionListName: "흉부촬영",
    inspectionId: "2001",
    inspectionDoctorName: "김더존",
    inspectionInspectorName: "박더존",
    inspectionListLab: "검사실1",
  };
  return inspectionImgResults;
}

function InspectionImgFormModal(props) {
  // const [imgSrc, setImgSrc] = useState("xray01.jpg");
  const [inspectionImgResult, setInspecctionImgResult] = useState(getInspectionImgResults);

  const { open, close } = props;

  const images = [
    {
      original: '/resources/img/xray01.jpg',
      thumbnail: '/resources/img/xray01.jpg',
    },
    {
      original: '/resources/img/xray01.jpg',
      thumbnail: '/resources/img/xray01.jpg',
    },
    {
      original: '/resources/img/xray01.jpg',
      thumbnail: '/resources/img/xray01.jpg',
    },
  ];

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
                  <div className="mb-1">검체명 :</div>
                  <div className="mb-1">검사명 :</div>
                  <div className="mb-1">검사번호 :</div>
                  <div className="mb-1">담당의 :</div>
                  <div className="mb-1">검사자 :</div>
                  <div className="mb-1">검사실 :</div>
                </div>
                <div className={style.InspectionImgForm_1_1_2}>
                  <div className="mb-1">{inspectionImgResult.inspectionListCategory}</div>
                  <div className="mb-1">{inspectionImgResult.inspectionListSpecimen}</div>
                  <div className="mb-1">{inspectionImgResult.inspectionListName}</div>
                  {/* <div className="mb-1">{inspectionImgResult.inspectionId}</div> */}
                  <div className="mb-1">{props.id}</div>
                  <div className="mb-1">{inspectionImgResult.inspectionDoctorName}</div>
                  <div className="mb-1">{inspectionImgResult.inspectionInspectorName}</div>
                  <div className="mb-1">{inspectionImgResult.inspectionListLab}</div>
                </div>
              </div>
              <div className={`${style.InspectionImgForm_1_2} m-3`}>
                {/* <img src={`/resources/img/xray01.jpg`} width="100%" height="100%" alt=""></img> */}
                <ImageGallery items={images}/>
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
