import './XStaffList.css';
import XStaffdetail from './XStaffdetail';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function XStaffList() {
    console.log('XStaffList rendered');

    // 전직원 정보
    const [staff, setstaff] = useState([]);
    // 선택된 직원 정보
    const [selectedStaffIds, setselectedStaffIds] = useState([]);
    // 부서, 직급 select 변화 감지
    const [department, setDepartment] = useState('전체');
    const [position, setPosition] = useState('전체');
    // 직원 검색창
    const [searchInput, setSearchInput] = useState('');

    // 전직원 불러오기, 최초에만
    const loadStaffList = (() => {
        axios.get('/staff/staffList')
            .then((response) => {
                setstaff(response.data);
            }).catch((error) => {
                console.error(" 스태프 목록 불러오기 실패 ", error);
            });
    });

    useEffect(() => {
        loadStaffList();
    }, []);

    // 전직원 불러오기

    // 직원 검색창 초기화하기
    const handleResetSearch = () => {
        console.log("Resetting search...");
        setDepartment('전체');
        setPosition('전체');
        setSearchInput('');
    };
    // console.log(`staff =${staff}`);

    // 직원 선택하기
    const handleToggleCheckbox = (staffId) => {
        setselectedStaffIds(prevState => {
            if (prevState.includes(staffId)) {
                return prevState.filter(id => id !== staffId);
            } else {
                return [...prevState, staffId];
            }
        });
    };
    // console.log(` 선택된 staffid = ${selectedStaffIds}`);

    // 선택된 직원정보 axios 요청 보내고 삭제하기
    const handleDeleteSelectedStaff = (() => {
        if (selectedStaffIds.length === 0) {
            // console.log(" 선택된 직원이 없습니다 ");
            return;
        }
        // console.log("삭제할 직원 ID 목록:", selectedStaffIds);

        axios.get('/staff/staffDelete', {
            params: {
                // 값이 전달됐을 때 []표시를 제거하기위해 join으로 , 구분자 이용
                stfid: selectedStaffIds.join(','),
            }
        }).then(() => {
            // console.log("직원 삭제 성공", response.data);
            // 삭제 후 전직원 목록 최신화
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
                <span>부서</span>
                <select id="departmentSelect" value={department} onChange={(e) => setDepartment(e.target.value)}>
                    <option value="전체">전체</option>
                    <option value="강좌">강좌</option>
                    <option value="시설">시설</option>
                    <option value="일반">일반</option>
                </select>
                <span>직급</span>
                <select id="positionSelect" value={position} onChange={(e) => setPosition(e.target.value)}>
                    <option value="전체">전체</option>
                    <option value="팀장">팀장</option>
                    <option value="사원">사원</option>
                </select>
                <span>이름</span>
                <input type='search' className='XStaffList_SearchBox_input' placeholder='직원 검색'
                    value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            </div>
            <div className='XBtnResetSearch'>
                <button onClick={handleResetSearch}>초기화</button>
            </div>
            <div className='XStaffList_SearchResult'>
                <div className='XStaffList_Searchstaff'>
                    <span>체크</span>
                    <span>ID</span>
                    <span>비밀번호</span>
                    <span>소속</span>
                    <span>직위</span>
                    <span>전화번호</span>
                    <span>이름</span>
                    <span>직원코드</span>
                </div>
                <div>
                    {staff.filter(e => (
                        // 부서와 직급 모두 고려하여 필터링
                        (department === '전체' || e.stfdmp === department) &&
                        (position === '전체' || e.stflevel === position) &&
                        // 검색어를 이용하여 직원의 이름에 대해 필터링
                        (searchInput.trim() === '' || e.stfname.toLowerCase().includes(searchInput.toLowerCase()))
                    )).map((item, index) => (
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