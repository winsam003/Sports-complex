import './XFaqControllContent.css'
import XFaqSearchBox from './XFaqSearchBox';
import XFaqControllContentList from './XFaqControllContentList'
import XResetDeleteBtn from './XBtnResetDelete'
import Submenu from './Submenu';
import { useEffect, useState } from 'react';
import { apiCall } from '../apiService/apiService';
import XBoardSearchBox from './XBoardSearchBox';
import { useNavigate } from 'react-router-dom';

export default function XFaqControllContent() {

    // 서치박스 검색타입, 키워드 저장, 검색, 검색 조건, input에서 엔터누를시 검색 실행 ******************************************************************************//

    //서치박스 검색타입 저장
    const [searchValue, setSearchValue] = useState('');
    const searchValueHandler = (e) => {
        setSearchValue(e.target.value);
    }
    //키워드 저장
    const [searchKeyword, setSearchKeyword] = useState('');
    const searchKeywordHandler = (e) => {
        setSearchKeyword(e.target.value);
    }
    //검색 기능 활성화
    const [search, setSearch] = useState(false);
    const searchHandler = () => {
        setSearch(true);
    }


    //검색 조건
    useEffect(() => {
        let filteredData = [];
        switch (searchValue) {
            case "공지대상":
                filteredData = rememberList.filter((item) => item.quest.includes(searchKeyword));
                break;
            case "제목":
                filteredData = rememberList.filter((item) => item.nottitle.includes(searchKeyword));
                break;
            case "작성자":
                filteredData = rememberList.filter((item) => item.stfid.includes(searchKeyword));
                break;
            case "내용":
                filteredData = rememberList.filter((item) => item.notdetail.includes(searchKeyword));
                break;
            default:
                filteredData = rememberList.filter((item) => (item.quest === searchKeyword) || item.nottitle.includes(searchKeyword)
                    || item.stfid.includes(searchKeyword) || item.notdetail.includes(searchKeyword));
        }
        setNoticeList(filteredData);
        setSearch(false);
    }, [search])


    // input에서 엔터누를 시 검색 실행
    const KeyPressHandler = (e) => {
        console.log("TEST");
        if (e.key === 'Enter') {
            setSearch(true);
        }
    }
    // 서치박스 검색타입, 키워드 저장, 검색, 검색 조건, input에서 엔터누를시 검색 실행 ******************************************************************************//




    //******************************* 회원정보조회 초기화 버튼 시작 *********************************//
    const [isrefresh, setIsrefresh] = useState(false);
    const handleReset = () => {
        setIsrefresh(!isrefresh);
        setSearchValue('');
        setSearchKeyword('');
        setCheckedUsers([]);
        setDeleteRequest(!deleteRequest);
        setSearch(false);
    }
    useEffect(() => {

    }, [isrefresh])

    //******************************* 회원정보조회 초기화 버튼 끝 *********************************//



    // 서치박스 검색타입, 키워드 저장, 검색, 검색 조건, input에서 엔터누를시 검색 실행 ******************************************************************************//


    const [deleteRequest, setDeleteRequest] = useState(false);
    const del = () => {

        let url = "/notice/fnqList";

        apiCall(url, 'post', checkedUsers, null)
            .then((response) => {
                alert(response);
                setCheckedUsers([]);
                setSearchValue('');
                setSearchKeyword('');
                setNoticeList([]);
                setDeleteRequest(!deleteRequest);
            }).catch((error) => {
                alert("게시글 삭제에 실패하였습니다. 관리자에게 문의해주세요");
                console.log("NoticeList delete error occured = " + error);
            })
    }


    // List 불러오기 ******************************************************************************//
    const [noticeList, setNoticeList] = useState([]);
    const [rememberList, setRememberList] = useState([]);
    useEffect(() => {
        let url = "/notice/fnqList";

        let token = JSON.parse(sessionStorage.getItem("userData")).token;

        apiCall(url, 'get', null, token)
            .then((response) => {
                setNoticeList(response);
                setRememberList(response);
            }).catch((error) => {
                console.log("noticeList error occred = " + error);
            })
    }, [deleteRequest])
    // List 불러오기 ******************************************************************************//








    // checkbox 클릭된 유저 저장 ******************************************************************************//
    const [checkedUsers, setCheckedUsers] = useState([]);
    const userDelete = (notnum, checked) => {
        if (checked) {
            setCheckedUsers([...checkedUsers, notnum]);
        } else {
            setCheckedUsers(checkedUsers.filter(NTnum => NTnum !== notnum));
        }
    };
    // checkbox 클릭된 유저 저장 ******************************************************************************//



    const navigate = useNavigate();

    //******************************* 등록 버튼 페이지 전환 *********************************//
    const enterInsertPage = () => {
        navigate('/XFaqWritePage');
    }
    //******************************* 등록 버튼 페이지 전환 *********************************//

    return (
        <div className='XFaqControllContent_div'>
            <Submenu />
            <div className='XFaqControllContent_div_div'>
                <XBoardSearchBox enterInsertPage={enterInsertPage} searchValueHandler={searchValueHandler} searchKeywordHandler={searchKeywordHandler} searchHandler={searchHandler} KeyPressHandler={KeyPressHandler} />
                <XFaqControllContentList searchValue={searchValue} noticeList={noticeList} setNoticeList={setNoticeList}
                    setSearch={setSearch} search={search} userDelete={userDelete} checkedUsers={checkedUsers} />
                <XResetDeleteBtn />
            </div>
        </div>
    )
}
