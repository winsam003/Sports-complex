import { useEffect, useState } from 'react'
import { apiCall } from '../apiService/apiService';
import './BoardSearchList.css'
import BoardSearchList2 from './BoardSearchlist2';

export default function BoardSearchList() {
    
    const [noticeList, setNoticeList] = useState([]);
    useEffect(() => {
        let url = "/notice/noticeList";
        let test = JSON.parse(sessionStorage.getItem('userData'));
        let token = test.token;
        console.log(`token=${token}`);
        


        apiCall(url, 'get', null, token)
            .then((response) => {
                setNoticeList(response);
            }).catch((error) => {
                console.log("noticeList error occred = " + error);
            })
    }, [])

    return (
        <div>
            <div className='BoardSearchList'>
                <div className='BoardSearchList_div'>
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>등록일시</span>
                </div>

                {noticeList.map((it, index) => (
                    <BoardSearchList2 key={index} {...it} />))}

            </div>
        </div>
    )
}