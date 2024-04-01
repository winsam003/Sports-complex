import './XQnaControllContent.css'
import XQnaSearchBox from './XQnaSearchBox';
import XBoardSearchResult from './XBoardSearchResult'
import XResetDeleteBtn from './XBtnResetDelete'
import Submenu from './Submenu';

export default function XQnaControllContent() {

    return (
        <div className='XQnaControllContent_div'>
            <Submenu />
            <div className='XQnaControllContent_div_div'>
                <XQnaSearchBox />
                <XBoardSearchResult />
                <XResetDeleteBtn />
            </div>
        </div>
    )
}
