import './BoardSearchList.css'
import BoardSearchList2 from './BoardSearchlist2';

export default function BoardSearchList({ noticeList }) {

    return (
        <div>
            <div className='BoardSearchList'>
                <div className='BoardSearchList_div'>
                    <p>번호</p>
                    <p>제목</p>
                    <p>공지대상</p>
                    <p>작성일</p>
                    <p>작성자</p>
                    <p>조회수</p>
                </div>

                {noticeList.map((it, index) => (
                    <BoardSearchList2 key={index} {...it} />))}

            </div>
        </div>
    )
}