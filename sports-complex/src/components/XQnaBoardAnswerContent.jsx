import './XQnaBoardAnswerContent.css'
import Submenu from './Submenu'
import BoardDetail from './BoardDetail'


// 공지사항
export default function XQnaBoardAnswerContent() {
    return (
        <div>
            <Submenu />
            {/* <Submenu /> */}
            <BoardDetail />
            <div className='XQnaBoardAnswerContent_haveto'>
                <p>(<span className='star'>*</span>)는 반드시 작성해야 할 필수 항목입니다.</p>
            </div>
            <div className='XQnaBoardAnswerContent_form'>
                <form action="/" method='post'>
                    <table>
                        <tr>
                            <th>작성자 <span className='star'>*</span></th>
                            <td><input type="text" name='name' id='name' placeholder='본인인증에서 가져오기' readOnly /></td>
                        </tr>
                        <tr>
                            <th>제목 <span className='star'>*</span></th>
                            <td>
                                <input type="text" name='title' id='title' />
                            </td>
                        </tr>
                        <tr>
                            <th>내용 <span className='star'>*</span></th>
                            <td>
                                <input type="text" name='content' id='content' />
                            </td>
                        </tr>
                        <tr>
                            <th>첨부파일</th>
                            <td className='XQnaBoardAnswerContent_upload'>
                                <input className='test' type="file" name='uploadfilef' id='uploadfilef' />
                            </td>
                        </tr>
                        <tr>
                            <th>작성일</th>
                            <td>자바스크립트로 실시간 날짜, 시간 넣기. </td>
                        </tr>
                    </table>
                </form>
                <div className='XQnaBoardAnswerContent_btn_div'>
                    <button>등록</button>
                    <button>목록</button>
                </div>
            </div>
        </div>
    )
}