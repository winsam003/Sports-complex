import './XlectureInfo.css';
import Submenu from './Submenu';
import XlectureList from './XlecturerList';
import XlecturerListButton from './XlecturerListButton';


export default function XlectureInfo() {
    return (
        <div className='XlectureInfo_Box'>
            <Submenu />
            <div className='XlectureInfo'>
                <XlectureList />
                <XlecturerListButton />
            </div>
        </div>
    )
}