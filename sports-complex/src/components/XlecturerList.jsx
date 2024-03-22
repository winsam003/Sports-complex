import './XlecturerList.css';
import XlecturerListButton from './XlecturerListButton';
import XlecturerListContents from './XlecturerListContents';
import { useState } from 'react';

export default function XlecturerList() {

    // 테스트용 객체입니다 테이블 연결 후 테이블 데이터로 교체할 예정입니다.
    const data = [
        {

            "lectureNum": "1",
            "lectureName": "이정혁",
            "lectureBirth": "1992.10.22",
            "lecturePhone": "01045841121",
            "lectureAddress": "경기도 용인시 처인구 행복동 2-2",
            "license": "정보처리기사",
        },
        {

            "lectureNum": "2",
            "lectureName": "김수옥",
            "lectureBirth": "1995.11.25",
            "lecturePhone": "01045843334",
            "lectureAddress": "경기도 용인시 처인구 즐겁동 2-2",
            "license": "SQLD",
        },
        {

            "lectureNum": "3",
            "lectureName": "김수미",
            "lectureBirth": "1995.01.02",
            "lecturePhone": "01045843221",
            "lectureAddress": "경기도 성남시 분당구 야탑동 2-2",
            "license": "",
        },
    ]

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
                    <span>이름</span>
                    <span>생년월일</span>
                    <span>연락처</span>
                    <span>주소</span>
                    <span>자격증</span>
                </div>
                <div>
                    {data.map((it, index) => (
                        <XlecturerListContents key={index} {...it} lectureDelete={lectureDelete} />
                    ))}
                </div>
                {/* <XlecturerListButton /> */}
            </div>
        </div>
    )
}