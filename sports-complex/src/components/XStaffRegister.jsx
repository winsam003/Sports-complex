import './XStaffRegister.css'
import Submenu from './Submenu';
import XStaffRegisterContent from './XStaffRegisterContent';

export default function XStaffRegister({ roleList }) {
    return (
        <div className='XStaffRegister_div'>
            <Submenu />
            <div className='XStaffRegister_div_div'>
                <XStaffRegisterContent roleList={ roleList }/>
            </div>
        </div>
    )
}