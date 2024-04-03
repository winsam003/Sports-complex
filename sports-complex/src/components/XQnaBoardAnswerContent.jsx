import './XQnaBoardAnswerContent.css'
import Submenu from './Submenu'
import axios from 'axios';
import { useState, useEffect } from 'react';

// 문의게시판 답변하기
export default function XQnaBoardAnswerContent({ qnaData }) {
    const formattedDate = formatDateTime(qnaData.qadate);

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

    return (
        <div className='XQnaBoardAnswerContent_div'>
            <Submenu />
            <div className='XQnaBoardAnswerContent_div_div'>
                <div>
                    <p className='XQnaBoardAnswerContent_title'>{qnaData.qatitle}</p>
                    <div className='XQnaBoardAnswerContent_title_content'>
                        <p>작성자</p>
                        <p>{qnaData.id.id}</p>
                        <p>등록일시</p>
                        <p>{formattedDate}</p>
                        <p>조회수</p>
                        <p>{qnaData.qacount}</p>
                        <p>첨부파일</p>
                        <p>{qnaData.qafile}</p>
                    </div>
                    <p className='XQnaBoardAnswerContent_content'>
                        {qnaData.qacontent}
                    </p>
                </div>
                <p className='XQnaBoardAnswerContent_answer'>답변하기</p>
                <div className='XQnaBoardAnswerContent_haveto'>
                    <p>(<span className='star'>*</span>)는 반드시 작성해야 할 필수 항목입니다.</p>
                </div>
                <div className='XQnaBoardAnswerContent_form'>
                    <table>
                        <tbody>
                            <tr>
                                <th>작성자<span className='star'>*</span></th>
                                <td><input type="text" name='name' id='name' readOnly placeholder='로그인되어있는직원id데이터가져와서사용' /></td>
                            </tr>
                            <tr>
                                <th>내용 <span className='star'>*</span></th>
                                <td>
                                    <input type="text" name='content' id='content' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='XQnaBoardAnswerContent_btn_div'>
                        <button>등록</button>
                        <button>목록</button>
                    </div>
                </div>
            </div>
        </div>
    )
}