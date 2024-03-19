import './PlaceRentalContent.css'
import Submenu from './Submenu'
import PlaceRentalSearch from './PlaceRentalSearch'
import PlaceRentalSearchList from './PlaceRentalSearchList'

// 수강 신청
export default function PlaceRentalContent() {
    return (
        <div className='board_div'>
            <Submenu />
            <PlaceRentalSearch />
            <div className='RentalSearchButton'>
                <button>조회</button>
                <button>초기화</button>
            </div>
            <PlaceRentalSearchList />

        </div>
    )
}