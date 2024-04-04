
import './BoardSearchList2.css'

export default function BoardSearchList2({ notnum, nottitle, stfid, notdate }) {

    // qadate를 연월일시분 형식으로 표현
    const formattedDate = new Date(notdate).toLocaleString('ko-KR', {
        timeZone: 'UTC',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 오전/오후 표기를 제거하기 위해
    }).replace(/\./g, '');


    return (
        <div className='BoardSearchList_content2Box'>
            <div className='BoardSearchList_content2'>
                <span>{notnum}</span>
                <span>{nottitle}</span>
                <span>{stfid}</span>
                <span>{formattedDate}</span>
            </div>
        </div>
    )
}