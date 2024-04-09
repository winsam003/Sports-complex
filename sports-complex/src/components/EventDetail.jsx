import { useEffect, useState } from 'react';
import { apiCall } from '../apiService/apiService';
import './EventDetail.css'
import { MdFestival } from "react-icons/md";
import axios from 'axios';
import App from './../App';
import { API_BASE_URL } from '../apiService/app-config';

export default function EventDetail({ eventcode }) {

    // 디테일 정보 가져오기 ====================================================
    const [eventDetailOne, setEventDetailOne] = useState('');

    const [imagePath, setImagePath] = useState('');


    // console.log(`EventDetail 에서의 eventcode : `, eventcode);

    useEffect(() => {
        
        apiCall('/event/eventimages', 'get', null, null)
            .then((response) => {
                setImagePath(response);
                // console.log(response);
                // test = response;
            }).catch((error) => {
                console.log("이미지 없음 " + error)
            })
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

    // console.log(`eventDetailOne : `, eventDetailOne);
    
    // 파일명
    // console.log(eventDetailOne.eventuploadfile);

    //===============================================================================

    console.log((imagePath)+(eventDetailOne.eventuploadfile));
    // console.log(imagePath);


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
                    <div className="EventDetail_menu">
                        <p>이용시설</p>
                        <p>{eventDetailOne.eventfacility}</p>
                    </div>
                    <div className="EventDetail_menu">
                        <p>구분</p>
                        <p>{eventDetailOne.eventtype}</p>
                    </div>
                </div>
                
                <div  className='EventDetail_twin'>
                    <div className="EventDetail_menu">
                        <p>대상</p>
                        <p>{eventDetailOne.eventfor}</p>
                    </div>
                    <div className="EventDetail_menu">
                        <p>행사 일시</p>
                        <p>{eventDetailOne.eventtime}</p>
                    </div>
                </div>

                {/* 아래는 추가정보 */}
                <div className='EventDetail_twin'>
                    <div className="EventDetail_menu">
                        <p>작성날짜</p>
                        <p>{eventDetailOne.eventdate}</p>
                    </div>
                    <div className="EventDetail_menu">
                        <p>조회수</p>
                        <p>{eventDetailOne.eventcount}</p>
                    </div>
                </div>
                {/* 내용이랑 사진 */}
                <div  className='EventDetail_content'>
                    <div>
                        <p>{eventDetailOne.eventdetail}</p>
                    </div>
                    {(eventDetailOne.eventuploadfile) ? 
                        <div>
                            <img src={API_BASE_URL + "/event/eventimages?img=" + eventDetailOne.eventuploadfile} alt="이벤트 이미지" />
                        </div>
                    :
                    <div></div>
                }
                </div>
            </div>
            <div className='EventDetail_buttonBox'>
                
                <button className='EventDetail_button' 
                        onClick={() => window.history.back()} >목록</button>
            </div>
        </div>
    )
}