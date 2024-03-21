import './Xheader.css';
import { Link } from 'react-router-dom';

import { TbUserPlus } from "react-icons/tb";

export default function Xheader() {
    return (
        <header>
            <div>
                <div className='goHome'><Link to='/'></Link></div>
                <Link to='/ManagementPage' className='noneHeader'>관리자 페이지 전환</Link>
                <Link to='/LoginPage' className='noneHeader'>로그인/로그아웃</Link>
                <Link to='/JoinPage1' className='Header_join'>회원가입<TbUserPlus className='Header_Icon' /></Link>
            </div>
            <div>
                <div className='Header_logo'><Link to="/">홈으로</Link></div>
                <Link to='/ManagementPage' className='Header_mainHeader Header_Header1'>홈 화면 관리</Link>
                <Link to='/UserInfoPage' className='Header_mainHeader Header_Header2'>인적 관리</Link>
                <Link to='/' className='Header_mainHeader Header_Header3'>강의 관리</Link>
                <Link to='/' className='Header_mainHeader Header_Header4'>이용신청 관리</Link>
                <Link to='/' className='Header_mainHeader Header_Header4'>이용신청 관리</Link>
                <Link to='/' className='Header_mainHeader Header_Header5'>게시판 관리</Link>
            </div>
            <div className='Header_mainMenu'>
                <div>
                    <div></div>
                    <ul>
                        <li></li>
                    </ul>
                    <ul>
                        <li className='Header_subMenu Header_Menutitle1'><Link to='/UserInfoPage' >회원정보 관리</Link></li>
                        <li className='Header_subMenu Header_Menutitle2'><Link to='/XlecturePage' >강사정보 관리</Link></li>
                        <li className='Header_subMenu Header_Menutitle3'><Link to='/XlectureRegisterPage' >강사 등록</Link> </li>
                    </ul>
                    <ul>
                        <li className='Header_subMenu Header_Menutitle4'><Link to='/' >강의정보 관리</Link></li>
                        <li className='Header_subMenu Header_Menutitle5'><Link to='/' >신규강의 등록</Link></li>
                    </ul>
                    <ul>
                        <li className='Header_subMenu Header_Menutitle6'><Link to='/' >수강신청 관리</Link></li>
                        <li className='Header_subMenu Header_Menutitle7'><Link to='/' >대관신청 관리</Link></li>
                        <li className='Header_subMenu Header_Menutitle8'><Link to='/'>주차신청 관리</Link></li>
                    </ul>
                    <ul>
                        <li className='Header_subMenu Header_Menutitle6'><Link to='/' >시설 관리</Link></li>
                        <li className='Header_subMenu Header_Menutitle7'><Link to='/' >신규시설 등록</Link></li>
                    </ul>
                    <ul>
                        <li className='Header_subMenu Header_Menutitle9'><Link to='/' >공지사항 관리</Link></li>
                        <li className='Header_subMenu Header_Menutitle10'><Link to='/' >이벤트게시판 관리</Link></li>
                        <li className='Header_subMenu Header_Menutitle11'><Link to='/' >자주하는질문 관리</Link></li>
                        <li className='Header_subMenu Header_Menutitle12'><Link to='/' >문의게시판 &nbsp;관리</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};