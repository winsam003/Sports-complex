import './XEventBoardWriteContent.css'
import Submenu from './Submenu';
import { useState } from 'react';

// 공지사항
export default function XEventBoardWriteContent({getUserID}) {

    // 이벤트 등록 insert form
    const [formEvent, setFormEvent] = useState({
        eventname : '', 
        eventdetail : '', 
        eventfacility : '',
        eventtime : '', 
        eventfor : '', 
        eventtype : '', 
        eventuploadfile : '', 
        stfid: {getUserID}
    });

    console.log('formEvent : ',  formEvent);

    const [eventName, setEventName] = useState("");
    const [eventFacilityType, setEventFacilityType] = useState("");
    const [eventfacilityName, setEventfacilityName] = useState("");
    const [eventType, setEventType] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventDetail, setEventDetail] = useState("");


    // 이벤트 이름. 
    const makeEventName = (e) => {
        setEventName(e);

        setFormEvent({
            ...formEvent,
            eventname : e
        })
    }

    // 이벤트 이용시설. 
    const makeEventfacility = (e) => {

        setEventFacilityType(e);
        setEventfacilityName(e);

        setFormEvent({
            ...formEvent,
            eventfacility : e
        })
    }

    // 이벤트 종류 
    const makeEventType = (e) => {
        setEventType(e);

        setFormEvent({
            ...formEvent,
            eventtype : e
        })
    }

    // 이벤트 시간
    const makeEventTime = (e) => {
        setEventDate(e);

        setFormEvent({
            ...formEvent,
            eventtime : e
        })
    }

    // 이벤트 내용
    const makeEventDetail = (e) => {
        setEventDetail(e);
        
        setFormEvent({
            ...formEvent,
            eventdetail : e
        })
    }



    console.log(eventfacilityName);
    console.log(eventName);
    console.log(eventType);
    


    return (
        <div className='XEventBoardWriteContent_div'>
            <Submenu />
            <div className='XEventBoardWriteContent_div_div'>
                <div className='XEventBoardContent_haveto'>
                    <p>(<span className='star'>*</span>)는 반드시 작성해야 할 필수 항목입니다.</p>
                </div>
                <div className='XEventBoardContent_form'>
                    <form action="/" method='post'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>작성자 <span className='star'>*</span></th>
                                    <td><input type="text" name='name' id='name' value={getUserID} readOnly /></td>
                                </tr>
                                <tr>
                                    <th>제목 <span className='star'>*</span></th>
                                    <td>
                                        <input type="text" name='title' 
                                                            id='title' 
                                                            value={eventName}
                                                            onChange={(e) => makeEventName(e.target.value)} 
                                                            // onBlur={makeEventName}
                                                            />
                                    </td>
                                </tr>
                                <tr>
                                    <th>이용 시설<span className='star'>*</span></th>
                                    <td>
                                        <select name="eventfacility" id="eventfacility" 
                                                value={eventFacilityType} 
                                                onChange={(e) => makeEventfacility(e.target.value)}  >
                                            <option value="">직접 입력</option>
                                            <option value="운동장 ">운동장</option>
                                            <option value="농구장 ">농구장</option>
                                            <option value="풋살장 ">풋살장</option>
                                            <option value="테니스장 ">테니스장</option>
                                        </select>
                                        <input type="text" name='eventfacilityName' id='eventfacilityName'
                                                value={eventfacilityName} 
                                                onChange={(e) => makeEventfacility(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>이벤트 종류</th>
                                    <td>
                                        <input type="radio" id='eventboard_sport' name='eventboard_Type' value='스포츠 행사'
                                                onChange={(e) => makeEventType(e.target.value)} />
                                        <label htmlFor="eventboard_sport">스포츠 행사</label>
                                        <input type="radio" id='eventboard_general' name='eventboard_Type' value='일반 행사'
                                                onChange={(e) => makeEventType(e.target.value)} />
                                        <label htmlFor="eventboard_general">일반 행사</label>
                                        <input type="radio" id='eventboard_competition' name='eventboard_Type' value='대회'
                                                onChange={(e) => makeEventType(e.target.value)} />
                                        <label htmlFor="eventboard_competition">대회</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>날짜 <span className='star'>*</span></th> 
                                    <td>
                                        <input type="date" name='eventdate' id='eventdate' 
                                                value={eventDate}
                                                onChange={(e) => makeEventTime(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>내용 <span className='star'>*</span></th>
                                    <td>
                                        <textarea type="text" name='content' id='content' 
                                                value={eventDetail}
                                                onChange={(e) => makeEventDetail(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>첨부파일</th>
                                    <td className='XEventBoardContent_upload'>
                                        <input className='test' type="file" name='uploadfilef' id='uploadfilef' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div className='XEventBoardContent_btn_div'>
                        <button>등록</button>
                        <button>목록</button>
                    </div>
                </div>
            </div>
        </div>
    )
}