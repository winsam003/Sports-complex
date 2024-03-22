import './XRentalPlaceRequestControll.css'
import Submenu from './Submenu';
import XBtnResetSearch from './XBtnResetSearch';
import XBtnResetDelete from './XBtnResetDelete';

export default function XRentalPlaceRequestControll() {
    return (
        <div className='XRentalPlaceRequestControll_div'>
            <Submenu />
            <div className='XRentalPlaceRequestControll_div_div'>
                <div className='XRentalPlaceRequestControll'>
                    <div className='XRentalPlaceRequestControll_MainCategory'>
                        <span>대분류</span>
                        <select className='XRentalPlaceRequestControll_MainCategory_select'>
                            <option value="">종목1</option>
                            <option value="">종목2</option>
                            <option value="">종목3</option>
                        </select>
                    </div>
                    <div className='XRentalPlaceRequestControll_SubCategory'>
                        <span>소분류</span>
                        <select className='XRentalPlaceRequestControll_SubCategory_select'>
                            <option value="">세부종목1</option>
                            <option value="">세부종목2</option>
                            <option value="">세부종목3</option>
                        </select>
                    </div>
                    <div className='XRentalPlaceRequestControll_PlaceName'>
                        <span>시설명</span>
                        <input type='text'></input>
                    </div>
                </div>
                <XBtnResetSearch />
                <div className='XRentalPlaceRequestControll_SearchList'>
                    <div className='XRentalPlaceRequestControll_index'>
                        <p>선택</p>
                        <p>대관신청번호</p>
                        <p>대관시설이름</p>
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