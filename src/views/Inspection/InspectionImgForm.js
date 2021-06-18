import { useState } from "react";

function InspectionImgForm(props) {
  const [imgSrc, setImgSrc] = useState("xray01.jpg");

  return (
    <div className="InspectionImgForm">
      <div className="InspectionImgForm_title">
        검사 사진
      </div>
      <div className="InspectionImgForm_1 border">
        <img src={`/resources/img/${imgSrc}`} width="100%" height="100%" alt=""></img>
      </div>
    </div>
  );
}

export default InspectionImgForm;