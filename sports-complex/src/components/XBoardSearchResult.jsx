import './XBoardSearchResult.css'
import EventDetail from './EventDetail';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function XBoardSearchResult({eventlist, searchEvent, handleEventDelete, checkEvent, setCheckEvent}) {

    // type, word 나옴
    // console.log('XBoardSearchResult: ',searchEvent);

    // 사용자 입장 url일 때 
    const location = useLocation();
    // console.log('location.pathname : ', location.pathname);

    // =============================================================================================
    // eventname 클릭하면 디테일 페이지 로 eventcode 보내주기. 
    const navigate = useNavigate();

    const handleEventClick = (eventcode) => {
        try{
            navigate(`/EventDetailPage?eventcode=${eventcode}`);
        } catch (error) {
            console.log('Error eventDetail : ', error);
        }

    }

    // =============================================================================================
    return (
        <div className='XBoardControllContent_SearchResult_div'>
            {/* 조회결과 index */}
            {location.pathname == '/EventBoardPage' ? 
                <div className='indexEvent XBoardControllContent_SearchResult_index_User'>
                    <p>번호</p>
                    <p>제목</p>
                    <p>이용시설</p>
                    <p>이용대상</p>
                    <p>이벤트 타입</p>
                    <p>작성일</p>
                    <p>조회수</p>
                </div>
                :
                <div className='indexEvent XBoardControllContent_SearchResult_index'>
                    <p>선택</p>
                    <p>번호</p>
                    <p>제목</p>
                    <p>이용시설</p>
                    <p>이용대상</p>
                    <p>이벤트 타입</p>
                    <p>작성일</p>
                    <p>조회수</p>
                </div>

            }
            {/* 조회결과 */}

            {location.pathname == '/EventBoardPage' ?
            
                (eventlist
                    .filter(event => { // .filter은 불린값을 반환함. event 하나 내려보내서 true 면 ok, false는 걸러짐.
                        if ( searchEvent.searchType === '' ) {
                            // searchType이 비어 있으면 내용 컬럼을 제외한 모든 컬럼을 대상으로 검색
                            for (let key in event) {
                                if (key !== 'content' && event[key] && event[key].toString().includes(searchEvent.searchKeyWord)) {
                                    return true; // 검색어를 포함하는 경우
                                }
                            }
                            return false; // 검색어를 포함하지 않는 경우
                        } else {
                            // searchType이 존재하면 해당 컬럼을 대상으로 검색
                            return event[searchEvent.searchType] && event[searchEvent.searchType].toString().includes(searchEvent.searchKeyWord);
                        }
                    })
                    .map(({eventcode, eventname, eventdetail, eventfacility, eventtime, eventfor, eventtype, eventcount, eventuploadfile, stfid, eventdate}, index) => (

                        <div className='listEvent XBoardControllContent_SearchResult_User' key={eventcode}>
                            <p>{eventcode}</p>
                            <p onClick={() => handleEventClick(eventcode)}>{eventname}</p>
                            <p>{eventfacility}</p>
                            <p>{eventfor}</p>
                            <p>{eventtype}</p>
                            <p>{eventdate}</p>
                            <p>{eventcount}</p>
                        </div>

                    )))
                :
                (eventlist
                    .filter(event => { // .filter은 불린값을 반환함. event 하나 내려보내서 true 면 ok, false는 걸러짐.
                        if ( searchEvent.searchType === '' ) {
                            // searchType이 비어 있으면 내용 컬럼을 제외한 모든 컬럼을 대상으로 검색
                            for (let key in event) {
                                if (key !== 'content' && event[key] && event[key].toString().includes(searchEvent.searchKeyWord)) {
                                    return true; // 검색어를 포함하는 경우
                                }
                            }
                            return false; // 검색어를 포함하지 않는 경우
                        } else {
                            // searchType이 존재하면 해당 컬럼을 대상으로 검색
                            return event[searchEvent.searchType] && event[searchEvent.searchType].toString().includes(searchEvent.searchKeyWord);
                        }
                    })
                    .map(({eventcode, eventname, eventdetail, eventfacility, eventtime, eventfor, eventtype, eventcount, eventuploadfile, stfid, eventdate}, index) => (
                        <div className='listEvent XBoardControllContent_SearchResult' key={eventcode}>
                            <p><input type='checkbox' 
                                    value={eventcode} 
                                    onChange={(e) => handleEventDelete(e.target.value)}
                                    //   checked={checkEvent[eventcode]}
                                    checked={checkEvent.includes(eventcode.toString())} 
                                    /></p>
                            <p>{eventcode}</p>
                            <p onClick={() => handleEventClick(eventcode)}>{eventname}</p>
                            <p>{eventfacility}</p>
                            <p>{eventfor}</p>
                            <p>{eventtype}</p>
                            <p>{eventdate}</p>
                            <p>{eventcount}</p>
                        </div>

                    )))
            }
        </div>
    )
}