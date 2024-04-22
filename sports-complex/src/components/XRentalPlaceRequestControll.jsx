import './XRentalPlaceRequestControll.css'
import Submenu from './Submenu';
import PlaceRentalSearch from './PlaceRentalSearch';
import XBtnResetSearch from './XBtnResetSearch';
import XBtnResetDelete from './XBtnResetDelete';
import XRentalPlaceRequestControllList from './XRentalPlaceRequestControllList';
import { apiCall } from '../apiService/apiService';
import { useEffect, useState } from 'react';


export default function XRentalPlaceRequestControll({ token }) {

    // 신청 테이블 List 불러오기 =============================================================
    const [spaceRentAppAll, setSpaceRentAppAll] = useState([]);
    const [rememberList, setRememberList] = useState([]);
    useEffect(() => {
        let url = '/spaceRentApp/spaceRentAppAll';

        apiCall(url, 'post', null, token)
            .then((response) => {
                setSpaceRentAppAll(response);
                setRememberList(response)
            }).catch((error) => {
                console.log('spaceRentApplist error occured = ' + error);
            })
    }, [])
    // 신청 테이블 List 불러오기 =============================================================




    // 검색기능 / 대분류, 소분류, 시설명검색 저장 ==============================================

    const [SearchBox, setSearchBox] = useState({
        select_Big: '전체',
        select_Small: '전체',
        keyword: ''
    });

    const searchBoxHandler = (e) => {
        if (e.target.name === 'select_Big') {
            setSearchBox({
                ...SearchBox,
                select_Big: e.target.value
            })
        } else if (e.target.name === 'select_Small') {
            setSearchBox({
                ...SearchBox,
                select_Small: e.target.value
            })
        } else {
            setSearchBox({
                ...SearchBox,
                keyword: e.target.value
            })
        }
    }

    // 검색기능 / 대분류, 소분류, 시설명검색 저장 ==============================================


    // console.log(rememberList);
    console.log(spaceRentAppAll);
    console.log(spaceRentAppAll[0].sprstate);

    // 검색기능 / 대분류, 소분류, 시설명검색 실행 ==============================================

    const handleSearch = () => {

        if (SearchBox.select_Big === '전체' && SearchBox.select_Small === '전체') {
            setSpaceRentAppAll(rememberList)
            if (SearchBox.keyword !== '') {
                setSpaceRentAppAll(rememberList.filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)));
            }

        } else if (SearchBox.select_Big === '전체' && SearchBox.select_Small === '접수중') {                                                 // 전체 이면서 접수중이라면
            setSpaceRentAppAll(rememberList.filter(item => (item.sprstate === '접수중'))                                                     // 접수중 필터링
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))                                     // 그중에서 이름에 keyword 포함 값 필터링

        } else if (SearchBox.select_Big === '전체' && SearchBox.select_Small === '확정') {
            setSpaceRentAppAll(rememberList.filter(item => (item.sprstate === '확정'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '전체' && SearchBox.select_Small === '접수만료') {
            setSpaceRentAppAll(rememberList.filter(item => (item.sprstate === '접수만료'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '테니스장' && SearchBox.select_Small === '전체') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'TE'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '테니스장' && SearchBox.select_Small === '접수중') {                                               // 테니스장이면서 접수중이라면
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'TE'))                                // 전체에서 테니스장 필터링
                .filter(item => (item.sprstate === '접수중'))                                                                                  // 그중에서 접수중 필터링
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))                                       // 그중에서 이름에 keyword 포함 값 필터링

        } else if (SearchBox.select_Big === '테니스장' && SearchBox.select_Small === '확정') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'TE'))
                .filter(item => (item.sprstate === '확정'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '테니스장' && SearchBox.select_Small === '접수만료') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'TE'))
                .filter(item => (item.sprstate === '접수만료'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '풋살장' && SearchBox.select_Small === '전체') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'FT'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '풋살장' && SearchBox.select_Small === '접수중') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'FT'))
                .filter(item => (item.sprstate === '접수중'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '풋살장' && SearchBox.select_Small === '확정') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'FT'))
                .filter(item => (item.sprstate === '확정'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '풋살장' && SearchBox.select_Small === '접수만료') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'FT'))
                .filter(item => (item.sprstate === '접수만료'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '농구장' && SearchBox.select_Small === '전체') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'BK'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '농구장' && SearchBox.select_Small === '접수중') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'BK'))
                .filter(item => (item.sprstate === '접수중'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))


        } else if (SearchBox.select_Big === '농구장' && SearchBox.select_Small === '확정') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'BK'))
                .filter(item => (item.sprstate === '확정'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))

        } else if (SearchBox.select_Big === '농구장' && SearchBox.select_Small === '접수만료') {
            setSpaceRentAppAll(rememberList.filter(item => (item.spacecode.spacecode.substring(2, 4) == 'BK'))
                .filter(item => (item.sprstate === '접수만료'))
                .filter(item => (item.id !== null ? item.id.name.includes(SearchBox.keyword) : false)))

        }
    }
    // 검색기능 / 대분류, 소분류, 시설명검색 실행 ==============================================


    // input에서 엔터누를 시 검색 실행 ======================================================--
    const KeyPressHandler = (e) => {
        if (e.key === 'Enter') {
            handleSearch(true);
        }
    }
    // input에서 엔터누를 시 검색 실행 ======================================================--

    return (
        <div className='XRentalPlaceRequestControll_div'>
            <Submenu />
            <div className='XRentalPlaceRequestControll_div_div'>
                <PlaceRentalSearch searchBoxHandler={searchBoxHandler} KeyPressHandler={KeyPressHandler} />
                <XBtnResetSearch handleSearch={handleSearch} />
                <div className='XRentalPlaceRequestControll_index'>
                    <p>선택</p>
                    <p>대관신청번호</p>
                    <p>대관시설이름</p>
                    <p>대관이용날짜</p>
                    <p>이름</p>
                    <p>연락처</p>
                    <p>신청일</p>
                    <p>현재상태</p>
                </div>
                {spaceRentAppAll.map((item, index) => (
                    <XRentalPlaceRequestControllList key={index}
                        sprnum={item.sprnum}
                        spacecode={item.spacecode}
                        sprdate={item.sprdate}
                        id={item.id} appphonenum={item.appphonenum}
                        sprstate={item.sprstate}
                        appdate={item.appdate} />
                ))}
                <XBtnResetDelete />
            </div>
        </div>
    )
}