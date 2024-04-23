import './HistoryClassContent.css'
import { apiCall } from '../apiService/apiService';

export default function HistoryClassContent({ classappnum, classappdate, classappstate, classes, payment, handlePayment, handleCancel }) {
    // date를 연월일시분 형식으로 표현
    const appdate = new Date(classappdate).toLocaleString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour12: false
    }).replace(/\./g, '.').slice(0, -1);

    const clstart = new Date(classes.clstart).toLocaleString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour12: false
    }).replace(/\./g, '.').slice(0, -1);

    const clend = new Date(classes.clend).toLocaleString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour12: false
    }).replace(/\./g, '.').slice(0, -1);

    // 가격 설정
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(classes.clprice);

    return (
        <div className='HistoryClassContent_div'>
            <p>{classappnum}</p>
            <p>{appdate}</p>
            <p>{classes.clnum}</p>
            <p>{classes.clname}</p>
            <p>{clstart}<br />- {clend}</p>
            <p>{formattedPrice}</p>
            <p>{classappstate}</p>
            <p>{payment}</p>
            {classappstate === '신청 완료' ?
                <div className='HistoryClassContent'>
                    <button onClick={() => handlePayment(classappnum)}>결제</button>
                    <button onClick={() => handleCancel(classappnum)}>취소</button>
                </div>
                :
                (classappstate === '신청 완료' || classappstate === '대기' || classappstate === '결제완료') ?
                    <div className='HistoryClassContent'>
                        <button onClick={() => handleCancel(classappnum)}>취소</button>
                    </div>
                    : null}
        </div>
    )
}