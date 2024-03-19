import './ApplicationDetails.css'
import Submenu from './Submenu'
import D1 from './D1'
import D2 from './D2'
import D3 from './D3'
import {useState} from 'react';

export default function ApplicationDetails() {

    // const tabList = document.querySelectorAll('.ApplicationDetails_list li');
    

    const [currentPage, setCurrentPage] = useState('d1');

    const pageHandler = (page) => {
        setCurrentPage(page);
    }

    return(
        <div className='ApplicationDetails_box'>
            <Submenu />
            <div className='ApplicationDetails_Content'>

                <div className='ApplicationDetails_info'>
                    <p>환불안내</p>
                    <ul>
                        <li>홈페이지에서 결제한 강습 : 홈페이지에서 환불이 가능</li>
                        <li>고객상담실에 방문하여 결제한 강습 : 결제한 카드를 지참하여 고객상담실에 방문</li>
                        <li>※ 환불기준 : 소비자 기본법 시행령 제8조(소비자분쟁해결기준) 제3항 및 공정거래 위원회 고시 소비자분쟁해결기준</li>
                        <li>※ 취소 처리 후 원복은 불가하오니 신중히 처리바라며 환불 금액 등 문의사항은 고객상담실로 문의 바랍니다.</li>
                        <br />
                        <li>아래에 순서대로 수강 내역 - 주차 내역 - 대관 내역</li>
                    </ul>
                </div>

                <div className='ApplicationDetails_Menubox'>
                    <div className='ApplicationDetails_tabMenu'>
                        <ul className='ApplicationDetails_list'>
                            <li className='ApplicationDetails_ison'>
                                <div onClick={() => pageHandler('d1')} className='ApplicationDetails_tabBtn'>수강 내역</div>
                            </li>
                            <li>
                                <div onClick={() => pageHandler('d2')} className='ApplicationDetails_tabBtn'>주차 내역</div>
                            </li>
                            <li>
                                <div onClick={() => pageHandler('d3')} className='ApplicationDetails_tabBtn'>대관 내역</div>
                            </li>
                        </ul>


                        <div>
                            {currentPage === 'd1' && <D1 />}
                            {currentPage === 'd2' && <D2 />}
                            {currentPage === 'd3' && <D3 />}
                        </div>
                        {/* <div className='ApplicationDetails_showHistory'>
                            <div id='ApplicationDetails_classHis' className='ApplicationDetails_history' >
                                <p>수강어쩌구</p>
                            </div>
                            <div id='ApplicationDetails_parkHis' className='ApplicationDetails_history'>
                                <p>주차어쩌구</p>
                            </div>
                            <div id='ApplicationDetails_placeHis' className='ApplicationDetails_history'>
                                <p>대관어쩌구</p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
            
        </div>
    )
}