import './XRentalPlaceControll.css'
import Submenu from './Submenu';
import XRentalPlaceSearchBox from './XRentalPlaceSerachBox';
import XBtnResetSearch from './XBtnResetSearch';
import XRentalPlaceSearchResult from './XRentalPlaceSearchResult';
import XBtnResetDelete from './XBtnResetDelete';
import { useEffect, useState } from 'react';
import axios from 'axios';

// 대관 시설 관리
export default function XRentalPlaceControll() {

    // 삭제하기 위한 checkbox
    const [checkList, setCheckList] = useState('');

    const handleCheckList = (value) => {
        setCheckList(value);
    }

    console.log(`테스트${checkList}`);
    // useEffect(() => {
    //     axios.get('/space/spacedelete')
    //     .then((ss) => {
    //         setCheckList(ss.data);
    //         console.log(`ss.data: ${ss.data}`);
    //     }).catch((error) => {
    //         console.log("Error: ",error);
    //     })
    // }, []);

    return (
        <div className='XRentalPlaceControll_div'>
            <Submenu />
            <div className='XRentalPlaceControll_div_div'>
                <XRentalPlaceSearchBox />
                <XBtnResetSearch />
                <XRentalPlaceSearchResult setCheckList={setCheckList} />
                <XBtnResetDelete checkList={checkList} />
            </div>
        </div>
    )
}