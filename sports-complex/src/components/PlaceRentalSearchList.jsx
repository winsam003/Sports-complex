import { useEffect, useState } from 'react'
import './PlaceRentalSearchList.css'
import axios from 'axios';

export default function PlaceRentalSearchList() {

    const [spacelist, setSpaceList] = useState([]);

    useEffect(() => {
        axios.get('/space/spacelist')
        .then((list) => {
            setSpaceList(list.data);
            console.log(`list.data: ${list.data}`);
        }).catch((error) => {
            console.log("Error: ",error);
        })
    },[])

    // console.log(`spacelist: ${spacelist}`);
    // console.log(JSON.stringify(spacelist));


    return (
        <div>
            <div className='PlaceRentalSearchList_div'>
                <div className='PlaceRentalSearchList_index'>
                    <span>선택</span>
                    <span>시설명</span>
                    <span>요일</span>
                    <span>시간</span>
                    <span>금액</span>
                    <span>구분</span>
                </div>
                {spacelist.map(({spacecode, spacename, spacepos, spaceprice, parkspace, parking }, index) => (
                <div key={index} className='PlaceRentalSearchList_content'>
                    <span><input type="checkbox" /></span>
                    {/* <span>{it.}</span> */}
                    <span>{spacename}</span>
                    <span>월, 수, 금</span>
                    <span>15시-17시</span>
                    <span>{spaceprice}</span>
                    <span>{parkspace}</span>
                </div>
                ))}

            </div>
        </div>
    )
}

                