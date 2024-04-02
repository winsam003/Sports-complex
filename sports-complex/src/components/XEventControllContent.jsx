import './XEventControllContent.css'
import XEventSearch from './XEventSearch';
import XBoardSearchResult from './XBoardSearchResult'
import XResetDeleteBtn from './XBtnResetDelete'
import Submenu from './Submenu';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function XEventControllContent() {

    // 리스트 ===============================================================
    const [eventlist, seteventlist] = useState([]);

    useEffect(() => {
        axios.get('/event/eventlist')
            .then((list) => {
                seteventlist(list.data);
                console.log(`list.data: ${list.data}`);
            }).catch((error) => {
                console.log("error: ", error);
            })
    }, []);

    // 검색창 ===============================================================
    // 검색 분야 / 키워드 
    const [searchType, setSearchType] = useState('전체');
    const [searchKeyWord, setSearchKeyWord] = useState('');

    console.log(searchEvent);
    console.log(searchType);
    console.log(searchKeyWord);


    const [searchEvent, setSearchEvent] = useState({
        searchType: '전체', 
        searchKeyWord: ''
    });

    const handleSearch = (onSearch) => {
        setSearchEvent(onSearch);
    }



    return (
        <div className='XEventControllContent_div'>
            <Submenu />
            <div className='XEventControllContent_div_div'>
                <XEventSearch 
                        onSearch={handleSearch}
                        searchType={searchType} 
                        setSearchType={setSearchType}
                        searchKeyWord={searchKeyWord} 
                        setSearchKeyWord={setSearchKeyWord} />
                <XBoardSearchResult 
                        eventlist={eventlist} />
                <XResetDeleteBtn />
            </div>
        </div>
    )
}
