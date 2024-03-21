import './XRentalPlaceSearchResult.css'

export default function XRentalPlaceSearchResult() {
    return (
        <div>
            <div className='XRentalPlaceSearchResult_SearchResult_div'>
                {/* 조회결과 index */}
                <div className='XRentalPlaceSearchResult_SearchResult_index'>
                    <p>시설 번호</p>
                    <p>시설 종류</p>
                    <p>시설 이름</p>
                    <p>현재 운영 정보</p>
                </div>
                {/* 조회결과 */}
                <div className='XRentalPlaceSearchResult_SearchResult'>
                    <p>999999</p>
                    <p>농구</p>
                    <p>승승장구 스포츠센터 제1농구장</p>
                    <p>임시 휴장</p>
                </div>
            </div>
        </div>
    )
}