import './XFaqControllContent.css'
import XFaqSearchBox from './XFaqSearchBox';
import XBoardSearchResult from './XBoardSearchResult'
import XResetDeleteBtn from './XBtnResetDelete'
import Submenu from './Submenu';

export default function XFaqControllContent() {
    return (
        <div className='XFaqControllContent_div'>
            <Submenu />
            <div className='XFaqControllContent_div_div'>
                <XFaqSearchBox />
                <XBoardSearchResult />
                <XResetDeleteBtn />
            </div>
        </div>
    )
}
