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
    const [checkList, setCheckList] = useState([]);

    const handleCheckList = (value) => {
        setCheckList([...checkList, ...value]);
    }

    // checkList 배열로 담아줌. 
    console.log(checkList);
    
    const [test, setTest] = useState();
    // 리스트 다시 새로고침 위해서 상태 알려주기. 
    const [refreshList, setRefreshList] = useState(false);

    
    const del = () => {
        console.log("나오나 이거: ");
        axios.post('/space/spacedelete', checkList)
        .then((ss) => {
            setTest(ss.data);
            console.log(`ss.data: ${ss.data}`);

            // 삭제하면 checkList 배열 비워줘야됨. 
            setCheckList([]);

            // 삭제하고 상태 보내야됨. 
            setRefreshList(prev => !prev);
        }).catch((error) => {
            console.log("Error: ",error);
        })
    }

    return (
        <div className='XRentalPlaceControll_div'>
            <Submenu />
            <div className='XRentalPlaceControll_div_div'>
                <XRentalPlaceSearchBox />
                <XBtnResetSearch />
                <XRentalPlaceSearchResult 
                                    setCheckList={setCheckList} 
                                    checkList={checkList}
                                    refreshList={refreshList}
                                    setRefreshList={setRefreshList} />
                <XBtnResetDelete del={del} />
            </div>
        </div>
    )
}