import './XRentalPlaceSerachBox.css'

export default function XRentalPlaceSearchBox() {
    return (
        <div>
            <div className='XRentalPlaceSearchBox_div'>
                <div className='XRentalPlaceSearchBox_MainCategory'>
                    <span>대분류</span>
                    <select className='XRentalPlaceSearchBox_MainCategory_select'>
                        <option value="">종목1</option>
                        <option value="">종목2</option>
                        <option value="">종목3</option>
                    </select>
                </div>
                <div className='XRentalPlaceSearchBox_SubCategory'>
                    <span>소분류</span>
                    <select className='XRentalPlaceSearchBox_SubCategory_select'>
                        <option value="">세부종목1</option>
                        <option value="">세부종목2</option>
                        <option value="">세부종목3</option>
                    </select>
                </div>
                <div className='XRentalPlaceSearchBox_Sugangtitle'>
                    <span>강좌명</span>
                    <input type='text'>
                    </input>
                </div>
            </div>
        </div>
    )
}
