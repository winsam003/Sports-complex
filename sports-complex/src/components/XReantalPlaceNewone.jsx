import { useEffect, useState } from 'react'
import './XReantalPlaceNewone.css'
import axios from 'axios';

export default function XReantalPlaceNewone() {

    // =================== 카테고리 합쳐서 코드 만들기 =============================
    const [placeType, setPlaceType] = useState("");
    const [spacelist, setSpaceList] = useState([]);

    // 코드 만들기
    const placeTypeCode = (e) =>{
        setPlaceType(e);
        axios.get('/space/spacelist')
            .then((list) => {
                setSpaceList(list.data);
            }).catch((error) => {
                console.log("Error: ", error);
            })
    }

    useEffect(() => {
        const count = spacelist.filter(space => space.spacecode.substring(2, 4) === placeType).length;
        console.log("placeType=" + placeType);
        console.log("count=" + count);

        const facilityCode = 'FE';
        let facilityLast = (placeType === 'PA'? 'F' : 'C');
 
        const fullCode = facilityCode + placeType + (count +1) + facilityLast;
        console.log("fullCode="+fullCode);
    }, [spacelist]);

    return (
        <div>
            <div className='XReantalPlaceNewone'>
                
                <p>대관 시설 종류</p>
                <select name='placeType' id='placeType' value={placeType} 
                        onChange={ (e) => {placeTypeCode(e.target.value)}}>
                    <option value="" >선택</option>
                    <option value="BK" >농구장</option>
                    <option value="FT" >풋살장</option>
                    <option value="PA" >주차장</option>
                    <option value="TE" >테니스장</option>
                </select>
                
                <p>이름</p>
                <input placeholder='등록이면 새로 입력 / 변경이면 기존이름 가져오기'></input>

                <p>가격</p>
                <input placeholder='숫자를 입력하시오.'></input>

            </div>
        </div>
    )
}