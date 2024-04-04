import './XBoardSearchBox.css'

export default function XBoardSearchBox({ searchValueHandler, searchHandler }) {
    return (
        <div>
            {/* 검색 */}
            <div className='XBoardSearchBox_div'>
                <select onChange={searchValueHandler}>
                    <option value="">전체</option>
                    <option value="공지대상">공지대상</option>
                    <option value="제목">제목</option>
                    <option value="작성자">작성자</option>
                    <option value="내용">내용</option>
                </select>
                <input type='text'></input>
                <button onClick={searchHandler}>검색</button>
            </div>

        </div>
    )
}