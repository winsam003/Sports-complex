import './XStaffList.css';
import XStaffdetail from './XStaffdetail';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function XStaffList() {
    // 전직원 정보 상태변화 감지
    const [staff, setstaff] = useState([]);
    // 선택된 직원 정보 상태변화 감지
    const [selectedStaffIds, setselectedStaffIds] = useState([]);
    // 직원 검색창 상태변화 감지
    const [searchInput, setSearchInput] = useState('');
    // 필터링된 직원 목록 상태변화 감지
    const [filteredStaff, setFilteredStaff] = useState([]);

    // 전직원 불러오기, 최초에만
    useEffect(() => {
        loadStaffList();
    }, []);

    // 전직원 불러오기
    const loadStaffList = (() => {
        axios.get('/staff/staffList')
            .then((response) => {
                setstaff(response.data);
                // 직원 목록을 받아온 후에 필터링된 목록을 설정
                setFilteredStaff(response.data);
            }).catch((error) => {
                console.error(" 스태프 목록 불러오기 실패 ", error);
            });
    });

    // 직원 검색창 초기화하기
    const handleResetSearch = () => {
        // 부서 select 값 초기화
        document.getElementById('departmentSelect').selectedIndex = 0;
        // 직급 select 값 초기화
        document.getElementById('positionSelect').selectedIndex = 0;
        // 검색 값 초기화
        setSearchInput('');
    };

    // console.log(`staff =${staff}`);

    // 직원 필터링하기
    const handleSearchStaff = () => {
        const department = document.getElementById('departmentSelect').value;
        const position = document.getElementById('positionSelect').value;
        const nameSearchInput = document.getElementById('XStaffListSearch').value;

        // console.log("부서:", department);
        // console.log("직급:", position);

        // 전체 선택 옵션과 검색어가 빈 문자열인 경우 모든 직원 반환
        if (department === '전체' && position === '전체' && searchInput === '') {
            setFilteredStaff(staff);
            return;
        }

        const filtered = staff.filter(item => {
            return (
                item.name !== undefined &&
                ((department === '전체' && position === '팀장' && item.position === '팀장') ||
                    (department === '시설' && position === '전체' && item.department === '시설')) ||
                (department === '전체' || item.department === department) &&
                (position === '전체' || item.position === position) &&
                (nameSearchInput === '' || item.name.includes(nameSearchInput))
            );
        });
        setFilteredStaff(filtered);
    };

    // 조회
    const handleSearchButtonClick = () => {
        console.log("선택된 부서:", document.getElementById('departmentSelect').value);
        console.log("선택된 직급:", document.getElementById('positionSelect').value);
        console.log("선택된 이름:", document.getElementById('XStaffListSearch').value);

        handleSearchStaff();
    };

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
                <span>부서</span>
                <select id="departmentSelect">
                    <option value="전체">전체</option>
                    <option value="강좌">강좌</option>
                    <option value="시설">시설</option>
                    <option value="일반">일반</option>
                </select>
                <span>직급</span>
                <select id="positionSelect">
                    <option value="전체">전체</option>
                    <option value="팀장">팀장</option>
                    <option value="사원">사원</option>
                </select>
                <span>이름</span>
                <input type='text' className='XStaffList_SearchBox_input' name='XStaffListSearch' id='XStaffListSearch' placeholder='직원 검색' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            </div>
            <div className='XBtnResetSearch'>
                <button onClick={handleResetSearch}>초기화</button>
                <button onClick={handleSearchButtonClick}>조회</button>
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
                </div>
                <div>
                    {filteredStaff.map((item, index) => (
                        <XStaffdetail key={index} {...item} onToggleCheckbox={handleToggleCheckbox}
                            isChecked={selectedStaffIds.includes(item.stfid)}
                            filteredStaff={filteredStaff} />
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