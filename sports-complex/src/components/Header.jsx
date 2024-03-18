import './Header.css';
import { Link } from 'react-router-dom';

import JoinPage1 from './Pages/JoinPage1';
import FacilityInformationPage from './Pages/FacilityInformationPage';
import BoardPage from './Pages/BoardPage';

export default function Header() {
    return (
        <header>
            <div>
                <span>관리자 페이지 전환</span>
                <Link to='/LoginPage'>로그인/로그아웃</Link>
                <Link to='/JoinPage1'>회원가입</Link>
            </div>
            <div>
                <div className='Header_logo'><Link to="/">홈으로</Link></div>
                <Link to='/FacilityInformationPage'>체육시설</Link>
                <span>고객센터</span>
                <span>정보마당</span>
                {/* <span>이용신청</span> */}
                <Link to='Inquiry'>이용신청</Link>
                <span>마이페이지</span>
            </div>
            <div className='Header_mainMenu'>
                <div>
                    <div></div>
                    <ul>
                        <li></li>
                    </ul>
                    <ul>
                        <li><Link to='/BoardPage'>공지사항</Link></li>
                        <li>자주하는 질문</li>
                        <li>문의 게시판</li>
                    </ul>
                    <ul>
                        <li>이벤트</li>
                        <li>수업 일정표</li>
                    </ul>
                    <ul>
                        <li>수강 신청</li>
                        <li>대관 신청</li>
                        <li>주차 신청</li>
                    </ul>
                    <ul>
                        <li>신청내역</li>
                        <li>QR코드</li>
                        <li>비밀번호 변경</li>
                        <li>비밀번호 수정</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};