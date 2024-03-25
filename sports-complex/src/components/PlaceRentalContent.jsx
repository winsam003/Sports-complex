import './PlaceRentalContent.css'
import Submenu from './Submenu'
import PlaceRentalSearch from './PlaceRentalSearch'
import XBtnResetSearch from './XBtnResetSearch';
import PlaceRentalSearchList from './PlaceRentalSearchList'
import { Link } from 'react-router-dom'

// 수강 신청
export default function PlaceRentalContent() {
    return (
        <div className='board_div'>
            <Submenu />
            <div className='board_div_div'>
                <PlaceRentalSearch />
                <XBtnResetSearch />
                <PlaceRentalSearchList />
                <div className='PlaceRentalContent_form'>
                    <form action="/" method='post'>
                        <table>
                            <tr>
                                <th>요일 선택 <span className='star'></span></th>
                                <td><input type="text" name='name' id='name' placeholder='선택한 시설에서 가져오기' readOnly /></td>
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
                                    <input type="text" name='phoneNum' id='phoneNum' />
                                </td>
                            </tr>
                            <tr>
                                <th>가격 <span className='star'></span></th>
                                <td>
                                    <input type="text" name='phoneNum' id='phoneNum' placeholder='선택한 시설에서 가져오기' />
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