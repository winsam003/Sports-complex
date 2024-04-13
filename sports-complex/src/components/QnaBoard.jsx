import './Board.css'
import Submenu from './Submenu';
import XQnaSearchBox from './XQnaSearchBox';
import XQnaSearchResult from './XQnaSearchResult';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiCall } from '../apiService/apiService';

export default function QnaBoard() {
    const [qna, setqna] = useState([]);
    // 검색 이용을 위한 select과 input
    const [qnaSearchSelect, setQnaSearchSelect] = useState('전체');
    const [qnaSearchInput, setQnaSearchInput] = useState('');
    // 검색 기능
    const [searchResult, setSearchResult] = useState([]);

    // Session storage에 있는 userData 가져오기
    const sessionUserData = sessionStorage.getItem('userData');
    const userData = sessionUserData ? JSON.parse(sessionUserData) : 'null';
    const userID = userData.id;

    // 문의게시글 불러오기
    useEffect(() => {
        const loadQnaList = async () => {
            let url = '/qna/qnaList';

            apiCall(url, 'get', null, null)
                .then((response) => {
                    setqna(response);
                    // 처음 접근 시 모든 데이터를 출력
                    setSearchResult(response);
                }).catch((error) => {
                    console.error("QnA 목록 불러오기 실패", error);
                });
        }
        loadQnaList();
    }, []);

    // 검색 기능
    const handleSearch = () => {
        setSearchResult(qna.filter(qna => {
            switch (qnaSearchSelect) {
                case '전체':
                    return Object.values(qna).some(val =>
                        String(val).toLowerCase().includes(qnaSearchInput.toLowerCase())
                    );
                case '문의 종류':
                    return qna.qatype.toLowerCase().includes(qnaSearchInput.toLowerCase());
                case '제목':
                    return qna.qatitle.toLowerCase().includes(qnaSearchInput.toLowerCase());
                case '작성자':
                    return qna.member.id.toLowerCase().includes(qnaSearchInput.toLowerCase());
                case '내용':
                    return qna.qacontent.toLowerCase().includes(qnaSearchInput.toLowerCase());
                default:
                    return true; // 전체일 경우 모든 항목을 반환합니다.
            }
        }) || []);
    };

    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <div className='board_div_div'>
                    <XQnaSearchBox onSearch={handleSearch}
                        qnaSearchSelect={qnaSearchSelect}
                        setQnaSearchSelect={setQnaSearchSelect}
                        qnaSearchInput={qnaSearchInput}
                        setQnaSearchInput={setQnaSearchInput} />
                    <div className='XBoardControllContent_SearchResult_div'>
                        {/* 조회결과 index */}
                        <div className='QnaControllContent_index'>
                            <p>번호</p>
                            <p>공개여부</p>
                            <p>제목</p>
                            <p>작성자</p>
                            <p>작성일</p>
                            <p>답변여부</p>
                            <p>조회수</p>
                        </div>
                        <div>
                            {searchResult && searchResult.map((item, index) => (
                                <XQnaSearchResult key={index} {...item} />
                            ))}
                        </div>
                        {userID && (
                            <button className='board_writebutton'><Link to="/Inquiry">글쓰기</Link></button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}