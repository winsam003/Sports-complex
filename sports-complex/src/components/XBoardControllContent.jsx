import './XBoardControllContent.css'

export default function XBoardControllContent() {
    return (
        <div>
            <div className='XBoardControllContent_SearchBox_div'>
                <select>
                    <option value="">공지사항 종류</option>
                    <option value="">제목</option>
                    <option value="">작성자</option>
                    <option value="">내용</option>
                </select>
                <input type='text'></input>
                <button>검색</button>
            </div>
        </div>
    )
}