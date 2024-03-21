import './XuserInfoList.css';
import XuserInfoListContents from './XuserInfoListContents';
import { useState } from 'react';

export default function XuserInfoList(){

    // 테스트용 객체입니다 테이블 연결 후 테이블 데이터로 교체할 예정입니다.
    const data = [
    {
        
        "userID" : "bamboo7",
        "userName" : "최승삼",
        "userBirth" : "1994.10.22",
        "userPhone" : "01058021809",
        "userAddress" : "경기도 성남시 중원구 자혜로 8번길 7-1",
        "userCarNum" : "117머 8941",
        "lectureCheck" : "false",
    },
    {
        
        "userID" : "qwert1234",
        "userName" : "장근정",
        "userBirth" : "1999.5.12",
        "userPhone" : "01012345361",
        "userAddress" : "경기도 용인시 처인구 행복구 행복동 2번길 7-1",
        "userCarNum" : "",
        "lectureCheck" : "false",
    },
    {
        
        "userID" : "backk5673",
        "userName" : "백승현",
        "userBirth" : "1994.2.16",
        "userPhone" : "01012345612",
        "userAddress": "경기도 성남시 중원구 자혜로 5번길 7-1",
        "userCarNum" : "162가 4512",
        "lectureCheck" : "true",
    },
    ]

    const [checkedUsers, setCheckedUsers] = useState([]);

    const userDelete = (userID, checked) => {
        if(checked){
            setCheckedUsers([...checkedUsers, userID]);
        }else{
            setCheckedUsers(checkedUsers.filter(id => id !== userID));
        }
    };

    console.log(checkedUsers[0]);

    

    return(
        <div className='XuserInfoList_Box'>
            <form action='/' method='post'>
                <div className='XuserInfoList_searchTitle'>유저 아이디검색</div>
                <div className='XuserInfoList_userSearchBox'>
                    <input type='text' name='userSearch' id='userSearch' placeholder='유저 아이디 검색'  />
                </div>
                <div>
                    <button>초기화</button>
                    <button>조회</button>
                </div>
            </form>
            <div>
                <form action='/' method='delete'>
                    <div className='XuserInfoList_SearchedUser'>
                        <span>체크</span>
                        <span>ID</span>
                        <span>이름</span>
                        <span>생년월일</span>
                        <span>연락처</span>
                        <span>주소</span>
                        <span>차량번호</span>
                        <span>강사등록</span>
                    </div>
                    <div>
                        {data.map((it, index) => (
                            <XuserInfoListContents key={index} {...it} userDelete={userDelete} />
                        ))}
                    </div>
                    <div className='XuserInfoList_UserButton'>
                        <button>초기화</button>
                        <button>삭제</button>
                    </div>
                </form>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}