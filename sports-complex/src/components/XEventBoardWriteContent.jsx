import './XEventBoardWriteContent.css'
import Submenu from './Submenu';

// 공지사항
export default function XEventBoardWriteContent() {
    return (
        <div className='XEventBoardWriteContent_div'>
            <Submenu />
            <div className='XEventBoardWriteContent_div_div'>
                <div className='XEventBoardContent_haveto'>
                    <p>(<span className='star'>*</span>)는 반드시 작성해야 할 필수 항목입니다.</p>
                </div>
                <div className='XEventBoardContent_form'>
                    <form action="/" method='post'>
                        <table>
                            <tbody>

                                <tr>
                                    <th>작성자 <span className='star'>*</span></th>
                                    <td><input type="text" name='name' id='name' placeholder='본인인증에서 가져오기' readOnly /></td>
                                </tr>
                                <tr>
                                    <th>이벤트 종류</th>
                                    <td>
                                        <input type="radio" id='eventboard_sport' name='eventboard_Type' value={'eventboard_sport'} />
                                        <label htmlFor="eventboard_sport">스포츠 행사</label>
                                        <input type="radio" id='eventboard_general' name='eventboard_Type' value={'eventboard_general'} />
                                        <label htmlFor="eventboard_general">일반 행사</label>
                                        <input type="radio" id='eventboard_competition' name='eventboard_Type' value={'eventboard_competition'} />
                                        <label htmlFor="eventboard_competition">대회</label>
                                    </td>
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
                                    <td className='XEventBoardContent_upload'>
                                        <input className='test' type="file" name='uploadfilef' id='uploadfilef' />
                                    </td>
                                </tr>
                                <tr>
                                    <th>작성일</th>
                                    <td>자바스크립트로 실시간 날짜, 시간 넣기. </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div className='XEventBoardContent_btn_div'>
                        <button>등록</button>
                        <button>목록</button>
                    </div>
                </div>
            </div>
        </div>
    )
}