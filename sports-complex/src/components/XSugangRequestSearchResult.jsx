import './XSugangRequestSearchResult.css'
import { useLocation } from 'react-router-dom';

export default function XSugangRequestSearchResult(clnum, classcode, clname, cltime, clendtime, clstart, clend, clfor, clcount, clwating, clprice, cltype, onToggleCheckbox, isChecked) {
    // 사용자 페이지 접근
    const location = useLocation();

    // 체크박스
    const handleCheckboxChange = (e) => {
        onToggleCheckbox(clnum);
    }

    // date를 연월일시분 형식으로 표현
    const clstartdate = new Date(clstartdate).toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const clenddate = new Date(clenddate).toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return (
        <div>
            <div className='XSugangRequestSearchResult'>
                <div className={location.pathname === '/sugang' ? 'XSugangRequestSearchResult_content_sugang' : 'XSugangRequestSearchResult_content'}>
                    {
                        location.pathname == '/Sugang' ?
                            // 사용자
                            <>
                                <p>번호</p>
                                <p>강좌명</p>
                                <p>강의 날짜</p>
                                <p>현재원</p>
                                <p>대기원</p>
                                <p>정원</p>
                                <p>금액</p>
                                <p>신청 날짜</p>
                                <p>현황</p>
                            </>
                            :
                            // 관리자
                            <>
                                <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange}></input>
                                <p>선택</p>
                                <p>번호</p>
                                <p>강좌명</p>
                                <p>강의 날짜</p>
                                <p>현재원</p>
                                <p>대기원</p>
                                <p>정원</p>
                                <p>금액</p>
                                <p>신청 날짜</p>
                                <p>현황</p>
                            </>
                    }
                </div>
            </div>
        </div >
    )
}