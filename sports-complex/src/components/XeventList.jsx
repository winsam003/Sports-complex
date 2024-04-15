import './XeventList.css'
import React, {useState}  from 'react';

export default function XeventList({eventlist, eventcodeC, checkedEvent, handleEvent}) {


    return(
        <div className='XeventList'>
            <div className='XeventList_div'>
                <span>선택</span>
                <span>번호</span>
                <span>제목</span>
                <span>작성자</span>
                <span>등록일시</span>
                {/* <span>첨부파일</span> */}
            </div>
            <div className='XeventList_content'>
                {eventlist.map((it, index) => (
                    <div key={index} className="XeventContentList_Box">
                        <div className="XeventContentList_contents">
                            <span><input type="checkbox" 
                                        value={it.eventcode} 
                                        onChange={(e) => handleEvent(it.eventcode)} 
                                        /></span>
                            <span>{it.eventcode}</span>
                            <span>{it.eventname}</span>
                            <span>{it.stfid}</span>
                            <span>{it.eventdate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

