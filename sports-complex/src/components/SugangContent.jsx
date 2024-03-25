import './SugangReciptInfo.css'
import './SugangContent.css'
import Submenu from './Submenu';
import SugangReciptInfo from './SugangReciptInfo';
import XclassSearchBox from './XclassSearchBox';
import SearchButton from './SearchButton'
import SugangSearchList from './SugangSearchList';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SugangContent() {

    const [classesList, setClassesList] = useState([]);

    useEffect(() => {
        axios.get('/classes/classesList')
            .then((classes) => {
                console.log(` classes = ${classes}`);
                setClassesList(classes.data);
            }).catch((error) => {
                console.error(" 강좌 목록 불러오기 실패 ", error);
            });
    }, [])

    console.log(` classesList = ${classesList}`);

    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <div className='board_div_div'>
                    <SugangReciptInfo />
                    <XclassSearchBox />
                    <SearchButton />
                    <div className='SugangSearchList_div'>
                        <div className='SugangSearchList_index'>
                            <span>종목</span>
                            <span>강좌명</span>
                            <span>시간</span>
                            <span>대상</span>
                            <span>등록인원</span>
                            <span>대기인원</span>
                            <span>금액</span>
                            <span>구분</span>
                        </div>
                        {classesList.map((item, index) => (
                            <SugangSearchList key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}