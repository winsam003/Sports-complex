import './XBoardSearchResult.css'
import './XQnaSearchResult.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function XQnaSearchResult({ qanum, qaopen, qapassword, qatype, qatitle, id, qadate, qaanswer, qacount, onToggleCheckbox, isChecked }) {

    // 모달창 팝업 상태
    const [showModal, setShowModal] = useState(false);
    // 비밀번호 확인
    const [passwordInput, setPasswordInput] = useState('');
    const navigate = useNavigate();

    // axios 데이터 요청
    const fetchQnaData = async (qanum) => {
        try {
            const response = await axios.get(`/qna/qnadetail/${qanum}`); // 이 부분은 실제 API 엔드포인트에 따라 수정해야 합니다.
            return response.data;
        } catch (error) {
            console.error('Error fetching QnA data:', error);
            throw error;
        }
    };

    // 비밀글 여부 확인
    const handleQnaResultClick = async () => {
        if (qaopen == '1') {
            setShowModal(true);
        } else {
            try {
                const qnaData = await fetchQnaData(qanum);
                navigate(`/XQnaBoardAnswerPage/${qanum}`, { state: { qnaData } });
            } catch (error) {
                console.log('Error fetching QnA data : ', error);
            }
        }
    };

    // 모달창 상태관리
    const handleModalClose = () => {
        setShowModal(false);
        setPasswordInput('');
    };

    // 비밀번호 확인 후 일치하면 페이지 이동
    const handlePasswordSubmit = () => {
        if (passwordInput === qapassword) {
            navigate(`/XQnaBoardAnswerPage/${qanum}`);
            handleModalClose();
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    };

    // 체크박스
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
        <div className='XQnaSearchResult_SearchResult' onClick={handleQnaResultClick}>
            {/* 조회결과 */}
            <p><input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} /></p>
            <p>{qanum}</p>
            <p>{qaopen == '1' ? <img src="/img/Lock.png" className='lockimg' /> : <img src="/img/Unlock.png" className='unlockimg' />}</p>
            <p className='XQnaSearchResult_SearchResult_title'>[{qatype}] {qatitle}</p>
            <p>{id.id}</p>
            <p>{formattedDate}</p>
            <p>{qaanswer == null ? "답변대기" : "답변완료"}</p>
            <p>{qacount}</p>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <span className="close" onClick={(e) => { e.stopPropagation(); handleModalClose(); }}>&times;</span>
                        <h2 className='modalFont'>{qanum}. {qatitle}</h2>
                        <h2 className='modalFont'>비밀번호 입력</h2>
                        <input className='modal_input' type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
                        <button className='modal_button' onClick={handlePasswordSubmit}>확인</button>
                    </div>
                </div>
            )}
        </div>
    )
}