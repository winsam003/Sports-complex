import './XRentalPlaceRequestControll.css'
import Submenu from './Submenu';
import PlaceRentalSearch from './PlaceRentalSearch';
import XBtnResetSearch from './XBtnResetSearch';
import XBtnResetDelete from './XBtnResetDelete';
import XRentalPlaceRequestControllList from './XRentalPlaceRequestControllList';
import { apiCall } from '../apiService/apiService';
import { useEffect, useState } from 'react';


export default function XRentalPlaceRequestControll({ token }) {

    const [spaceRentAppAll, setSpaceRentAppAll] = useState([]);

    useEffect(() => {
        let url = '/spaceRentApp/spaceRentAppAll';

        apiCall(url, 'post', null, token)
            .then((response) => {
                setSpaceRentAppAll(response);
            }).catch((error) => {
                console.log('spaceRentApplist error occured = ' + error);
            })
    }, [])

    return (
        <div className='XRentalPlaceRequestControll_div'>
            <Submenu />
            <div className='XRentalPlaceRequestControll_div_div'>
                <PlaceRentalSearch />
                <XBtnResetSearch />
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
                                                    appdate={item.appdate}/>
                ))}
                <XBtnResetDelete />
            </div>
        </div>
    )
}