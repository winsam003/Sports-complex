import './ParkingRequestContent.css'
import Submenu from './Submenu'
import { Link } from 'react-router-dom'

export default function ParkingRequestContent() {
    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <div className='board_div_div'>
                    <div className='ParkingRequestInfo'>
                        <div className='ParkingRequest_p1'>
                            <p>주차장 위치</p>
                        </div>
                        <div className='ParkingRequestInfo_content_div'>
                            <select>
                                <option value="" key="">지하1층</option>
                                <option value="" key="">지하2층</option>
                                <option value="" key="">지하3층</option>
                                <option value="" key="">지하4층</option>
                            </select>
                        </div>
                        <div className='ParkingRequest_p2'>
                            <p>신청자</p>
                        </div>
                        <div className='ParkingRequest_name'>
                            <input type='text'></input>
                        </div>
                        <div className='ParkingRequest_p3'>
                            <p>전화번호</p>
                        </div>
                        <div className='ParkingRequestInfo_borderbox3'>
                            <input type='text'></input>
                            <input type='checkbox'></input>
                            <span className='ParkingRequestInfo_span'> 회원가입시 등록한 전화번호 선택</span>
                        </div>
                        <div className='ParkingRequest_p4'>
                            <p>차량번호</p>
                        </div>
                        <div className='ParkingRequestInfo_borderbox4'>
                            <input type='text'></input>
                            <input type='checkbox'></input>
                            <span className='ParkingRequestInfo_span'> 회원가입시 등록한 차량번호 선택</span>
                        </div>
                    </div>
                    <div className='ParkingRequestButton'>
                        <button>신청</button>
                        <button>초기화</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
