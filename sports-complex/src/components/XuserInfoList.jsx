import axios from 'axios';
import './XuserInfoList.css';
import XuserInfoListContents from './XuserInfoListContents';
import { useState } from 'react';
import { useEffect } from 'react';
import { apiCall } from '../apiService/apiService';


export default function XuserInfoList() {





    //******************************* 체크된 user 저장 시작 *********************************//
    const [checkedUsers, setCheckedUsers] = useState([]);
    const userDelete = (userID, checked) => {
        if (checked) {
            setCheckedUsers([...checkedUsers, userID]);
        } else {
            setCheckedUsers(checkedUsers.filter(id => id !== userID));
        }
    };
    //******************************* 체크된 user 저장 끝 *********************************//





    //******************************* 체크된 유저 삭제 시작 *********************************//
    const [deleteRequest, setDeleteRequest] = useState(false);

    const deleteReq = () => {
        axios.post('/member/mdelete', checkedUsers
        ).then((response) => {
            alert(response.data);
            setUserInfoList([]);
            setDeleteRequest(!deleteRequest);
        }).catch((error) => {
            console.log('deleteError => ' + error)
        })
    }
    //******************************* 체크된 유저 삭제 끝 *********************************//




    //******************************* UserList 불러오기 요청 시작 *********************************//
    const [rememberList, setRememberList] = useState([]);       // 최초 요청시 리스트 저장
    const [userInfoList, setUserInfoList] = useState([]);       // 출력할 리스트 저장
    useEffect(() => {

        let url = "/member/memberList";


        console.log(apiCall(url, 'get', null, null));

        apiCall(url, 'get', null, null)
        .then((userList) => {
            setUserInfoList(userList);
            setRememberList(userList);     // 불러온 최초 값 저장
        }).catch((error) => {
            console.error("Error fetching member list:", error);
        });
    }, [deleteRequest])
    //******************************* UserList 불러오기 요청 끝 *********************************//






    //******************************* 검색 filter 기능 시작 *********************************//
    // 1. 내/외국인, 이름, 검색키워드를 필터해서 다른 곳에 저장한다.
    const [InOrFo, setInOrFo] = useState('');
    const [memberAge, setMemberAge] = useState('');
    const [keyword, setKeyword] = useState('');

    // 내/외국인 저장
    const isInOrFo = (e) => {
        setInOrFo(e.target.value);
    }

    // 이름 저장
    const ismemberAge = (e) => {
        setMemberAge(e.target.value);
    }

    // 키워드 저장
    const iskeyword = (e) => {
        setKeyword(e.target.value);
    }



    // 2. UserList 불러오기에서 불러온 userInfoList에서 내/외국인, 분류, 이름을 필터해서 출력 할 userList에 재 저장한다.
    // rememberList 는 최초 불러온 데이터 값이다. (54행)
    const searchMember = () => {

        const searchRequirement = InOrFo + memberAge;                                                               // 유저코드 조합
        let searchRequirementList = rememberList.filter((list) => list.membercode.includes(searchRequirement));     // 유저코드가 포함된 리스트 필터링

        if (InOrFo === '' && memberAge === '' && keyword === '') {           // 전체, 전체, 키워드 없는경우 미리 저장한 최초 리스트 값을 출력
            setUserInfoList(rememberList);
        } else if (keyword === '') {                                          // 키워드가 없을 시 조합된 유저코드를 필터 한 값을 출력
            setUserInfoList(searchRequirementList);
        } else {                                                              // 키워드가 있을 시 유저코드 필터 값에서 키워드를 한번 더 필터링해서 출력
            searchRequirementList = searchRequirementList.filter((list) => list.name.includes(keyword));
            setUserInfoList(searchRequirementList);
        }
    }

    //******************************* 검색 filter 기능 끝 *********************************//




    //******************************* 회원정보조회 초기화 버튼 시작 *********************************//
    const [isrefresh, setIsrefresh] = useState(false);
    const searBoxRefresh = () => {
        setInOrFo('');
        setMemberAge('');
        setKeyword('');
        setIsrefresh(!isrefresh);
    }
    const checkBoxRefresh = () => {
        setCheckedUsers([]);
    }

    //******************************* 회원정보조회 초기화 버튼 끝 *********************************//



    return (
        <div className='XuserInfoList_Box'>
            <div className='XuserInfoList_searchTitle'>회원 정보 조회</div>
            <div className='XuserInfoList_SearchBox'>
                <span>내/외국인</span>
                <select value={InOrFo} onChange={isInOrFo}>
                    <option value="">전체</option>
                    <option value="IN">내국인</option>
                    <option value="FO">외국인</option>
                </select>
                <span>상세분류</span>
                <select value={memberAge} onChange={ismemberAge}>
                    <option value="">전체</option>
                    <option value="AD">성인</option>
                    <option value="KI">아동</option>
                    <option value="OL">65세이상</option>
                </select>
                <span>이름</span>
                <input value={keyword} onChange={iskeyword} type='search' className='XuserInfoList_SearchBox_input' placeholder='이름 검색' />
            </div>
            <div className='XBtnResetSearch'>
                <button onClick={searBoxRefresh}>초기화</button>
                <button onClick={searchMember}>조회</button>
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
                        <XuserInfoListContents key={index} {...it} userDelete={userDelete} isChecked={checkedUsers.includes(it.id)} />
                    ))}
                </div>
                <div className='XuserInfoList_UserButton'>
                    <button onClick={checkBoxRefresh}>초기화</button>
                    <button onClick={deleteReq}>삭제</button>
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