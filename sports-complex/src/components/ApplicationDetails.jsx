import './ApplicationDetails.css'
import Submenu from './Submenu'
import HistoryClass from './HistoryClass'
import HistoryPark from './HistoryPark'
import HistoryRental from './HistoryRental'
import HistoryBattle from './HistoryBattle'
import { useState, useMemo, useEffect } from 'react';
import { apiCall } from '../apiService/apiService';

export default function ApplicationDetails({ token, getUserID }) {

    const [currentPage, setCurrentPage] = useState('HistoryClass');
    const [history, setHistory] = useState([]);
    useEffect(() => {
        let url = '/spaceRentApp/historyRental';
        // if (currentPage === 'HistoryRental') {
        //     url = '/spaceRentApp/historyRental';
        // } else if (currentPage === 'HistoryBattle') {
        //     url = '/spaceRentApp/historyBattle';
        // }
        let id = getUserID;
        apiCall(url, 'post', id, token)
            .then((response) => {
                setHistory(response);
            }).catch((error) => {
                console.log("HistroyRental error Occured = " + error);
            })
    }, [])

    const pageHandler = (page) => {
        setCurrentPage(page);
    }

    const selectedPage = useMemo(() => {
        switch (currentPage) {
            case 'HistoryClass':
                return <HistoryClass />
            case 'HistoryPark':
                return <HistoryPark />
            case 'HistoryRental':
                return <HistoryRental history={history} token={token} />
            case 'HistoryBattle':
                return <HistoryBattle token={token} getUserID={getUserID} />
        }
    }, [currentPage]);

    return (
        <div className='ApplicationDetails_box'>
            <Submenu />
            <div className='ApplicationDetails_Content'>

                <div className='ApplicationDetails_info'>
                    <h1> 신청내역</h1>
                    <ul>
                        <li> 홈페이지에서 결제한 강습 : 홈페이지에서 환불이 가능</li>
                        <li> 고객상담실에 방문하여 결제한 강습 : 결제한 카드를 지참하여 고객상담실에 방문</li>
                        <li>※ 환불기준 : 소비자 기본법 시행령 제8조(소비자분쟁해결기준) 제3항 및 공정거래 위원회 고시 소비자분쟁해결기준</li>
                        <li>※ 취소 처리 후 원복은 불가하오니 신중히 처리바라며 환불 금액 등 문의사항은 고객상담실로 문의 바랍니다.</li>
                        <br />
                        <li>아래에 순서대로 수강 내역 - 주차 내역 - 대관 내역</li>
                    </ul>
                </div>

                <div className='ApplicationDetails_Menubox'>
                    <div className='ApplicationDetails_tabMenu'>
                        <ul className='ApplicationDetails_list'>
                            <li className={currentPage === 'HistoryClass' ? 'ApplicationDetails_ison' : ''}>
                                <div onClick={() => pageHandler('HistoryClass')} className='ApplicationDetails_tabBtn'>수강 내역</div>
                            </li>
                            <li className={currentPage === 'HistoryPark' ? 'ApplicationDetails_ison' : ''}>
                                <div onClick={() => pageHandler('HistoryPark')} className='ApplicationDetails_tabBtn'>주차 내역</div>
                            </li>
                            <li className={currentPage === 'HistoryRental' ? 'ApplicationDetails_ison' : ''}>
                                <div onClick={() => pageHandler('HistoryRental')} className='ApplicationDetails_tabBtn'>대관 내역</div>
                            </li>
                            <li className={currentPage === 'HistoryBattle' ? 'ApplicationDetails_ison' : ''}>
                                <div onClick={() => pageHandler('HistoryBattle')} className='ApplicationDetails_tabBtn'>경기신청 내역</div>
                            </li>
                        </ul>


                        <div className='ApplicationDetails_showHistory'>
                            {selectedPage}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}