import './Header.css';
import { Link } from 'react-router-dom';

// import JoinPage1 from './Pages/JoinPage1';
// import FacilityInformationPage from './Pages/FacilityInformationPage';
// import BoardPage from './Pages/BoardPage';
// import FrequentlyAskedPage from './Pages/FrequentlyAskedPage';
// import Qna from './Pages/Qna';
// import Faq from './Pages/Faq';
// import Sugang from './Pages/Sugang';
// import ClassSchedule from './ClassSchedule';
// import ManagementPage from './ManagementPage';

import { TbUserPlus } from "react-icons/tb";

export default function Header() {
    return (
        <header>
            <div>
                <div className='goHome'><Link to='/'></Link></div>
                <Link to='/ManagementPage' className='noneHeader'>관리자 페이지 전환</Link>
                <Link to='/LoginPage' className='noneHeader'>로그인/로그아웃</Link>
                <Link to='/JoinPage1' className='Header_join'>회원가입<TbUserPlus className='Header_Icon' /></Link>
            </div>
            <div className='Header_clickMenu'>
                <div className='Header_logo'><Link to="/">홈으로</Link></div>
                <Link to='/FacilityInformationPage' className='Header_mainHeader Header_Header1'>체육시설</Link>
                <Link to='/BoardPage' className='Header_mainHeader Header_Header2'>고객센터</Link>
                <Link to='/EventBoardPage' className='Header_mainHeader Header_Header3'>정보마당</Link>
                <Link to='/Sugang' className='Header_mainHeader Header_Header4'>이용신청</Link>
                <Link to='/ApplicationDetailsPage' className='Header_mainHeader Header_Header5'>마이페이지</Link>
            </div>
            <div className='Header_mainMenu'>
                <div>
                    <div></div>
                    <ul>
                        <li></li>
                    </ul>
                    <ul>
                        <li className='Header_subMenu Header_Menutitle1'><Link to='/BoardPage' >공지사항</Link></li>
                        <li className='Header_subMenu Header_Menutitle2'><Link to='/Faq' >자주하는 질문</Link></li>
                        <li className='Header_subMenu Header_Menutitle3'><Link to='/Qna' >문의 게시판</Link> </li>
                    </ul>
                    <ul>
                        <li className='Header_subMenu Header_Menutitle4'><Link to='/EventBoardPage' >이벤트</Link></li>
                        <li className='Header_subMenu Header_Menutitle5'><Link to='/ClassSchedulePage' >수업 일정표</Link></li>
                    </ul>
                    <ul>
                        <li className='Header_subMenu Header_Menutitle6'><Link to='/Sugang' >수강 신청</Link></li>
                        <li className='Header_subMenu Header_Menutitle7'><Link to='/PlaceRentalInfo' >대관 신청</Link></li>
                        <li className='Header_subMenu Header_Menutitle8'><Link to='/ParkingRequest'>주차 신청</Link></li>
                    </ul>
                    <ul>
                        <li className='Header_subMenu Header_Menutitle9'><Link to='/ApplicationDetailsPage' >신청내역</Link></li>
                        <li className='Header_subMenu Header_Menutitle10'><Link to='/QRCodePage' >QR코드</Link></li>
                        <li className='Header_subMenu Header_Menutitle11'><Link to='/ModifyMemberPage' >내 정보 수정</Link></li>
                        <li className='Header_subMenu Header_Menutitle12'><Link to='/PasswordChangePage' >비밀번호 수정</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};