import './XBoardControllContent.css'
import XBoardSearchBox from './XBoardSearchBox';
import XBoardSearchResult from './XBoardSearchResult'
import XResetDeleteBtn from './XBtnResetDelete'
import Submenu from './Submenu';

export default function XBoardControllContent() {
    return (
        <div className='XBoardControllContent_div'>
            <Submenu />
            <div className='XBoardControllContent_div_div'>
                <XBoardSearchBox />
                {/* <XBoardSearchResult /> */}
                <XResetDeleteBtn />
            </div>
        </div>
    )
}
