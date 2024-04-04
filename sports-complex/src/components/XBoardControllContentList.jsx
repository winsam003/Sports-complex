import './XBoardControllContentList.css'
import XBoardControllContentListContents from './XBoardControllContentListContents';

import { useEffect, useState } from 'react';


export default function XBoardControllContentList({ searchValue, noticeList, setNoticeList, userDelete, checkedUsers }) {
    return (
        <div className='XBoardControllContentList_div'>
            <div className='XBoardControllContentList_title'>
                <p>선택</p>
                <p>번호</p>
                <p>제목</p>
                <p>공지대상</p>
                <p>작성일</p>
                <p>작성자</p>
                <p>조회수</p>
            </div>
            <div>
                {noticeList.map((item, index) => (
                    <XBoardControllContentListContents key={index} userDelete={userDelete} isChecked={checkedUsers.includes(item.notnum)} {...item} />
                ))}
            </div>
        </div>
    )
}
