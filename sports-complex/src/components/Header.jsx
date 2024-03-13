import './Header.css';

export default function Header() {
    return (
        <header>
            <div>
                <span>관리자 페이지로 전환</span>
                <span>로그인/로그아웃</span>
            </div>
            <div>
                <span>로고</span>
                <span>체육시설</span>
                <span>고객센터
                    <ul >
                        <li className='dropdown'>문의게시판</li>
                        <li className='dropdown'>공지사항</li>
                        <li className='dropdown'>자주하는질문</li>
                    </ul>
                </span>
                <span>정보마당
                    <ul >
                        <li className='dropdown'>이벤트</li>
                        <li className='dropdown'>수업 일정표</li>
                    </ul>
                </span>
                <span>이용신청
                    <ul >
                        <li className='dropdown'>수강신청</li>
                        <li className='dropdown'>대관신청</li>
                        <li className='dropdown'>주차신청</li>
                    </ul>
                </span>
                <span>마이페이지
                    <ul >
                        <li className='dropdown'>신청내역</li>
                        <li className='dropdown'>QR코드</li>
                        <li className='dropdown'>회원정보 변경</li>
                        <li className='dropdown'>비밀번호 변경</li>
                    </ul>
                </span>
            </div>
        </header>
    );
};