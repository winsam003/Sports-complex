import './XlectureInfo.css';
import Submenu from './Submenu';
import XlectureList from './XlecturerList';


export default function XlectureInfo(){
    return(
        <div className='XlectureInfo'>
            <Submenu />
            <XlectureList />
        </div>
    )
}