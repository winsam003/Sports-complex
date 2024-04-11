import './XlecturerList.css';
import XlecturerListButton from './XlecturerListButton';
import XlecturerListContents from './XlecturerListContents';
import { useState } from 'react';

export default function XlecturerList() {

    const [checkelecture, setCheckedlecture] = useState([]);

    const lectureDelete = (lectureNum, checked) => {
        if (checked) {
            setCheckedlecture([...checkelecture, lectureNum]);
        } else {
            setCheckedlecture(checkelecture.filter(num => num !== lectureNum));
        }
    };

    return (
        <div className='XlectureInfoList_Box'>
            <div className='XlectureInfoList_searchTitle'>강사 검색</div>
            <div className='XlectureInfoList_userSearchBox'>
                <input type='text' name='lectureSearch' id='lectureSearch' placeholder='강사 검색' />
            </div>
            <div>
                <button>초기화</button>
                <button>조회</button>
            </div>
            <div>
                <div className='XlectureInfoList_SearchedUser'>
                    <span>체크</span>
                    <span>강사번호</span>
                    <span>강사코드</span>
                    <span>이름</span>
                    <span>생년월일</span>
                    <span>연락처</span>
                    <span>주소</span>
                    <span>자격증</span>
                    <span>계좌번호</span>
                </div>
                <div>
                    {/* {data.map((it, index) => (
                        <XlecturerListContents key={index} {...it} lectureDelete={lectureDelete} />
                    ))} */}
                </div>
                <XlecturerListButton />
            </div>
        </div>
    )
}