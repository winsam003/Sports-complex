import { useState, useEffect } from 'react';
import './SugangSearchList.css'
import axios from 'axios';

export default function SugangSearchList() {
    const [classesList, setClassesList] = useState("");

    useEffect(() => {
        axios.get('/classes/classesList')
            .then((classes) => {
                setClassesList(classes.data);
            }).catch((error) => {
                console.error(" 강좌 목록 불러오기 실패 ", error);
            });
    }, [])

    console.log(` classesList = ${classesList}`);

    return (
        <div>
            <div className='SugangSearchList_div'>
                <div className='SugangSearchList_index'>
                    <span>대분류</span>
                    <span>소분류</span>
                    <span>강좌명</span>
                    <span>시간</span>
                    <span>대상</span>
                    <span>등록인원</span>
                    <span>대기인원</span>
                    <span>금액</span>
                    <span>구분</span>
                </div>
                <div className='SugangSearchList_content'>
                    <span>수영</span>
                    <span>접영</span>
                    <span>기초 접영 수영</span>
                    <span>24.03.18 - 24.04.18</span>
                    <span>청소년</span>
                    <span>11/50</span>
                    <span>0/50</span>
                    <span>100,000</span>
                    <span>신청 가능</span>
                </div>
            </div>
        </div>
    )
}