import './XEventControllContent.css'
import XEventSearch from './XEventSearch';
import XBoardSearchResult from './XBoardSearchResult'
import XResetDeleteBtn from './XBtnResetDelete'
import Submenu from './Submenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiCall } from '../apiService/apiService';
import { Link } from 'react-router-dom';

export default function XEventControllContent() {

    // 체크리스트
    const [checkEvent, setCheckEvent] = useState([]);

    // 리스트 ===============================================================
    const [eventlist, seteventlist] = useState([]);

    useEffect(() => {
        fetchEventList();
        // 배열로 나오는것 확인, 
        console.log(checkEvent);
    }, [checkEvent]);

    const fetchEventList = () => {
        let url = "/event/eventlist";
        // console.log(apiCall(url, 'get', null, null));

        apiCall(url, 'get', null, null)
            .then((eventlist) => {
                seteventlist(eventlist);
            }).catch((error) => {
                console.log("eventlist error: ", error);
            })
    }

    // 검색창 ===============================================================
    // 검색 분야 / 키워드 
    const [searchType, setSearchType] = useState('');
    const [searchKeyWord, setSearchKeyWord] = useState('');

    // 검색 
    const [searchEvent, setSearchEvent] = useState({
        searchType: '',
        searchKeyWord: ''
    });

    // 검색버튼
    const handleSearch = (onSearch) => {
        setSearchEvent(onSearch);
    }
    // 검색버튼 눌렀을 때 나오는 것 확인.
    // console.log('searchEvent: ',searchEvent);

    // 체크 ===============================================================

    const handleEventDelete = (deleteValue) => {
        const deleteValueString = deleteValue.toString();
        if (!checkEvent.includes(deleteValueString)) {
            setCheckEvent(prevCheckEvent => [...prevCheckEvent, deleteValueString]);
        } else {
            setCheckEvent(prevCheckEvent => prevCheckEvent.filter(value => value !== deleteValueString));
        }
    }

    // 삭제 ===============================================================
    const del = () => {
        let url = "/event/eventdelete"

        apiCall(url, 'post', checkEvent, null)
            .then((checkEvent) => {
                setCheckEvent([]);
                fetchEventList();
            }).catch((error) => {
                console.log("delete error: ", error);
            })
    }

    // 선택 초기화 ===============================================================    
    const handleReset = () => {
        setCheckEvent([]);
    }


    //=============================================================== 
    return (
        <div className='XEventControllContent_div'>
            <Submenu />
            <div className='XEventControllContent_div_div'>
                <div className='XEventControllContent_uploadAndSearch'>
                    <Link to = '/XEventBoardWritePage'><span>등록</span></Link>
                    <XEventSearch
                        onSearch={handleSearch}
                        searchType={searchType}
                        setSearchType={setSearchType}
                        searchKeyWord={searchKeyWord}
                        setSearchKeyWord={setSearchKeyWord} />
                </div>
                <XBoardSearchResult
                    eventlist={eventlist}
                    searchEvent={searchEvent}
                    handleEventDelete={handleEventDelete}
                    checkEvent={checkEvent}
                    setCheckEvent={setCheckEvent} />
                <XResetDeleteBtn del={del} handleReset={handleReset} />
            </div>
        </div>
    )
}
