import './XStaffList.css';
import XStaffdetail from './XStaffdetail';
import XBtnResetSearch from './XBtnResetSearch';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function XStaffList() {
    // 전직원 정보 상태변화 감지
    const [staff, setstaff] = useState([]);
    // 선택된 직원 정보 상태변화 감지
    const [selectedStaffIds, setselectedStaffIds] = useState([]);
    // 직원 검색창 상태변화 감지
    const [searchInput, setSearchInput] = useState('');

    // 전직원 불러오기, 최초에만
    useEffect(() => {
        loadStaffList();
    }, []);

    // 전직원 불러오기
    const loadStaffList = (() => {
        axios.get('/staff/staffList')
            .then((response) => {
                // console.log(`staff=${response.data}`);
                setstaff(response.data);
            }).catch((error) => {
                console.error(" 스태프 목록 불러오기 실패 ", error);
            });
    });

    // 직원 검색창 초기화하기
    const handleResetSearchInput = () => {
        setSearchInput('');
    };

    // console.log(`staff =${staff}`);

    // 직원 선택하기
    const handleToggleCheckbox = ((staffId) => {
        setselectedStaffIds((prevState) => {
            if (prevState.includes(staffId)) {
                return prevState.filter(id => id !== staffId);
            } else {
                return [...prevState, staffId];
            }
        })
    })

    // console.log(` 선택된 staffid = ${selectedStaffIds}`);

    // 선택된 직원정보 axios 요청 보내고 삭제하기
    const handleDeleteSelectedStaff = (() => {
        if (selectedStaffIds.length === 0) {
            console.log(" 선택된 직원이 없습니다 ");
            return;
        }

        console.log("삭제할 직원 ID 목록:", selectedStaffIds);

        axios.get('/staff/staffDelete', {
            params: {
                // 값이 전달됐을 때 []표시를 제거하기위해 join으로 , 구분자 이용
                stfid: selectedStaffIds.join(','),
            }
        }).then((response) => {
            console.log("직원 삭제 성공", response.data);
            // 삭제 후 전직원 목록 불러오기
            loadStaffList();
            // 삭제 후 선택된 목록 배열 초기화
            setselectedStaffIds([]);
        }).catch((error) => {
            console.error(`직원 삭제 실패 `, error);
        });
    });

    // 선택된 직원 초기화
    const handleResetSelection = () => {
        setselectedStaffIds([]);
    };

    return (
        <div className='XStaffList_Box'>
            <div className='XStaffList_searchTitle'>직원 검색</div>
            <div className='XStaffList_SearchBox'>
                <input type='text' name='XStaffListSearch' id='XStaffListSearch' placeholder='직원 검색' />
            </div>
            <div className='XBtnResetSearch'>
                <button onClick={handleResetSearchInput}>초기화</button>
                <button>조회</button>
            </div>
            <div>
                <div className='XStaffList_Searchstaff'>
                    <span>체크</span>
                    <span>ID</span>
                    <span>비밀번호</span>
                    <span>소속</span>
                    <span>직위</span>
                    <span>전화번호</span>
                    <span>이름</span>
                </div>
                <div>
                    {staff.map((item, index) => (
                        <XStaffdetail key={index} {...item} onToggleCheckbox={handleToggleCheckbox}
                            isChecked={selectedStaffIds.includes(item.stfid)} />
                    ))}
                </div>

                <div className='XResetDeleteBtn'>
                    <button onClick={handleResetSelection}>초기화</button>
                    <button onClick={handleDeleteSelectedStaff}>삭제</button>
                </div>
            </div>
        </div>
    )
}