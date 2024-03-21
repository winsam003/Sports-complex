import './XlectureInfo.css';
import Submenu from './Submenu';
import XlectureList from './XlectureList';


export default function XlectureInfo(){
    return(
        <div className='XlectureInfo'>
            <Submenu />
            <XlectureList />
        </div>
    )
}