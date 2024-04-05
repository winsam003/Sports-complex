import './XQnaBoardAnswerContent.css'
import Submenu from './Submenu'
import { useNavigate } from 'react-router-dom';
import { apiCall } from '../apiService/apiService';

// 문의게시판 사용자 상세페이지
export default function QnaDetail({ qnaData }) {
    console.log(qnaData);

    // Session storage에 있는 userData 가져오기
    const sessionUserData = sessionStorage.getItem('userData');
    const userData = sessionUserData ? JSON.parse(sessionUserData) : 'null';
    const userID = userData.userID;

    // 사용자 작성 시간과 답변 작성 시간
    const qadate = formatDateTime(qnaData.qadate);
    const qareplytime = formatDateTime(qnaData.qareplytime);

    // 게시글 삭제 후 목록으로 이동
    const navigate = useNavigate();

    // 날짜 및 시간을 원하는 형식으로 변환하는 함수
    function formatDateTime(dateTimeString) {
        const date = new Date(dateTimeString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    // 게시물 삭제 요청
    const handleDelete = (() => {
        let url = '/qna/qnaDelete';
        console.log(apiCall(url + `?qanum=${qnaData.qanum}`, 'get', null, null));
        apiCall(url + `?qanum=${qnaData.qanum}`, 'get', null, null)
            .then(() => {
                navigate('/Qna');
            }).catch((error) => {
                console.log('Qna Detail Delete Error', error);
            });
    });

    // 목록으로 이동
    const goToQnaPage = () => {
        navigate('/Qna');
    };

    return (
        <div className='XQnaBoardAnswerContent_div'>
            <Submenu />
            <div className='XQnaBoardAnswerContent_div_div'>
                <div>
                    <p className='XQnaBoardAnswerContent_title'>[{qnaData.qatype}] {qnaData.qatitle}</p>
                    <div className='XQnaBoardAnswerContent_title_content'>
                        <p>작성자</p>
                        <p>{qnaData.member.id}</p>
                        <p>등록일시</p>
                        <p>{qadate}</p>
                        <p>조회수</p>
                        <p>{qnaData.qacount}</p>
                        <p>첨부파일</p>
                        <p>{qnaData.qafile}</p>
                    </div>
                    <p className='XQnaBoardAnswerContent_content'>
                        {qnaData.qacontent}
                    </p>
                </div>
                <p className='XQnaBoardAnswerContent_answer'>답변</p>
                <div className='XQnaBoardAnswerContent_form'>
                    <table>
                        <tbody>
                            <tr>
                                <th>작성자</th>
                                <td>{qnaData.stfid ? qnaData.stfid : ''}</td>
                            </tr>
                            <tr>
                                <th>내용</th>
                                <textarea
                                    name='qareply'
                                    id='qareply'
                                    value={qnaData.qareply}
                                    rows="100"
                                    style={{ resize: 'none', width: '750px', lineHeight: '1.5' }}
                                    readOnly
                                />
                            </tr>
                            <tr>
                                <th>작성일</th>
                                <td>{qnaData.qareplytime ? qareplytime : ''}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='XQnaBoardAnswerContent_btn_div'>
                        {/* 작성자와 로그인된 아이디가 같으면 삭제버튼 나타남 */}
                        {userID == qnaData.member.id && (
                            <button onClick={handleDelete}>삭제</button>
                        )}
                        <button onClick={goToQnaPage}>목록</button>
                    </div>
                </div>
            </div>
        </div>
    )
}