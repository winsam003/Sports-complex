import { useEffect, useState } from 'react';
import { apiCall } from '../apiService/apiService';
import './EventDetail.css'
import { TbKeyframeAlignCenter } from "react-icons/tb";
import { MdFestival } from "react-icons/md";



export default function EventDetail({ eventcode }) {

    // 디테일 정보 가져오기 ====================================================
    const [eventDetailOne, setEventDetailOne] = useState('');

    console.log(`EventDetail 에서의 eventcode : `, eventcode);
    useEffect(() => {
        let url = "/event/eventdetail?eventcode=" + eventcode;

        // 405 오류는 post / get 요청 때문이다. *****
        apiCall(url, 'get', eventcode, null)
            .then((eventDetailOne) => {
                setEventDetailOne(eventDetailOne);
            }).catch((error) => {
                console.log("eventDetail error : ", error);
            })
        // fetchEventDetail();
    }, []);

    console.log(`eventDetailOne : `, eventDetailOne);




    //===============================================================================
    return (
        <div className="EventDetailContainor">
            <div className='EventDetail_Box'>
                <div className="EventDetail_title">
                    <MdFestival className='EventDetail_icon' />
                    <p>{eventDetailOne.eventname}</p>
                </div>
                <div className="EventDetail_menu">
                    <p>게시물 번호</p>
                    <p>{eventDetailOne.eventcode}</p>
                </div>

                <div className='EventDetail_twin'>
                    <div className="EventDetail_menu afaf">
                        <p>이용시설</p>
                        <p>{eventDetailOne.eventfacility}</p>
                    </div>
                    <div className="EventDetail_menu afaf">
                        <p>구분</p>
                        <p>{eventDetailOne.eventtype}</p>
                    </div>
                </div>

                <div className='EventDetail_twin'>
                    <div className="EventDetail_menu afaf">
                        <p>대상</p>
                        <p>{eventDetailOne.eventfor}</p>
                    </div>
                    <div className="EventDetail_menu afaf">
                        <p>행사 일시</p>
                        <p>{eventDetailOne.eventtime}</p>
                    </div>
                </div>

                {/* 아래는 추가정보 */}
                <div className='EventDetail_twin'>
                    <div className="EventDetail_menu afaf">
                        <p>작성날짜</p>
                        <p>{eventDetailOne.eventdate}</p>
                    </div>
                    <div className="EventDetail_menu afaf">
                        <p>조회수</p>
                        <p>{eventDetailOne.eventcount}</p>
                    </div>
                </div>
                {/* 내용이랑 사진 */}
                <div>
                    {/* <img src='../../public/img/{eventDetailOne.eventuploadfile}' alt="이벤트 이미지" /> */}
                    <img src='../public/img/dora.jpg' alt="이벤트 이미지" />
                </div>
            </div>
            <div className='EventDetail_buttonBox'>
                <button className='EventDetail_button'>뒤로가기</button>
            </div>
        </div>
    )
}