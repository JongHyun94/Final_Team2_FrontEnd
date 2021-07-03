import React, { useState } from "react";
// import "./TreatmentImgReadModal.css";
import style from "./style.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const TreatmentImgRead = (props) => {
  const { open, close, inspectionImg, inspectionlistName, inspectionlistCategory, inspectionTreatmentId, inspectionDate } = props;
  // const [imgSrc, setImgSrc] = useState("xray01.jpg");
  const images = [
    {
      original: "/resources/img/xray01.jpg",
      thumbnail: "/resources/img/xray01.jpg",
    },
    {
      original: "/resources/img/xray01.jpg",
      thumbnail: "/resources/img/xray01.jpg",
    },
    {
      original: "/resources/img/xray01.jpg",
      thumbnail: "/resources/img/xray01.jpg",
    },
  ];

  return (
    <div className={style.TreatmentImgmodal}>
       <div className={open ? `${style.openModal} ${style.modal}`:`${style.modal}`} >
        {open ? (
          <section>
            <div className={style.TreatmentImgRead}>
              <div className={style.TreatmentImgRead_1}>
                {/* <div className="TreatmentImgRead_1_1"> */}
                <div className={style.TreatmentImgRead_1_1}>
                  <div>검사명 : {inspectionlistName} </div>
                  <div>진단 검사명 : {inspectionlistCategory} </div>
                  <div>진료 번호 : {inspectionTreatmentId}</div>
                  <div>검사 날짜 : {inspectionDate}</div>
                </div>

                <div className={style.TreatmentImgRead_1_2}>
                  {/* <img src={`/resources/img/${inspectionImg}`} width="100%" height="100%" alt=""></img> */}
                  <ImageGallery items={images} />
                </div>
              </div>
              <div className={style.TreatmentImgRead_2}>
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
