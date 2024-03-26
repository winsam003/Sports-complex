import axios from 'axios';
import './XuserInfoList.css';
import XuserInfoListContents from './XuserInfoListContents';
import SearchSelect from './SearchSelect';
import { useState } from 'react';
import { useEffect } from 'react';


export default function XuserInfoList() {


    const [userInfoList, setUserInfoList] = useState([]);
    useEffect(() => {
        axios.get('/member/memberList', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((userList) => {
                setUserInfoList(userList.data);
            }).catch((error) => {
                console.error("Error fetching member list:", error);
            });
    }, [])


    const [checkedUsers, setCheckedUsers] = useState([]);

    const userDelete = (userID, checked) => {
        if (checked) {
            setCheckedUsers([...checkedUsers, userID]);
        } else {
            setCheckedUsers(checkedUsers.filter(id => id !== userID));
        }
    };



    return (
        <div className='XuserInfoList_Box'>
            <div className='XuserInfoList_searchTitle'>유저 아이디검색</div>
            <div className='XuserInfoList_userSearchBox'>
                <input type='text' name='userSearch' id='userSearch' placeholder='유저 아이디 검색' />
            </div>
            <div>
                <button>초기화</button>
                <button>조회</button>
            </div>
            <div>
                <div className='XuserInfoList_SearchedUser'>
                    <span>체크</span>
                    <span>ID</span>
                    <span>이름</span>
                    <span>생년월일</span>
                    <span>연락처</span>
                    <span>주소</span>
                    <span>차량번호</span>
                    {/* <span>강사등록</span> */}
                </div>
                <div>
                    {userInfoList.map((it, index) => (
                        <XuserInfoListContents key={index} {...it} userDelete={userDelete} />
                    ))}
                </div>
                <div className='XuserInfoList_UserButton'>
                    <button>초기화</button>
                    <button>삭제</button>
                </div>
            </div>
            <div className='XuserInfoList_searchTitle'>문자메세지 발송</div>
            <div className='XuserInfoList_textMessage'>
                <input type='text' name='textMessage' id='textMessage' placeholder='문자 내용 입력' />
            </div>
            <div className='XuserInfoList_UserButton'>
                <button>초기화</button>
                <button>발송</button>
            </div>
        </div>
    )
}