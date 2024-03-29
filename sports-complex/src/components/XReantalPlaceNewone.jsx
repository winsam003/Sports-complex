import { useEffect, useState } from 'react'
import './XReantalPlaceNewone.css'
import axios from 'axios';

export default function XReantalPlaceNewone() {

    // =================== 카테고리 합쳐서 코드 만들기 =============================
    const [placeType, setPlaceType] = useState("");

    // 개수 필요함
    const [placeCount, setPlaceCount] = useState(0);

    // useEffect(() => {
    //     makeCodeNum();
    // }, []);

    const [spacelist, setSpaceList] = useState([]);
    // const makeCodeNum = (e) => {
    //     try {
    //         const response = axios.get('/space/spacelist')
    //         .then((list) => {

    //             setSpaceList(list.data);
    //             // console.log(`list.data: ${list.data}`);    
    
    //         }).catch((error) => {
    //             console.log("Error: ", error);
    //         })

    //         // spacelist = response.data;

    //         const count = spacelist.filter(space => space.spacecode.substring(2, 4) === e).length;
    //         console.log("count"+count);
    //         setPlaceCount((e) => {
                
    //         });
    //     } catch (error) {
    //         console.error('Error fetching space list:', error);
    //     }
    // }

    // useEffect((e) => {
    //     axios.get('/space/spacelist')
    //         .then((list) => {

    //             setSpaceList(list.data);
    //             // console.log(`list.data: ${list.data}`);    
    
    //         }).catch((error) => {
    //             console.log("Error: ", error);
    //         })

    //     const count = spacelist.filter(space => space.spacecode.substring(2, 4) === e).length;
    //     console.log("count"+count);

    // }, [placeType]);


    // 코드 만들기
    const placeTypeCode = (e) =>{
        // 시설코드
        const facilityCode = 'FE';
        
        // 내가 고른 시설 코드 e
        setPlaceType(e);
        console.log(e);
        
        // 뒤에 숫자 (이 컬럼의 2~4번째 단어가 e인 애들의 길이보다 1큰 숫자 )
        // makeCodeNum(e);

        axios.get('/space/spacelist')
            .then((list) => {

                setSpaceList(list.data);
                // console.log(`list.data: ${list.data}`);    
    
            }).catch((error) => {
                console.log("Error: ", error);
            })

        const count = spacelist.filter(space => space.spacecode.substring(2, 4) === e).length;
        console.log("count"+count);
        setPlaceCount(e);

        console.log("placeCount="+placeCount);
        
        // 맨 뒤에 코드 (e가 PA 이면 F, 아니면 C)
        let facilityLast = (e === 'PA'? 'F' : 'C');
        
        // 풀 코드 여섯 자리 조합 다 합치기
        const fullCode = facilityCode + e + (placeCount+1) + facilityLast;
        console.log("fullCode="+fullCode);
    }
    
    // categoryCode 안에 있으면 setPlaceType 저장 이랑 동시에 이루어지기 때문에 그 전값이 읽힘. 
    // console.log(placeType);
    // console.log(placeCount);


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