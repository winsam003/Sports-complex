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
                console.log(`list.data: ${JSON.stringify(list.data)}`);
            }).catch((error) => {
                console.log("error: ", error);
            })
    }, []);

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
                        eventlist={eventlist}
                        searchEvent={searchEvent} />
                <XResetDeleteBtn />
            </div>
        </div>
    )
}
