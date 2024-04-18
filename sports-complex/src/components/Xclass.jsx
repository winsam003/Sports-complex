import './Xclass.css';
import Submenu from './Submenu';
import SugangReciptInfo from './SugangReciptInfo';
import XclassSearchBox from './XclassSearchBox';
import XSugangRequestSearchResult from './XSugangRequestSearchResult';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { apiCall } from '../apiService/apiService';

export default function Xclass() {
    const [classes, setClasses] = useState([]);
    // 선택된 강의 정보
    const [selectedClasses, setSelectedClasses] = useState([]);
    // 검색 이용을 위한 select과 input
    const [classesSearchBTSelect, setClassesSearchBTSelect] = useState('전체');
    const [classesSearchSTSelect, setClassesSearchSTSelect] = useState('전체');
    const [classesSearchDaySelect, setClassesSearchDaySelect] = useState('전체');
    const [classesSearchTargetSelect, setClassesSearcTargetSelect] = useState('전체');
    const [classesSearchInput, setClassesSearchInput] = useState('');
    // 검색 기능
    const [searchResult, setSearchResult] = useState([]);
    // 강좌 신청 갯수
    const [classAppStatusCounts, setClassAppStatusCounts] = useState({});

    // 사용자 페이지 접근
    const location = useLocation();

    // Session storage에 있는 userData 가져오기
    const sessionUserData = sessionStorage.getItem('userData');
    const userData = sessionUserData ? JSON.parse(sessionUserData) : 'null';

    // 강의 목록 불러오기
    useEffect(() => {
        const loadClassesList = async () => {
            let url = '/classes/classesList';

            apiCall(url, 'get', null, null)
                .then((classes) => {
                    // console.log(` classes = ${classes}`);
                    setClasses(classes);
                    setSearchResult(classes);
                }).catch((error) => {
                    console.error(" 강좌 목록 불러오기 실패 ", error);
                });
        }
        loadClassesList();
    }, [selectedClasses])

    // 강좌 신청 갯수
    useEffect(() => {
        const updateClassAppStatusCounts = async () => {
            let url = '/classApp/classAppStatusCounts';
            apiCall(url, 'get', null, userData.token)
                .then((counts) => {
                    setClassAppStatusCounts(counts);
                }).catch((error) => {
                    console.error("클래스 앱 상태 갯수 불러오기 실패 ", error);
                });
        };
        updateClassAppStatusCounts();
    }, [classAppStatusCounts]);

    // XSugangRequestSearchResult 컴포넌트에서 사용할 각 상태의 갯수 추출
    // const completedCount = classAppStatusCounts[clnum]?.completed || 0;
    // const waitingCount = classAppStatusCounts[clnum]?.waiting || 0;

    // 강의 선택
    const handleToggleCheckbox = (clnum) => {
        setSelectedClasses(prevState => {
            if (prevState.includes(clnum)) {
                return prevState.filter(num => num !== clnum);
            } else {
                return [...prevState, clnum];
            }
        });
    };

    // 선택 초기화
    const handleResetSelection = () => {
        setSelectedClasses([]);
    };

    // 선택 강좌 삭제
    const handleDeleteSelectedClasses = (() => {
        if (selectedClasses.length === 0) {
            return;
        }

        let url = '/classes/classesDelete';

        apiCall(url + `?clnum=${selectedClasses.join('&clnum=')}`, 'get', null, userData.token)
            .then(() => {
                setSelectedClasses([]);
            }).catch((error) => {
                console.error(`문의게시판 삭제 실패 : `, error);
            });
    });

    // 검색
    const handleSearch = () => {
        setSearchResult(classes.filter(classes => {
            switch (classesSearchBTSelect) {
                case '전체':
                    return Object.values(classes).some(val =>
                        String(val).toLowerCase().includes(classesSearchInput.toLowerCase())
                    );
                case '구기':
                    return (classes.classcode.toLowerCase().substring(2, 4) === 'ba') && classes.clname.toLowerCase().includes(classesSearchInput.toLowerCase());
                case '수상':
                    return (classes.classcode.toLowerCase().substring(2, 4) === 'wa') && classes.clname.toLowerCase().includes(classesSearchInput.toLowerCase());
                case '댄스':
                    return (classes.classcode.toLowerCase().substring(2, 4) === 'dc') && classes.clname.toLowerCase().includes(classesSearchInput.toLowerCase());
                case '라켓':
                    return (classes.classcode.toLowerCase().substring(2, 4) === 'la') && classes.clname.toLowerCase().includes(classesSearchInput.toLowerCase());
                case '웨이트':
                    return (classes.classcode.toLowerCase().substring(2, 4) === 'we') && classes.clname.toLowerCase().includes(classesSearchInput.toLowerCase());
                default:
                    return true; // 전체일 경우 모든 항목을 반환합니다.
            }
        }) || []);
    };

    // 검색 초기화
    const reset = () => {
        setClassesSearchBTSelect('전체');
        setClassesSearchSTSelect('전체');
        setClassesSearchDaySelect('전체');
        setClassesSearcTargetSelect('전체');
        setClassesSearchInput('');
    }
    return (
        <div className='Xclass_Box'>
            <Submenu />
            <div className='Xclass_Box_div'>
                {location.pathname == '/Sugang' ?
                    <SugangReciptInfo /> : ''
                }
                <XclassSearchBox onSearch={handleSearch} onReset={reset}
                    classesSearchBTSelect={classesSearchBTSelect} setClassesSearchBTSelect={setClassesSearchBTSelect}
                    classesSearchSTSelect={classesSearchSTSelect} setClassesSearchSTSelect={setClassesSearchSTSelect}
                    classesSearchDaySelect={classesSearchDaySelect} setClassesSearchDaySelect={setClassesSearchDaySelect} classesSearchTargetSelect={classesSearchTargetSelect}
                    setClassesSearcTargetSelect={setClassesSearcTargetSelect}
                    classesSearchInput={classesSearchInput} setClassesSearchInput={setClassesSearchInput} />
                <div className='XclassListDetail_Container'>
                    <div className={location.pathname === '/Sugang' ? 'XclassListDetail_category_sugangStyle' : 'XclassListDetail_category'}>
                        {location.pathname == '/Sugang' ?
                            // 사용자
                            <>
                                <p>번호</p>
                                <p>강좌명</p>
                                <p>강의 날짜</p>
                                <p>시간</p>
                                <p>대상</p>
                                <p>현재원</p>
                                <p>대기원</p>
                                <p>금액</p>
                                <p>현황</p>
                            </>
                            :
                            // 관리자
                            <>
                                <p>선택</p>
                                <p>번호</p>
                                <p>강좌명</p>
                                <p>강의 날짜</p>
                                <p>시간</p>
                                <p>대상</p>
                                <p>현재원</p>
                                <p>대기원</p>
                                <p>금액</p>
                                <p>현황</p>
                            </>
                        }
                    </div>
                    {searchResult && searchResult.map((item, index) => (
                        <XSugangRequestSearchResult key={index} {...item} onToggleCheckbox={handleToggleCheckbox} isChecked={selectedClasses.includes(item.clnum)} />
                    ))}
                    <div className='XResetDeleteBtn'>
                        <button onClick={handleResetSelection}>초기화</button>
                        <button onClick={handleDeleteSelectedClasses}>삭제</button>
                    </div>
                </div>
            </div>
        </div>
    )
}