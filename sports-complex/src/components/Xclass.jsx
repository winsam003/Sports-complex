import './Xclass.css';
import Submenu from './Submenu';
import XclassList from './XclassList';
import XBtnAgreeDisAgreeRefrash from './XBtnAgreeDisAgreeRefrash';

export default function Xclass() {
    return (
        <div className='Xclass_Box'>
            <Submenu />
            <div>
                <XclassList />
                <XBtnAgreeDisAgreeRefrash />
            </div>
        </div>
    )
}