import './Xboard.css'
import React, {useState}  from 'react';

export default function Xboard({onCheckboxChange}) {

    const [isChecked, setIsChecked] = useState(false);

    const checkedevent = (event) => {
        const newValue = event.target.checked;
        // console.log(newValue);
        setIsChecked(newValue);
    }

    return(
        <div>
            <div className='Xboard'>
                <div className='Xboard_div'>
                    <span>선택</span>
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>등록일시</span>
                    <span>첨부파일</span>
                </div>
                <div className='Xboard_content'>
                    <span><input type="checkbox" checked={isChecked} onChange={checkedevent} /></span>
                    <span>00000001</span>
                    <span>공지사항 제목 확인용 글입니다</span>
                    <span>김수한무두루미</span>
                    <span>2024.12.31</span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

