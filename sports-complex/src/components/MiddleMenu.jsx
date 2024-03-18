import "./MiddleMenu.css"
import {Link} from 'react-router-dom';

export default function MiddleMenu() {
    return (
        <div className="middlemenu">
            <Link to='/FacilityInformationPage'><span>체육 시설 안내</span></Link>
            <Link to=''><span>수업 일정표</span></Link>
            <Link to='/BoardPage'><span>공지사항</span></Link>
            <Link to=''><span>이벤트</span></Link>
            <Link to=''><span>수강 신청</span></Link>
            <Link to=''><span>경기 신청</span></Link>
        </div>
    )
}



