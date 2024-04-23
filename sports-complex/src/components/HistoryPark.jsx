import { useState } from 'react';
import { apiCall } from '../apiService/apiService';
import './HistoryPark.css'
import HistoryParkContent from './HistoryParkContent';

export default function HistoryPark({myParkapp, token}) {

    const cancelParkapp = (parkappnum, spacecode) => {
        let url = "/parkapp/parkappcancel";
        console.log("parkappnum : " , parkappnum);

        // 취소할 때 내 등록번호랑 공간 spacecode  가져가기
        let cancelForm = {
            parkAppNum : parkappnum, 
            spacecode : spacecode
        }

        if(window.confirm("주차 신청을 취소하시겠습니까?")) {
            apiCall(url, 'post', cancelForm, token)
                .then((response) => {
                    alert(response);
                    window.location.reload();
                }).catch((error) => {
                    alert(error);
                })
        }
    }


    return (
        <div className="HistoryPark_box">
            <div className="HistoryPark_index">
                {/* <span>주차신청번호</span> */}
                <span>신청일자</span>
                <span>이용 달</span>
                <span>차 번호</span>
                <span>주차장</span>
                <span>결제방법</span>
                <span>상태</span>
                <span>취소</span>
            </div>
            <HistoryParkContent myParkapp={myParkapp} cancelParkapp={cancelParkapp} />
        </div>
    )
}