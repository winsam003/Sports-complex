import './XuserInfo.css';
import Submenu from './Submenu';
import XuserInfoList from './XuserInfoList';

export default function XuserInfo(){
    return(
        <div className='XuserInfo_box'>
            <Submenu />
            <XuserInfoList />
        </div>
    )
}