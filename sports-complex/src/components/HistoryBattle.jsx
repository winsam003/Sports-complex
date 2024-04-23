import { useEffect, useState } from 'react';
import './HistoryBattle.css'
import HistoryRentalBattleContents from './HistoryRentalBattleContents';
import { apiCall } from '../apiService/apiService';

export default function HistoryBattle({ token, getUserID }) {
    const [history, setHistory] = useState([]);
    useEffect(() => {
        let url = '/spaceRentApp/historyBattle';
        let id = getUserID;
        apiCall(url, 'post', id, token)
            .then((response) => {
                setHistory(response);
            }).catch((error) => {
                console.log("HistroyRental error Occured = " + error);
            })
    }, [])
    return (
        <div className="HistoryBattle_box">
            <div className="HistoryBattle_index">
                <span>대관신청번호</span>
                <span>장소명</span>
                <span>경기신청일자</span>
                <span>금액</span>
                <span>결제방법</span>
                <span>경기신청여부</span>
                <span>상태</span>
            </div>
            <div>
                {history.map((item, index) => (
                    <HistoryRentalBattleContents key={index} {...item} token={token} />
                ))}
            </div>
        </div>
    )
}