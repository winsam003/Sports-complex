import './BoardSearchList.css'

export default function BoardSearchList() {
    return (
        <div>
            <div className='BoardSearchList'>
                <div className='BoardSearchList_div'>
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>등록일시</span>
                </div>
                <div className='BoardSearchList_content'>
                    <span>00000001</span>
                    <span>공지사항 제목 확인용 글입니다</span>
                    <span>김수한무두루미</span>
                    <span>2024.12.31</span>
                </div>
            </div>
        </div>
    )
}