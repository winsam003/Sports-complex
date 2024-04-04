import './XBoardControllContent.css'
import XBoardSearchBox from './XBoardSearchBox';
import XResetDeleteBtn from './XBtnResetDelete'
import Submenu from './Submenu';
import XBoardControllContentList from './XBoardControllContentList';
import { useEffect, useState } from 'react';
import { apiCall } from '../apiService/apiService';

export default function XBoardControllContent() {
    const [noticeList, setNoticeList] = useState([]);
    useEffect(() => {
        let url = "/notice/noticeList";

        apiCall(url, 'get', null, null)
            .then((response) => {
                setNoticeList(response);
            }).catch((error) => {
                console.log("noticeList error occred = " + error);
            })
    }, [])


    const [searchValue, setSearchValue] = useState('');
    const searchValueHandler = (e) => {
        setSearchValue(e.target.value);
    }
    const [search, setSearch] = useState(false);
    const searchHandler = () => {
        setSearch(true);
    }

    useEffect(() => {
        let filteredData = [];
        console.log(searchValue)
        switch (searchValue) {
            case "공지대상":
                filteredData = noticeList.filter((item) => item.quesT === searchValue);
                console.log("Test");
                break;
            case "제목":
                filteredData = noticeList.filter((item) => item.title === searchValue);
                break;
            case "작성자":
                filteredData = noticeList.filter((item) => item.stfid === searchValue);
                break;
            case "내용":
                filteredData = noticeList.filter((item) => item.notdetail === searchValue);
                break;
            default:
        }
        setNoticeList(filteredData);
        setSearch(false);
        console.log(filteredData)
    }, [search])
    


    return (
        <div className='XBoardControllContent_div'>
            <Submenu />
            <div className='XBoardControllContent_div_div'>
                <XBoardSearchBox searchValueHandler={searchValueHandler} searchHandler={searchHandler} />
                <XBoardControllContentList searchValue={searchValue} noticeList={noticeList} setNoticeList={setNoticeList} setSearch={setSearch} search={search} />
                <XResetDeleteBtn />
            </div>
        </div>
    )
}
