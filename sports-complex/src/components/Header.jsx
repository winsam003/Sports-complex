import './Header.css';
import { Link } from 'react-router-dom';

import JoinPage1 from './Pages/JoinPage1';
import FacilityInformationPage from './Pages/FacilityInformationPage';
import BoardPage from './Pages/BoardPage';
import FrequentlyAskedPage from './Pages/FrequentlyAskedPage';
import Qna from './Pages/Qna';
import Faq from './Pages/Faq';
import Sugang from './Pages/Sugang';

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
                <Link to='/BoardPage'>고객센터</Link>
                <Link to='/EventBoardPage'>정보마당</Link>
                
                <span>이용신청</span>
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
                        <li><Link to='/Faq'>자주하는 질문</Link></li>
                        <li><Link to='/Qna'>문의 게시판</Link> </li>
                    </ul>
                    <ul>
                        <li><Link to='/EventBoardPage'>이벤트</Link></li>
                        <li><Link to='/ClassSchedulePage'>수업 일정표</Link></li>
                    </ul>
                    <ul>
                        <li><Link to='/Sugang'>수강 신청</Link></li>
                        <li><Link to='/PlaceRentalInfo'>대관 신청</Link></li>
                        <li>주차 신청</li>
                    </ul>
                    <ul>
                        <li><Link to='/ApplicationDetailsPage'>신청내역</Link></li>
                        <li><Link to='/QRCodePage'>QR코드</Link></li>
                        <li><Link to='/ModifyMemberPage'>내 정보 수정</Link></li>
                        <li><Link to='/PasswordChangePage'>비밀번호 수정</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};