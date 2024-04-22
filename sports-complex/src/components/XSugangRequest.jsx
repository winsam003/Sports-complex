import './XSugangRequest.css'
import Submenu from './Submenu';
import XclassSearchBox from './XclassSearchBox';
import XSugangRequestList from './XSugangRequestList';
import { useState, useEffect } from 'react';
import { apiCall } from '../apiService/apiService';

export default function XSugangRequest() {
    const [classApp, setClassApp] = useState([]);
    // 선택된 수강 신청 정보
    const [selectedClassApp, setSelectedClassApp] = useState([]);
    // 검색 이용을 위한 select과 input
    const [classesSearchBTSelect, setClassesSearchBTSelect] = useState('전체');
    const [classesSearchSTSelect, setClassesSearchSTSelect] = useState('전체');
    const [classesSearchDaySelect, setClassesSearchDaySelect] = useState('전체');
    const [classesSearchTargetSelect, setClassesSearcTargetSelect] = useState('전체');
    const [classesSearchInput, setClassesSearchInput] = useState('');
    // 검색 기능
    const [searchResult, setSearchResult] = useState([]);

    // Session storage에 있는 userData 가져오기
    const sessionUserData = sessionStorage.getItem('userData');
    const userData = sessionUserData ? JSON.parse(sessionUserData) : 'null';

    // 수강 신청 목록 불러오기
    useEffect(() => {
        const loadclassAppList = async () => {
            let url = '/classApp/classAppList';

            apiCall(url, 'get', null, null)
                .then((response) => {
                    setClassApp(response);
                    setSearchResult(response);
                }).catch((error) => {
                    console.error(" 수강 신청 목록 불러오기 실패 ", error);
                });
        }
        loadclassAppList();
    }, [selectedClassApp])

    console.log(selectedClassApp)

    // 수강 신청 선택
    const handleToggleCheckbox = (classappnum) => {
        setSelectedClassApp(prevState => {
            if (prevState.includes(classappnum)) {
                return prevState.filter(num => num !== classappnum);
            } else {
                return [...prevState, classappnum];
            }
        });
    };

    // 선택 초기화
    const handleResetSelection = () => {
        setSelectedClassApp([]);
    };

    // 선택 신청 삭제
    const handleDeleteSelectedClassApp = (() => {
        if (selectedClassApp.length === 0) {
            return;
        }

        let url = '/classApp/classAppDelete';

        apiCall(url + `?classappnum=${selectedClassApp.join('&classappnum=')}`, 'get', null, userData.token)
            .then(() => {
                setSelectedClassApp([]);
            }).catch((error) => {
                console.error(`수강 신청 삭제 실패 : `, error);
            });
    });

    // 검색
    const handleSearch = () => {
        const filteredResult = classApp.filter(classes => {
            const { classesSearchBTSelect, classesSearchSTSelect, classesSearchDaySelect, classesSearchTargetSelect } = classes;

            // 대분류, 세부종목, 요일, 대상이 모두 '전체'인 경우
            if (classesSearchBTSelect === '전체' && classesSearchSTSelect === '전체' &&
                classesSearchDaySelect === '전체' && classesSearchTargetSelect === '전체') {
                return true;
            }
            // 각 조건에 따른 필터링
            if (classesSearchBTSelect !== '전체' && classesSearchBTSelect !== classes.classcode.substring(2, 4)) {
                return false;
            }
            if (classesSearchSTSelect !== '전체' && classesSearchSTSelect !== classes.classcode.substring(4, 6)) {
                return false;
            }
            if (classesSearchDaySelect !== '전체' && !classes.cldate.includes(classesSearchDaySelect)) {
                return false;
            }
            if (classesSearchTargetSelect !== '전체' && classesSearchTargetSelect !== classes.clfor) {
                return false;
            }
            return true;
        });

        setSearchResult(filteredResult);
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
        <div className='XSugangRequest_div'>
            <Submenu />
            <div className='XSugangRequest_div_div'>
                <XclassSearchBox onSearch={handleSearch} onReset={reset}
                    classesSearchBTSelect={classesSearchBTSelect} setClassesSearchBTSelect={setClassesSearchBTSelect}
                    classesSearchSTSelect={classesSearchSTSelect} setClassesSearchSTSelect={setClassesSearchSTSelect}
                    classesSearchDaySelect={classesSearchDaySelect} setClassesSearchDaySelect={setClassesSearchDaySelect} classesSearchTargetSelect={classesSearchTargetSelect}
                    setClassesSearcTargetSelect={setClassesSearcTargetSelect}
                    classesSearchInput={classesSearchInput} setClassesSearchInput={setClassesSearchInput}
                />
                <div className='XSugangRequest_index_div'>
                    <div className='XSugangRequest_index'>
                        <p>선택</p>
                        <p>수강신청번호</p>
                        <p>아이디</p>
                        <p>신청일자</p>
                        <p>신청상태</p>
                        <p>강좌번호</p>
                        <p>금액</p>
                        <p>결제방법</p>
                    </div>
                    {searchResult && searchResult.filter((item) => (
                        (classesSearchInput.trim() === '' || item.clname.toLowerCase().includes(classesSearchInput.toLowerCase()))
                    )).map((item, index) => (
                        <XSugangRequestList key={index} {...item} onToggleCheckbox={handleToggleCheckbox} isChecked={selectedClassApp.includes(item.classappnum)} />
                    ))}
                </div>
                <div className='XResetDeleteBtn'>
                    <button onClick={handleResetSelection}>초기화</button>
                    <button onClick={handleDeleteSelectedClassApp}>삭제</button>
                </div>
            </div>
        </div>
    )
}