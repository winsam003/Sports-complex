import './PlaceRentalContent.css'
import Submenu from './Submenu'
import PlaceRentalSearchList from './PlaceRentalSearchList'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

// 수강 신청
export default function PlaceRentalContent({ getUserName }) {

    const today = new Date();
    useEffect(() => {
        const minDate = new Date(today);
        minDate.setDate(today.getDate() + 1); // 오늘 날짜로부터 1일 뒤
        const maxDate = new Date(today);
        maxDate.setDate(today.getDate() + 3);

        const rentDateInput = document.getElementById('rentDate');
        rentDateInput.min = minDate.toISOString().split('T')[0];
        rentDateInput.max = maxDate.toISOString().split('T')[0];
    }, []);

    // 날짜 선택 값 td 안으로. 
    const [rentDate, setRentDate] = useState(today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0'));

    const handleRentDate = (event) => {
        setRentDate(event.target.value);
    }

    // 시간 선택 값 td 안으로. 
    const [rentTime, setRentTime] = useState('오전 6시');

    const handleRentTime = (event) => {
        setRentTime(event.target.value);
    }

    // 인원 수 저장
    const [useNum, setUseNum] = useState(1);
    const useNumHandler = (e) => {
        setUseNum(e.target.value);
    }

    // 가격 가져오기
    const [rentPrice, setRentPrice] = useState('');

    const handleRentPrice = (value) => {
        setRentPrice(value);
    }

    console.log(new Date());
    console.log(new Date().getFullYear());
    console.log(new Date().getMonth());
    console.log(new Date().getDate());
    console.log(new Date().getDay());
    console.log(new Date().getHours());



    return (
        <div className='board_div'>
            <Submenu />
            <div className='board_div_div'>
                <div className='PlaceRentalContent_infoTitleBox'>
                    <div className='PlaceRentalContent_infoTitle PlaceRentalContent_infoTitle1'>✔ 대관신청 안내</div>
                    <div>* 대관신청을 금일 기준 3일 이후 기간의 시설을 대관하실 수 있습니다.</div>
                    <div className='PlaceRentalContent_infoTitle PlaceRentalContent_infoTitle2'>✔ 이용 절차</div>
                    <pre className='PlaceRentalContent_infoTitle_pre'>
                        01&#41; 홈페이지 예약신청 : 홈페이지(http://rec.isdc.co.kr/)로그인(실명인증)후, 사용허가 신청<br />
                        02&#41; 사용허가심의 : 담당자의 사용허가 심의<br />
                        03&#41; 허가통보 : 심의 후, 허가통보(SMS 발송 및 담당자와 통화)<br />
                        04&#41; 전용사용료납부 : 시설 이용료 결제(홈페이지에서 결제-카드 & 계좌이체)<br />
                        05&#41; 부속시설사용허가 : 행사 종료 이후, 부속시설 사용료를 정산하여 담당자가 통보<br />
                        06&#41; 부속사용료납부 : 담당자통보 후,3일 이내에 부속시설 사용료 납부(시설 이용료 결제 방법과 동일)<br />
                    </pre>
                </div>

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
                            <tbody>
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
                                    <td><input type="text" name='name' id='name' value={getUserName} readOnly /></td>
                                </tr>
                                <tr>
                                    <th>연락처 <span className='star'></span></th>
                                    <td>
                                        <input type="text" name='phoneNum' id='phoneNum' placeholder='연락가능한 연락처를 하이픈(-) 없이 입력해주세요' />
                                    </td>
                                </tr>
                                <tr>
                                    <th>이용 인원 <span className='star'></span></th>
                                    <td>
                                        <input type="text" name='useNum' id='useNum' onChange={useNumHandler} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>가격 <span className='star'></span></th>
                                    <td>
                                        <input type="text" name='price' id='price' value={rentPrice} placeholder='선택한 시설에서 가져오기' />
                                    </td>
                                </tr>
                            </tbody>
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