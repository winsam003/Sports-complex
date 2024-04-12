import { useEffect, useState } from 'react'
import './PlaceRentalSearchList.css'
import axios from 'axios';

export default function PlaceRentalSearchList({handleRentPrice}) {

    const [spacelist, setSpaceList] = useState([]);

    useEffect(() => {
        axios.get('/space/spacelist')
        .then((list) => {
            setSpaceList(list.data);
        }).catch((error) => {
            console.log("Error: ",error);
        })
    },[])

    // console.log(`spacelist: ${spacelist}`);
    // console.log(JSON.stringify(spacelist));

    // 가격 가져가기
    // 한개만 체크하기

    const [selectedCheckBox, setSelectedCheckBox] = useState(null);
    const handleRentPriceValue = (event) => {
        const spacecode = event.target.value;
        setSelectedCheckBox(spacecode);
        const isChecked = event.target.checked;
        const space = spacelist.find(item => item.spacecode === spacecode);
        if(isChecked && space) {
            handleRentPrice(space.spaceprice);
        }

        // 선택된 체크박스가 다시 클릭되었을 때, 선택을 해제합니다.
        if (selectedCheckBox === spacecode) {
            setSelectedCheckBox(null);
            handleRentPrice(0);
        } else {
            setSelectedCheckBox(spacecode); // 클릭된 체크박스를 선택 상태로 변경합니다.
        }
    }


    return (
        <div>
            <div className='PlaceRentalSearchList_div'>
                <div className='PlaceRentalSearchList_index'>
                    <span>선택</span>
                    <span>시설명</span>
                    <span>금액</span>
                    <span>구분</span>
                </div>

                {spacelist
                    .filter(({spacecode}) => spacecode.substring(2, 4) !== 'PA')
                    .map(({spacecode, spacename, spaceprice, parkspace, parking }, index) => (
                    <div key={index} className='PlaceRentalSearchList_content'>
                        <span><input type="checkbox" 
                                    value={spacecode}
                                    checked={selectedCheckBox === spacecode}
                                    onChange={handleRentPriceValue}
                                    disabled={parkspace - parking === 0}/></span>
                        <span>{spacename}</span>
                        <span>{spaceprice} 원</span>
                        <span>{parkspace-parking==0 ? '대관 불가' : '가능'}</span>
                    </div>
                ))}

            </div>
        </div>
    )
}

                