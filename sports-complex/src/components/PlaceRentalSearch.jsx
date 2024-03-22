import './PlaceRentalSearch.css'

export default function PlaceRentalSearch() {
    return (
        <div>
            <div className='PlaceRentalSearch_div'>
                <div className='PlaceRentalSearch_MainCategory'>
                    <span>대분류</span>
                    <select className='PlaceRentalSearch_MainCategory_select'>
                        <option value="">종목1</option>
                        <option value="">종목2</option>
                        <option value="">종목3</option>
                    </select>
                </div>
                <div className='PlaceRentalSearch_SubCategory'>
                    <span>소분류</span>
                    <select className='PlaceRentalSearch_SubCategory_select'>
                        <option value="">세부종목1</option>
                        <option value="">세부종목2</option>
                        <option value="">세부종목3</option>
                    </select>
                </div>
                <div className='PlaceRentalSearch_PlaceName'>
                    <span>시설명</span>
                    <input type='text'>
                    </input>
                </div>
            </div>
        </div>
    )
}