import './XBoardSearchResult.css'
import './XQnaSearchResult.css'

export default function XQnaSearchResult({ qanum, qaopen, qatype, qatitle, id, qadate, qaanswer, qacount, onToggleCheckbox, isChecked }) {
    const handleCheckboxChange = () => {
        onToggleCheckbox(qanum);
    }

    // qadate를 연월일시분 형식으로 표현
    const formattedDate = new Date(qadate).toLocaleString('ko-KR', {
        timeZone: 'UTC',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 오전/오후 표기를 제거하기 위해
    }).replace(/\./g, '');


    return (
        <div className='XQnaSearchResult_SearchResult' >
            {/* 조회결과 */}
            <p><input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} /></p>
            <p>{qanum}</p>
            <p>{qaopen}</p>
            <p className='XQnaSearchResult_SearchResult_title'>[{qatype}] {qatitle}</p>
            <p>{id.id}</p>
            <p>{formattedDate}</p>
            <p>{qaanswer == null ? "답변대기" : "답변완료"}</p>
            <p>{qacount}</p>
        </div>
    )
}