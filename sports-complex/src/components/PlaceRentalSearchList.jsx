import { useEffect, useState } from 'react'
import './PlaceRentalSearchList.css'


export default function PlaceRentalSearchList({ handleRentPrice, sprNumHandler, spacelist }) {

    // 가격 가져가기
    // 한개만 체크하기

    const [selectedCheckBox, setSelectedCheckBox] = useState(null);
    const handleRentPriceValue = (event) => {
        const spacecode = event.target.value;
        setSelectedCheckBox(spacecode);


        const isChecked = event.target.checked;
        const space = spacelist.find(item => item.spacecode.spacecode === spacecode);
        if (isChecked && space) {
            handleRentPrice(space.spacecode.spaceprice);
            sprNumHandler(space.sprnum);
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
                    .filter(({ spacecode }) => spacecode.spacecode.substring(2, 4) !== 'PA')
                    .map(({spacecode, sprnum, id}, index) => (
                        <div key={index} className='PlaceRentalSearchList_content'>
                            <span className='PlaceRentalSearchList_number'>{sprnum}</span>
                            <span><input type="checkbox"
                                value={spacecode.spacecode}
                                checked={selectedCheckBox === spacecode.spacecode}
                                onChange={handleRentPriceValue}
                                disabled={id !== null ? true : false} /></span>
                            <span>{spacecode.spacename}</span>
                            <span>{spacecode.spaceprice} 원</span>
                            <span>{id !== null ? '대관 불가' : '가능'}</span>
                        </div>
                    ))}

            </div>
        </div>
    )
}

