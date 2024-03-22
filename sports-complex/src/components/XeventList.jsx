import './XeventList.css'
import React, {useState}  from 'react';
import XeventContentList from './XeventContentList';

export default function XeventList({data, insertMainPic}) {

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

