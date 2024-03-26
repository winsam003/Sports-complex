import './XStaffRegister.css'
import Submenu from './Submenu';
import XStaffRegisterContent from './XStaffRegisterContent';

export default function XStaffRegister() {
    return (
        <div className='XStaffRegister_div'>
            <Submenu />
            <div className='XStaffRegister_div_div'>
                <XStaffRegisterContent />
            </div>
        </div>
    )
}