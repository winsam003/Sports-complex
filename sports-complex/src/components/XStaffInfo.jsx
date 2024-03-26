import './XStaffInfo.css'
import Submenu from './Submenu';
import XStaffList from './XStaffList';
import XBtnResetDelete from './XBtnResetDelete';

export default function XStaffInfo() {
    return (
        <div className='XStaffInfo_div'>
            <Submenu />
            <div className='XStaffInfo_div_div'>
                <XStaffList />
                <XBtnResetDelete />
            </div>
        </div>
    )
}