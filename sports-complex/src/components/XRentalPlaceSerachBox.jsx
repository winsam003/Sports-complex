import './XRentalPlaceSerachBox.css'

export default function XRentalPlaceSearchBox() {
    return (
        <div>
            <div className='XRentalPlaceSearchBox_div'>
                <div className='XRentalPlaceSearchBox_MainCategory'>
                    <span>시설 대분류</span>
                    <select className='XRentalPlaceSearchBox_MainCategory_select'>
                        <option value="전체">전체</option>
                        <option value="경기장">경기장</option>
                        <option value="주차장">주차장</option>
                    </select>
                </div>
                <div className='XRentalPlaceSearchBox_SubCategory'>
                    <span>시설 소분류</span>
                    <select className='XRentalPlaceSearchBox_SubCategory_select'>
                        <option value="전체">전체</option>
                        <option value="농구장">농구장</option>
                        <option value="풋살장">풋살장</option>
                        <option value="테니스장">테니스장</option>
                    </select>
                </div>
                <div className='XRentalPlaceSearchBox_Sugangtitle'>
                    <span>검색</span>
                    <input type='text'>
                    </input>
                </div>
            </div>
        </div>
    )
}
