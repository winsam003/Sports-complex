import './XSugangRequestSearchResult.css'
import { useLocation } from 'react-router-dom';

export default function XSugangRequestSearchResult({ clnum, classcode, clname, clrequest, clrequestend, clstart, clend, cltime, clfor, clcount, clwating, clprice, cltype, onToggleCheckbox, isChecked }) {
    // 사용자 페이지 접근
    const location = useLocation();

    // 체크박스
    const handleCheckboxChange = (e) => {
        onToggleCheckbox(clnum);
    }

    // date를 연월일시분 형식으로 표현
    const clstartdate = new Date(clstart).toLocaleString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour12: false
    }).replace(/\./g, '.').slice(0, -1);

    const clenddate = new Date(clend).toLocaleString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour12: false
    }).replace(/\./g, '.').slice(0, -1);

    // 대상자 유형을 표시
    const getTargetType = (clfor) => {
        switch (clfor) {
            case 'KI':
                return '아동';
            case 'HT':
                return '청소년';
            case 'AD':
                return '성인';
            case 'OL':
                return '노인';
            default:
                return '';
        }
    };

    // 가격 설정
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(clprice);

    // // 클래스 상태를 나타내는 cltype 설정
    // if (new Date() >= new Date(clrequest) && new Date() <= new Date(clrequestend)) {
    //     if (clcount > 50) {
    //         cltype = '수강 신청';
    //     } else if (clwating > 50) {
    //         cltype = '대기 신청';
    //     } else {
    //         cltype = '대기 마감';
    //     }
    // } else {
    //     cltype = '접수 마감';
    // }

    // 클래스 현재원과 대기원을 비교하여 표시
    const countRatio = `50/${clcount}`;
    const watingRatio = `50/${clwating}`;

    console.log(cltype);

    return (
        <div>
            <div className='XSugangRequestSearchResult'>
                <div className={location.pathname === '/Sugang' ? 'XSugangRequestSearchResult_content_sugang' : 'XSugangRequestSearchResult_content'}>
                    {
                        location.pathname == '/Sugang' ?
                            // 사용자
                            <>
                                <p>{clnum}</p>
                                <p>{clname}</p>
                                <p>{clstartdate}<br />- {clenddate}</p>
                                <p>{cltime}</p>
                                <p>{getTargetType(clfor)}</p>
                                <p>{countRatio}</p>
                                <p>{watingRatio}</p>
                                <p>{formattedPrice}</p>
                                <p>{cltype}</p>
                            </>
                            :
                            // 관리자
                            <>
                                <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange}></input>
                                <p>{clnum}</p>
                                <p>{clname}</p>
                                <p>{clstartdate}<br />- {clenddate}</p>
                                <p>{cltime}</p>
                                <p>{getTargetType(clfor)}</p>
                                <p>{countRatio}</p>
                                <p>{watingRatio}</p>
                                <p>{formattedPrice}</p>
                                <p>{cltype}</p>
                            </>
                    }
                </div>
            </div>
        </div >
    )
}