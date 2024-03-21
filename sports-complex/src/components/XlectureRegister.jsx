import './XlectureRegister.css';
import Submenu from './Submenu';
import XlectureRegisterDetail from './XlectureRegisterDetail';

export default function XlectureRegister(){
    return(
        <div className='XlectureRegister_Box'>
            <Submenu />
            <XlectureRegisterDetail />
        </div>
    )
}