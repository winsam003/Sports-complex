import './XParkingControll.css'
import Submenu from './Submenu'

export default function XParkingControll() {
    return (
        <div className='XParkingControll_div'>
            <Submenu />
            <div className='XParkingControll_div_div'>
                <div className='XParkingControllSearchBox_div'>
                    <select>
                        <option value="">공지사항 종류1</option>
                        <option value="">공지사항 종류2</option>
                        <option value="">공지사항 종류3</option>
                    </select>
                    <input type='text'></input>
                    <button>검색</button>
                </div>
                <div className='XParkingControllSearchResult_div'>
                    <div className='XParkingControllSearchResult_index'>
                        <span>주차신청번호</span>
                        <span>주차장위치</span>
                        <span>회원번호</span>
                        <span>이름</span>
                        <span>연락처</span>
                        <span>차량번호</span>
                        <span>신청일</span>
                    </div>
                    <div className='XParkingControllSearchResult_content'>
                        <span>999999</span>
                        <span>지하3층</span>
                        <span>999999</span>
                        <span>렌트캅니다</span>
                        <span>010-9999-9999</span>
                        <span>999허 9999</span>
                        <span>2024.03.22 11:58:59</span>
                    </div>
                </div>
            </div>
        </div>
    )
}