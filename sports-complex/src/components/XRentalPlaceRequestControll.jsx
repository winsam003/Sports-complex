import './XRentalPlaceRequestControll.css'
import Submenu from './Submenu';
import PlaceRentalSearch from './PlaceRentalSearch';
import XBtnResetSearch from './XBtnResetSearch';
import XBtnResetDelete from './XBtnResetDelete';

export default function XRentalPlaceRequestControll() {
    return (
        <div className='XRentalPlaceRequestControll_div'>
            <Submenu />
            <div className='XRentalPlaceRequestControll_div_div'>
                <PlaceRentalSearch />
                <XBtnResetSearch />
                <div className='XRentalPlaceRequestControll_SearchList'>
                    <div className='XRentalPlaceRequestControll_index'>
                        <p>선택</p>
                        <p>대관신청번호</p>
                        <p>대관시설이름</p>
                        <p>대관이용날짜</p>
                        <p>회원번호</p>
                        <p>이름</p>
                        <p>연락처</p>
                        <p>신청일</p>
                        <p>현재상태</p>
                    </div>
                    <div className='XRentalPlaceRequestControll_content'>
                        <input type='checkbox'></input>
                        <p>999999</p>
                        <p>기초생활수영장</p>
                        <p>24.03.26</p>
                        <p>888888</p>
                        <p>생존풋살</p>
                        <p>010-4444-4444</p>
                        <p>2024.03.22 16:23:32</p>
                        <p>결제완료</p>
                    </div>
                </div>
                <XBtnResetDelete />
            </div>
        </div>
    )
}