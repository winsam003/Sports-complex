import './XclassList.css';
import XclassSearchBox from './XclassSearchBox';
import XclassListDetail from './XclassListDetail';

export default function XclassList(){
    return(
        <div className='XclassList_Box'>
            <div className='XclassList_container'>
                <XclassSearchBox />
                <XclassListDetail />
            </div>
        </div>
    )
}