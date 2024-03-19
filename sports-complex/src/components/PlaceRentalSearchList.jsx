import './PlaceRentalSearchList.css'

export default function PlaceRentalSearchList() {
    return (
        <div>
            <div className='PlaceRentalSearchList_div'>
                <div className='PlaceRentalSearchList_index'>
                    <span>시설명</span>
                    <span>요일</span>
                    <span>시간</span>
                    <span>금액</span>
                    <span>구분</span>
                </div>
                <div className='PlaceRentalSearchList_content'>
                    <span>종합스포츠센터 다목적체육관</span>
                    <span>월, 수, 금</span>
                    <span>15시-17시</span>
                    <span>100,000</span>
                    <span>신청 가능</span>
                </div>
            </div>
        </div>
    )
}