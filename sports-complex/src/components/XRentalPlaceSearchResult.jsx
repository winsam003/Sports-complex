import './XRentalPlaceSearchResult.css'
import axios from 'axios';
import { useEffect, useState } from 'react'

export default function XRentalPlaceSearchResult() {
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
    return (


        <div>
            <div className='XRentalPlaceSearchResult_SearchResult_div'>
                {/* 조회결과 index */}
                <div className='XRentalPlaceSearchResult_SearchResult_index'>
                    <p>선택</p>
                    <p>시설 코드</p>
                    <p>시설 종류</p>
                    <p>시설 이름</p>
                    <p>현재 운영 정보</p>
                </div>
                {/* 조회결과 */}

                {spacelist.map(({spacecode, spacename, spaceprice, parkspace, parking }, index) => (
                <div className='XRentalPlaceSearchResult_SearchResult'>
                    <div className='XRentalPlaceSearchResult_SearchResult_input'>
                        <input type="checkbox" />
                    </div>
                    <p>{spacecode}</p>
                    <p>{spacecode.substring(2, 4) === 'PA'? '주차장' : '경기장'}</p>
                    <p>{spacename}</p>
                    {/* <p>{spaceprice}</p> */}
                    <p>{parkspace-parking==0 ? '대관 불가' : '가능'}</p>
                </div>  
                ))}
            </div>
        </div>
    )
}