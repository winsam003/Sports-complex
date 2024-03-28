import axios from 'axios';
import './XuserInfoList.css';
import XuserInfoListContents from './XuserInfoListContents';
import { useState } from 'react';
import { useEffect } from 'react';


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
            console.log('deleteError => '+error)
        })
    }
    //******************************* 체크된 유저 삭제 끝 *********************************//




    const [rememberList, setRememberList] = useState([]);
    //******************************* UserList 불러오기 요청 시작 *********************************//
    const [userInfoList, setUserInfoList] = useState([]);
    useEffect(() => {
        axios.get('/member/memberList')
        .then((userList) => {
            setUserInfoList(userList.data);
            setRememberList(userList.data);     // 불러온 최초 값 저장
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
        let result;

        if (e.target.value === '내국인'){ result = 'IN' }
        else if (e.target.value === '외국인') { result = 'FO' }
        else { result = '' }

        setInOrFo(result);
    }

    // 이름 저장
    const ismemberAge = (e) => {
        let result;

        if (e.target.value === '성인') { result = 'AD' }
        else if (e.target.value === '아동') { result = 'KI' }
        else if (e.target.value === '65세이상') { result = 'OL' }
        else { result = '' }

        setMemberAge(result);
    }

    // 키워드 저장
    const iskeyword = (e) => {
        setKeyword(e.target.value);
    }



    // 2. UserList 불러오기에서 불러온 userInfoList에서 내/외국인, 분류, 이름을 필터해서 출력 할 userList에 재 저장한다.
    // rememberList 는 최초 불러온 데이터 값이다. (54행)
    const searchMember = () => {

        const searchRequirement = InOrFo + memberAge;
        let searchRequirementList = rememberList.filter((list) => list.membercode.includes(searchRequirement));

        console.log(searchRequirement);

        if (InOrFo === '' && memberAge === '' && keyword === ''){
            console.log(rememberList.length);
            setUserInfoList(rememberList);
        }else if (keyword === ''){
            setUserInfoList(searchRequirementList);
        }else{
            searchRequirementList = searchRequirementList.filter((list) => list.name.includes(keyword));
            setUserInfoList(searchRequirementList);
        }
    }
    
    //******************************* 검색 filter 기능 끝 *********************************//
    


    return (
        <div className='XuserInfoList_Box'>
            <div className='XuserInfoList_searchTitle'>회원 정보 조회</div>
            <div className='XuserInfoList_SearchBox'>
                <span>내/외국인</span>
                <select onChange={isInOrFo}>
                    <option value="">전체</option>
                    <option value="내국인">내국인</option>
                    <option value="외국인">외국인</option>
                </select>
                <span>상세분류</span>
                <select onChange={ismemberAge}>
                    <option value="">전체</option>
                    <option value="성인">성인</option>
                    <option value="아동">아동</option>
                    <option value="65세이상">65세이상</option>
                </select>
                <span>이름</span>
                <input onChange={iskeyword} type='search' className='XuserInfoList_SearchBox_input' placeholder='이름 검색' />
            </div>
            <div className='XBtnResetSearch'>
                <button>초기화</button>
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
                        <XuserInfoListContents key={index} {...it} userDelete={userDelete} />
                    ))}
                </div>
                <div className='XuserInfoList_UserButton'>
                    <button>초기화</button>
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