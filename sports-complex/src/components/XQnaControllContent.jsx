import './XQnaControllContent.css'
import XQnaSearchBox from './XQnaSearchBox';
import XQnaSearchResult from './XQnaSearchResult'
import Submenu from './Submenu';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function XQnaControllContent() {
    const [qna, setqna] = useState([]);
    // 선택된 문의게시글 정보
    const [selectedQnaBoard, setSelectedQnaBoard] = useState([]);
    // 검색 이용을 위한 select과 input
    const [qnatype, setQnatype] = useState('전체');
    const [searchInput, setSearchInput] = useState('');

    // 문의게시글 불러오기
    const loadQnaList = (() => {
        axios.get('/qna/qnaList')
            .then((response) => {
                setqna(response.data);
            }).catch((error) => {
                console.error("QnA 목록 불러오기 실패", error);
            });
    });

    // 최초 문의게시글 불러오기
    useEffect(() => {
        loadQnaList();
    }, []);

    // 문의게시글 선택하기
    const handleToggleCheckbox = (qanum) => {
        setSelectedQnaBoard(prevState => {
            if (prevState.includes(qanum)) {
                return prevState.filter(num => num !== qanum);
            } else {
                return [...prevState, qanum];
            }
        });
    };

    // 문의게시글 선택 초기화
    const handleResetSelection = () => {
        setSelectedQnaBoard([]);
    };

    // 선택된 문의게시글 axios 요청 보내고 삭제하기
    const handleDeleteSelectedQna = (() => {
        if (selectedQnaBoard.length === 0) {
            // console.log(" 선택된 목록이 없습니다 ");
            return;
        }
        // console.log("삭제할 문의게시판 qanum 목록:", selectedQnaBoard);

        axios.get('/qna/qnaDelete', {
            params: {
                // 값이 전달됐을 때 []표시를 제거하기위해 join으로 , 구분자 이용
                qanum: selectedQnaBoard.join(','),
            }
        }).then(() => {
            console.log("문의게시판 삭제 성공");
            // 삭제 후 문의게시판 목록 최신화
            loadQnaList();
            // 삭제 후 선택된 목록 배열 초기화
            setSelectedQnaBoard([]);
        }).catch((error) => {
            console.error(`문의게시판 삭제 실패 `, error);
        });
    });

    return (
        <div className='XQnaControllContent_div'>
            <Submenu />
            <div className='XQnaControllContent_div_div'>
                <XQnaSearchBox />
                <div className='XBoardControllContent_SearchResult_div'>
                    {/* 조회결과 index */}
                    <div className='XQnaControllContent_index'>
                        <p>선택</p>
                        <p>번호</p>
                        <p>공개여부</p>
                        <p>제목</p>
                        <p>작성자</p>
                        <p>작성일</p>
                        <p>답변여부</p>
                        <p>조회수</p>
                    </div>
                    <div>
                        {qna.map((item, index) => (
                            <XQnaSearchResult key={index} {...item} onToggleCheckbox={handleToggleCheckbox} isChecked={selectedQnaBoard.includes(item.qanum)} />
                        ))}
                    </div>
                </div>
                {/* 초기화 삭제 버튼 */}
                <div className='XResetDeleteBtn'>
                    <button onClick={handleResetSelection}>초기화</button>
                    <button onClick={handleDeleteSelectedQna}>삭제</button>
                </div>
            </div>
        </div>
    )
}
