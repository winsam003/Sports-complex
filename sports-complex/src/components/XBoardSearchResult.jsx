import './XBoardSearchResult.css'

export default function XBoardSearchResult() {
    return (
        <div className='XBoardControllContent_SearchResult_div'>
            {/* 조회결과 index */}
            <div className='XBoardControllContent_SearchResult_index'>
                <p>선택</p>
                <p>번호</p>
                <p>공개여부</p>
                <p>제목</p>
                <p>작성일</p>
                <p>답변여부</p>
                <p>조회수</p>
            </div>
            {/* 조회결과 */}
            <div className='XBoardControllContent_SearchResult'>
                <p><input type='checkbox'></input></p>
                <p>999999</p>
                <p>자물쇠</p>
                <p>공지사항 관리 페이지에서 확인하는 공지글입니다</p>
                <p>2024.03.21 15:50:25</p>
                <p>답변 대기</p>
                <p>9999+</p>
            </div>
        </div>
    )
}