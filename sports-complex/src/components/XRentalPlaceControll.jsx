import './XRentalPlaceControll.css'
import Submenu from './Submenu';
import XRentalPlaceSearchBox from './XRentalPlaceSerachBox';
import XBtnResetSearch from './XBtnResetSearch';
import XRentalPlaceSearchResult from './XRentalPlaceSearchResult';
import XBtnResetDelete from './XBtnResetDelete';

// 대관 시설 관리
export default function XRentalPlaceControll() {
    return (
        <div className='XRentalPlaceControll_div'>
            <Submenu />
            <div className='XRentalPlaceControll_div_div'>
                <XRentalPlaceSearchBox />
                <XBtnResetSearch />
                <XRentalPlaceSearchResult />
                <XBtnResetDelete />
            </div>
        </div>
    )
}