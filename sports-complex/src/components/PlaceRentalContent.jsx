import './PlaceRentalContent.css'
import Submenu from './Submenu'
import PlaceRentalSearch from './PlaceRentalSearch'
import XBtnResetSearch from './XBtnResetSearch';
import PlaceRentalSearchList from './PlaceRentalSearchList'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

// 수강 신청
export default function PlaceRentalContent() {

    useEffect(() => {
        const today = new Date();
        const minDate = new Date(today);
        minDate.setDate(today.getDate() + 1); // 오늘 날짜로부터 1일 뒤
        const maxDate = new Date(today);
        maxDate.setDate(today.getDate() + 4); 

        const rentDateInput = document.getElementById('rentDate');
        rentDateInput.min = minDate.toISOString().split('T')[0]; 
        rentDateInput.max = maxDate.toISOString().split('T')[0]; 
    }, []);

    // 날짜 선택 값 td 안으로. 
    const [rentDate, setRentDate] = useState('');
    
    const handleRentDate = (event) => {
        setRentDate(event.target.value);
    }
    
    // 시간 선택 값 td 안으로. 
    const [rentTime, setRentTime] = useState('');

    const handleRentTime = (event) => {
        setRentTime(event.target.value);
    }
    
    // 가격 가져오기
    const [rentPrice, setRentPrice] = useState('');
    
    const handleRentPrice = (value) => {
        setRentPrice(value);
    }
    


    return (
        <div className='board_div'>
            <Submenu />
            <div className='board_div_div'>
                {/* <PlaceRentalSearch /> */}
                {/* <XBtnResetSearch /> */}
                <div className='PlaceRentalContent_select'>
                    <span>날짜 선택</span>
                    <input type="date" className='selectRent' name="rentDate" id="rentDate" value={rentDate} onChange={handleRentDate} />
                    <span>시간 선택</span>
                    <select name="rentTime" className='selectRent' id="rentTime" value={rentTime} onChange={handleRentTime}>
                        <option value="오전 6시">오전 6시</option>
                        <option value="오전 9시">오전 9시</option>
                        <option value="오후 12시">오후 12시</option>
                        <option value="오후 3시">오후 3시</option>
                        <option value="오후 6시">오후 6시</option>
                    </select>
                </div>

                
                <PlaceRentalSearchList handleRentPrice={handleRentPrice} />
                <div className='PlaceRentalContent_form'>
                    <form action="/" method='post'>
                        <table>
                            <tr>
                                <th>날짜 선택 <span className='star'></span></th>
                                <td><input type="text" name='date' id='date' placeholder='선택해주세요' value={rentDate} readOnly /></td>
                            </tr>
                            <tr>
                                <th>시간 선택 <span className='star'></span></th>
                                <td><input type="text" name='time' id='time' placeholder='선택해주세요' value={rentTime} readOnly /></td>
                            </tr>
                            <tr>
                                <th>작성자 <span className='star'></span></th>
                                <td><input type="text" name='name' id='name' placeholder='세션에서 가져오기' readOnly /></td>
                            </tr>
                            <tr>
                                <th>연락처 <span className='star'></span></th>
                                <td>
                                    <input type="text" name='phoneNum' id='phoneNum' />
                                </td>
                            </tr>
                            <tr>
                                <th>이용 인원 <span className='star'></span></th>
                                <td>
                                    <input type="text" name='useNum' id='useNum' />
                                </td>
                            </tr>
                            <tr>
                                <th>가격 <span className='star'></span></th>
                                <td>
                                    <input type="text" name='price' id='price' value={rentPrice} placeholder='선택한 시설에서 가져오기' />
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div className='RentalWriteButton'>
                    <button><Link to='/PlaceRentalInfo'>신청</Link></button>
                    <button><Link to='/PlaceRentalInfo'>목록</Link></button>
                </div>
            </div>
        </div>
    )
}