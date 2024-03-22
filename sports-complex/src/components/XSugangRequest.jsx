import './XSugangRequest.css'
import Submenu from './Submenu';
import XclassSearchBox from './XclassSearchBox';
import XSugangRequestSearchResult from './XSugangRequestSearchResult';
import XBtnResetDelete from './XBtnResetDelete';

export default function XSugangRequest() {
    return (
        <div className='XSugangRequest_div'>
            <Submenu />
            <div className='XSugangRequest_div_div'>
                <XclassSearchBox />
                <XSugangRequestSearchResult />
                <XBtnResetDelete />
            </div>
        </div>
    )
}