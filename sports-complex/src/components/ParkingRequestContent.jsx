import './ParkingRequestContent.css'
import Submenu from './Submenu'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function ParkingRequestContent() {

    const [spacelist, setSpaceList] = useState([]);

    useEffect(() => {
        axios.get('/space/spacelist')
            .then((list) => {
                setSpaceList(list.data);
                console.log(`list.data: ${list.data}`);
            }).catch((error) => {
                console.log("Error: ", error);
            })
    }, [])


    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <div className='board_div_div'>
                    <table className='parknotice'>
                        <thead>
                            <tr>
                                <td></td>
                                <td>잔여 자리 수 </td>
                            </tr>
                        </thead>
                        <tbody>
                            {spacelist
                                .filter(({ spacecode }) => spacecode.substring(2, 4) === 'PA')
                                .map(({ spacename, parkspace, parking }, index) => (
                                    <tr key={index}>
                                        <td>{spacename}</td>
                                        <td>{parkspace - parking}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className='ParkingRequestInfo'>
                        <div className='ParkingRequest_p1'>
                            <p>주차장 위치</p>
                        </div>
                        <div className='ParkingRequestInfo_content_div'>
                            <select>
                                <option value="지하1층" key="1">지하1층</option>
                                <option value="지하2층" key="2">지하2층</option>
                                <option value="지하3층" key="3">지하3층</option>
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
