import React, { useState } from "react";
import DaumPostcode from 'react-daum-postcode';
import "./AddressModal.css";

export const Modal = (props) => {
  const {open, close, send} = props;

  // 다음 주소 API
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    
    // 주소 데이터를 createForm으로 보냄
    send(data);
    return data;
  }

  return(
    <div className="patientModal">
      <div className={open ? 'openModal modal':'modal'}>
        {open? (
          <section>
            <main>
              <DaumPostcode
                onComplete={handleComplete} 
                { ...props }
              />
            </main>
            <footer>
              <div className="d-flex justify-content-end m-2">
                <button className="button_team2_empty" onClick={close}>닫기</button>
              </div>
            </footer>
          </section>
        ):null}
      </div>
    </div>
  )
}