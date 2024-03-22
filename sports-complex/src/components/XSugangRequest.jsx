import './XSugangRequest.css'
import Submenu from './Submenu';
import XclassSearchBox from './XclassSearchBox';

export default function XSugangRequest() {
    return (
        <div className='XSugangRequest_div'>
            <Submenu />
            <div className='XSugangRequest_div_div'>
                <XclassSearchBox />
            </div>
        </div>
    )
}