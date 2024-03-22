import './XEventControllContent.css'
import XEventSearch from './XEventSearch';
import XBoardSearchResult from './XBoardSearchResult'
import XResetDeleteBtn from './XBtnResetDelete'
import Submenu from './Submenu';

export default function XEventControllContent() {
    return (
        <div className='XEventControllContent_div'>
            <Submenu />
            <div className='XEventControllContent_div_div'>
                <XEventSearch />
                <XBoardSearchResult />
                <XResetDeleteBtn />
            </div>
        </div>
    )
}
