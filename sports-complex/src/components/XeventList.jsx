import './XeventList.css'
import React, {useState}  from 'react';
import XeventContentList from './XeventContentList';

export default function XeventList({insertMainPic}) {

    // 테스트용 객체입니다 테이블 연결 후 테이블 데이터로 교체할 예정입니다.
    const data = [
    {
        "eventCode" : "00001",
        "eventName" : "김수한무두루미 생일잔치",
        "cpCode" : "1",
        "eventUpload" : "24.03.19",
        "eventUploadfile" : "",
    },
    {
        "eventCode" : "00002",
        "eventName" : "장근정 파티",
        "cpCode" : "2",
        "eventUpload" : "24.03.20",
        "eventUploadfile" : "",
    },
    {
        "eventCode" : "00003",
        "eventName" : "리액트리액트 공연",
        "cpCode" : "3",
        "eventUpload" : "24.03.21",
        "eventUploadfile" : "",
    },
    {
        "eventCode" : "00004",
        "eventName" : "이거바이거이거이거",
        "cpCode" : "ㄱㅈ",
        "eventUpload" : "23.03.09",
        "eventUploadfile" : "",
    }
    ]


    return(
        <div className='XeventList'>
            <div className='XeventList_div'>
                <span>선택</span>
                <span>번호</span>
                <span>제목</span>
                <span>작성자</span>
                <span>등록일시</span>
                <span>첨부파일</span>
            </div>
            <div className='XeventList_content'>
                {data.map((it, index) => (
                    <XeventContentList key={index} insertMainPic={insertMainPic} {...it} 
                        />
                ))}
            </div>
        </div>
    )
}

