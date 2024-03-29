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
    // 리스트 다시 새로고침 위해서 상태 알려주기. <refreshList>
    const [refreshList, setRefreshList] = useState(false);
    // reset 버튼 누르면 체크리스트 초기화. 
    const [inputReset, setInputReset] = useState('unchecked');
    
    
    const del = () => {
        // console.log("나오나 이거: ");
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
    // input select 초기화
    const handleReset = () => {
        // 체크박스 없애주고
        setInputReset(prevInputReset => 'unchecked');
        
        if (inputReset) {
            // inputReset 상태가 변경되면 모든 checkbox의 체크 상태를 해제
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
        }
        // 삭제하면 checkList 배열 비워줘야됨. 
        setCheckList([]);
    }

    //====================================================================리스트
    
    const [searchPlace, setSearchPlace] = useState({
        mainCategory: '전체',
        subCategory: '전체',
        searchValue: ''
    });
    
    const handleSearch = (onSearch) => {
        console.log(onSearch);
        setSearchPlace(onSearch);
        
    }
    
    console.log(searchPlace);
    
    //====================================================================검색

    return (
        <div className='XRentalPlaceControll_div'>
            <Submenu />
            <div className='XRentalPlaceControll_div_div'>
                <XRentalPlaceSearchBox onSearch={handleSearch}/>
                {/* <XBtnResetSearch /> */}
                <XRentalPlaceSearchResult 
                                    setCheckList={setCheckList} 
                                    checkList={checkList}
                                    refreshList={refreshList}
                                    inputReset={inputReset} 
                                    setInputReset={setInputReset}
                                    handleReset={handleReset}
                                    searchPlace={searchPlace}
                                    />
                <XBtnResetDelete del={del} handleReset={handleReset} />
            </div>
        </div>
    )
}