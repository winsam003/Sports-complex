import './ParkingRequestContent.css'
import Submenu from './Submenu'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { apiCall } from '../apiService/apiService';

export default function ParkingRequestContent({getUserName, getUserID}) {

    const [spacelist, setSpaceList] = useState([]);

    useEffect(() => {
        axios.get('/space/spacelist')
            .then((list) => {
                setSpaceList(list.data);
                // console.log(`list.data: ${list.data}`);
            }).catch((error) => {
                console.log("Error: ", error);
            })
    }, [])

    // 자기 차량 번호 가져오기
    const [isChecked, setIsChecked] = useState(false);

    // 등록 하는거 만들기. 
    const [formPlaceApp, setFormPlaceApp] = useState({
        ID : getUserID, 
        parkPrice : '', 
        spacecode : '', 
        parkUseDate : '2024-05',
        carNum : ''
    })

    // -> 장소
    const [spacecodeApp, setSpacecodeApp] = useState('');
    // -> 가격
    const [spacepriceApp, setSpacepriceApp] = useState('');
    // -> 차번호
    const [myCarNum, setMyCarNum] = useState('');
    // -> 결제 수단
    const [payment, setPayment] = useState('');

    const selectSpacecode = (e) => {
        console.log(e);
        setSpacecodeApp(e);

        // console.log(spacelist.filter(({ spacecode }) => spacecode === e)[0].spaceprice);
        // 장소에 맞는 가격 넣기.
        setSpacepriceApp(spacelist.filter(({ spacecode }) => spacecode === e)[0].spaceprice);

        // *** 필터는 참인 값의 배열을 반환함. ***
    }
    
    // 신청자 


    // 체크박스 체크시 내 차량 번호 가져오기
    const findMyCar = () => {
        const url = "/member/findcar";

        console.log(getUserID);
        if(isChecked) {
            setIsChecked(false);
            setMyCarNum('');
        } else {
            apiCall(url, 'post', getUserID, null)
                .then((response) => {
                    if(response == null){
                        alert('차 번호가 없습니다.');
                    } else {
                        setMyCarNum(response);
                        setIsChecked(true);
                    }
                }).catch((error) => {
                    alert('차량 등록을 실패하였습니다. ');
                    console.log("차 번호 등록 실패 error : ", error);
                })
            
        }
    }

    // 결제수단
    const selectPayment = (e) => {
        setPayment(e);
    }

    // 등록 
    const parkAppSubmit = () => {
        if(!spacecodeApp){
            alert('주차장을 선택해주세요.');
            return;
        }
        if(!myCarNum) {
            alert('차량 번호를 입력해주세요.');
            return;
        }
        if(!payment) {
            alert('결제 수단을 선택해주세요.');
            return;
        }

        let url = ""

        


    }



    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <div className='board_div_div'>
                    <table className='parknotice'>
                        <thead>
                            <tr>
                                <td></td>
                                <td>총 자리 수 </td>
                                <td>잔여 자리 수 </td>
                            </tr>
                        </thead>
                        <tbody>
                            {spacelist
                                .filter(({ spacecode }) => spacecode.substring(2, 4) === 'PA')
                                .map(({ spacename, parkspace, parking }, index) => (
                                    <tr key={index}>
                                        <td>{spacename}</td>
                                        <td>{parkspace}</td>
                                        <td id='parknoticeLast'>{parkspace - parking}</td>
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
                            <select name='spacecode'
                                    onChange={(e) => {selectSpacecode(e.target.value)}} >
                                        <option value=" - ">선택</option>
                                {spacelist
                                    .filter(({spacecode}) => spacecode.substring(2, 4) === 'PA')
                                    .map(({spacename, spacecode}, index) => (
                                        <option value={spacecode} key={index}>{spacename}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='ParkingRequest_p2'>
                            <p>신청자</p>
                        </div>
                        <div className='ParkingRequest_name'>
                            <p>{getUserName}</p>
                        </div>
                        <div className='ParkingRequest_p3'>
                            <p>가격</p>
                        </div>
                        <div className='ParkingRequestInfo_borderbox3'>
                            <p>{spacepriceApp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</p>
                        </div>
                        <div className='ParkingRequest_p4'>
                            <p>차량번호</p>
                        </div>
                        <div className='ParkingRequestInfo_borderbox4'>
                            <input type='text'
                                    value={myCarNum}
                                    readOnly={isChecked}
                                    onChange={(e) => setMyCarNum(e.target.value)} 
                                    placeholder='띄어쓰기 없이 입력해주세요.' />
                            <input type='checkbox' 
                                    id='putCarnum'
                                    onChange={findMyCar} 
                                    checked={isChecked}
                                    /> 
                            <span className='ParkingRequestInfo_span' > <label htmlFor="putCarnum"> 회원가입시 등록한 차량번호 선택</label></span>
                        </div>
                        <div className='ParkingRequest_p5'>
                            <p>결제방식</p>
                        </div>
                        <div className='ParkingRequestInfo_borderbox3'>
                            <select name='parkingPayment'
                                    onChange={(e) => {selectPayment(e.target.value)}} >
                                <option value="card" key="card">카드</option>
                                <option value="cash" key="cash">현금</option>
                            </select>
                        </div>
                    </div>
                    <div className='ParkingRequestButton'>
                        <button onClick={parkAppSubmit}>신청</button>
                        <button>초기화</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
