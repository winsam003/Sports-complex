import './XParkingControll.css'
import Submenu from './Submenu'
import XBtnResetDelete from './XBtnResetDelete'
import { useEffect, useState } from 'react'
import { apiCall } from '../apiService/apiService'
import Pagination from 'react-js-pagination'

export default function XParkingControll({ token }) {

    const [parkappList, setParkappList] = useState([]);

    useEffect(() => {
        let token = JSON.parse(sessionStorage.getItem("userData")).token;
        let url = "/parkapp/parkapplist";

        apiCall(url, 'get', null, token)
            .then((list) => {
                setParkappList(list);
            }).catch((error) => {
                console.log("Error: ", error);
            })
        // console.log("parkappList : ", parkappList);
    })

    // 현재 페이지
    const [currentPage, setCurrentPage] = useState(1);
    // 페이지당 아이템 수
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // 페이지 변경 시 동작 설정
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 현재 페이지에 보여줄 아이템의 인덱스 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    return (
        <div className='XParkingControll_div'>
            <Submenu />
            <div className='XParkingControll_div_div'>
                <div className='XParkingControllSearchBox_div'>
                    <select>
                        <option value="userName">이름</option>
                        <option value="carNum">차량번호</option>
                    </select>
                    <input type='text'></input>
                    <button>검색</button>
                </div>
                <div >
                    <p className='XParkingControll_searchblock'>
                        <span className='XParkingControll_searchTitle'>주차장</span>
                        <span className='XParkingControll_inputbox'>
                            <input type="radio" id='1Floor' name="floor" /> <span><label htmlFor='1Floor'>지하 1층</label></span>
                            <input type="radio" id='2Floor' name="floor" /> <span><label htmlFor='2Floor'>지하 2층</label></span>
                            <input type="radio" id='3Floor' name="floor" /> <span><label htmlFor='3Floor'>지하 3층</label></span>
                        </span>
                    </p>
                    <p className='XParkingControll_searchblock'>
                        <span className='XParkingControll_searchTitle'>상태</span>
                        <span className='XParkingControll_inputbox'>
                            <input type="radio" id='Next' name="usePark" /> <span><label htmlFor='Next'>이용 예정</label></span>
                            <input type="radio" id='ing' name="usePark" /> <span><label htmlFor='ing'>이용중</label></span>
                            <input type="radio" id='end' name="usePark" /> <span><label htmlFor='end'>이용 종료</label></span>
                        </span>
                    </p>
                    <p className='XParkingControll_searchblock'>
                        <span className='XParkingControll_searchTitle'>날짜</span>
                        <span className='XParkingControll_inputbox'>
                            <input type="month" />
                        </span>
                    </p>
                </div>
                <div className='XParkingControllSearchResult_div'>
                    <div className='XParkingControllSearchResult_index'>
                        <span>선택</span>
                        <span>주차신청번호</span>
                        <span>주차 신청 날</span>
                        <span>주차장 이용 달</span>
                        <span>주차장</span>
                        <span>이름</span>
                        <span>연락처</span>
                        <span>차량번호</span>
                        <span>상태</span>
                    </div>
                    {parkappList.slice(indexOfFirstItem, indexOfLastItem)
                        .map(({ parkappnum, parkappdate, parkusedate, carnum, parkstate, id, spacecode }, index) => (
                            <div className='XParkingControllSearchResult_content' key={index}>
                                <div>
                                    <input type='checkbox'></input>
                                </div>
                                <span>{parkappnum}</span>
                                <span>{parkappdate}</span>
                                <span>{parkusedate}</span>
                                <span>{spacecode.spacename.substring(4)}</span>
                                <span>{id.name}</span>
                                <span>{id.phonenum.substring(0, 3) + "-" + id.phonenum.substring(3, 7) + "-" + id.phonenum.substring(7)}</span>
                                <span>{carnum}</span>
                                <span>{parkstate}</span>
                            </div>

                        ))}
                    <div className='pagenationBox'>
                        <Pagination
                            // 현제 보고있는 페이지 
                            activePage={currentPage}
                            // 한페이지에 출력할 아이템 수
                            itemsCountPerPage={5}
                            // 총 아이템수
                            totalItemsCount={parkappList.length}
                            // 표시할 페이지수
                            pageRangeDisplayed={5}
                            // 페이지 변경 시 동작 설정
                            onChange={handlePageChange}>
                        </Pagination>
                    </div>
                </div>
                <XBtnResetDelete />
            </div>
        </div>
    )
}