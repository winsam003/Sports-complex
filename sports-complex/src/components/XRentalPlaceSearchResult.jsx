import './XRentalPlaceSearchResult.css'
import axios from 'axios';
import { useEffect, useState } from 'react'

export default function XRentalPlaceSearchResult({checkList, setCheckList, refreshList, inputReset, setInputReset, handleReset, searchPlace}) {

    // 리스트 출력
    const [spacelist, setSpaceList] = useState([]);

    useEffect(() => {
        fetchSpaceList();
    }, [refreshList]);
    
    const fetchSpaceList = () =>{
        axios.get('/space/spacelist')
            .then((list) => {

                setSpaceList(list.data);
                console.log(`list.data: ${list.data}`);    
    
            }).catch((error) => {
                console.log("Error: ", error);
            })
    }

    // 체크한거에 spacecode 가져가기. 
    const handleDeletePlace = (event) => {
        // value 값, 체크값.
        const spacecode = event.target.value;
        const isChecked = event.target.checked;

        // 체크 항목 value 배열. 
        let updatedCheckList = [...checkList];

        const space = spacelist.find(item => item.spacecode === spacecode);
        if (isChecked && space) {
            // 배열에 넣어주기
            updatedCheckList.push(spacecode);
        } else {
            updatedCheckList = updatedCheckList.filter(code => code !== spacecode);
        }
        setCheckList(updatedCheckList);

    }

    const handleSelectedChange = (selectedList) => {
        setCheckList(selectedList);
    }
    

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

                {spacelist
                    .filter(space => {
                        return ((
                            (searchPlace.mainCategory === (space.spacecode.substring(2, 4) === 'PA' ? '주차장' : '경기장')) || searchPlace.mainCategory === '전체'
                        ) && (
                            searchPlace.subCategory === '전체' || (space.spacename).includes(searchPlace.subCategory)

                        ) && (
                            searchPlace.searchValue ==='' || space.spacename.includes(searchPlace.searchValue) 
                        ))
                    })
                    .map(({ spacecode, spacename, parkspace, parking }, index) => (
                    <div className='XRentalPlaceSearchResult_SearchResult'>
                        <div className='XRentalPlaceSearchResult_SearchResult_input'>
                            <input checked={checkList.includes(spacecode)} //체크리스트에 담겼다면 .
                                   type="checkbox"
                                   value={spacecode}
                                   onChange={handleDeletePlace} 
                                />
                        </div>
                        <p>{spacecode}</p>
                        <p>{spacecode.substring(2, 4) === 'PA' ? '주차장' : '경기장'}</p>
                        <p>{spacename}</p>
                        <p>{parkspace - parking == 0 ? '대관 불가' : '가능'}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}