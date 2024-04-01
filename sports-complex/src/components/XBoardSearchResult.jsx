import './XBoardSearchResult.css'
import EventDetail from './EventDetail';

export default function XBoardSearchResult({eventlist}) {

    return (
        <div className='XBoardControllContent_SearchResult_div'>
            {/* 조회결과 index */}
            <div className='XBoardControllContent_SearchResult_index'>
                <p>선택</p>
                <p>번호</p>
                <p>제목</p>
                <p>이용시설</p>
                <p>이용대상</p>
                <p>이벤트 타입</p>
                <p>작성일</p>
                <p>조회수</p>
            </div>
            {/* 조회결과 */}
            {eventlist
                .map(({eventcode, eventname, eventde, eventfacility, eventtime, eventfor, eventtype, eventcount, eventuploadfile, stfid, eventdate}, index) => (
                    <div className='XBoardControllContent_SearchResult'>
                        <p><input type='checkbox' value={eventcode}></input></p>
                        <p>{eventcode}</p>
                        <p>{eventname}</p>
                        <p>{eventfacility}</p>
                        <p>{eventfor}</p>
                        <p>{eventtype}</p>
                        <p>{eventdate}</p>
                        <p>{eventcount}</p>
                    </div>

                ))}
        </div>
    )
}