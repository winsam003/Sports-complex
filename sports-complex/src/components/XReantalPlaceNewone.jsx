import { useEffect, useState } from 'react'
import './XReantalPlaceNewone.css'
import axios from 'axios';

export default function XReantalPlaceNewone() {

    // =================== 카테고리 합쳐서 코드 만들기 =============================
    const [placeType, setPlaceType] = useState("");
    const [spacelist, setSpaceList] = useState([]);

    // 시설 코드 만들기
    const placeTypeCode = (e) =>{
        // placeType 담아주기.
        setPlaceType(e);
        // spacelist 불러오기. filter 거를 예정.
        axios.get('/space/spacelist')
            .then((list) => {
                setSpaceList(list.data);
            }).catch((error) => {
                console.log("Error: ", error);
            })
    }

    useEffect(() => {
        // placeType 배열에서 찾아서 배열 길이 (갯수) count 에 담기.
        const count = spacelist.filter(space => space.spacecode.substring(2, 4) === placeType).length;
        
        console.log("placeType=" + placeType);
        console.log("count=" + count);

        // 시설 기본 코드
        const facilityCode = 'FE';
        // 주차장이면 F 아니면 C 
        let facilityLast = (placeType === 'PA'? 'F' : 'C');
 
        // 전체 코드 만들어주기. (기본코드 + 시설 타입 + 번호 + 코트/층)
        const fullCode = facilityCode + placeType + (count +1) + facilityLast;
        console.log("fullCode="+fullCode);
        
    }, [spacelist]);

    //===============================================================================================

    // 이름, 가격 Hook
    const [placeName, setPlaceName] = useState("");
    const [placePrice, setPlacePrice] = useState("");
    const [placeCount, setPlaceCount] = useState("");

    const makePlaceName = (e) => {
        setPlaceName(e);
    }
    // console.log(placeName);
    
    const makePlacePrice = (e) => {
        setPlacePrice(e);
    }
    // console.log(placePrice);
    
    const makePlaceCount = (e) => {
        setPlaceCount(e);
    }
    // console.log(placeCount);
    

    // 등록 버튼. onClick
    const spaceInsert = () => {
        console.log(!placeType);
        if(placeType){
            if (placeName) {
                if(placePrice) {

                    
                } else{
                    alert('대관 시설 가격을 입력해주세요. ');
                }
            } else{
                alert('대관 시설명을 입력해주세요. ');
            }
        } else {
            alert('대관 시설 종류를 선택해주세요. ');
        }
    }


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
                
                <p>시설 이름</p>
                <input type="text" name='placeName' id='placeName'  
                                                placeholder='시설 이름을 입력하세요.'
                                                value={placeName}
                                                onChange={(e) => makePlaceName(e.target.value)} ></input>

                <p>시설 가격</p>
                <input type="text" name='placePrice' id='placePrice' 
                                                placeholder='숫자를 입력하시오.'
                                                value={placePrice}
                                                onChange={(e) => makePlacePrice(e.target.value)} ></input>
                <p>시설 자리 수</p>
                <input type="text" name='placeCount' id='placeCount' 
                                                placeholder='숫자를 입력하시오.'
                                                value={placeCount}
                                                onChange={(e) => makePlaceCount(e.target.value)} ></input>

            </div>
            <div className='XBtnInsertPrev'>
                <button name='submit' id='submit' onClick={spaceInsert}>등록</button>
                <button>목록</button>
            </div>
        </div>
    )
}