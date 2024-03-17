import "./MiddleMenu.css"
import {Link} from 'react-router-dom';

export default function MiddleMenu() {
    return (
        <div className="middlemenu">
            <span>체육 시설 안내</span>
            <span>수업 일정표</span>
            <span>공지사항</span>
            <span>문의 등록</span>
            <span>수강 신청</span>
            <span>경기 신청</span>
        </div>
    )
}



