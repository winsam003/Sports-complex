
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeDetail.css';
import { TbUser } from "react-icons/tb";
import { TbLock } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { TbCalendar } from "react-icons/tb";
import { useState } from 'react';
import axios from 'axios';
import { CiViewList } from "react-icons/ci";
import { BsQrCode } from "react-icons/bs";
import { GrContactInfo } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";

export default function HomeDetail({ setLogincheck, loginCheck, logout }) {

    // **********************************slick settings 시작***********************************//
    const settings = {
        dots: false,            // 하단 페이지 위치 점 표시
        infinite: true,         // 끝에 도달하면 슬라이드 무한루프
        speed: 500,             // 슬라이드 전환 속도
        slidesToShow: 1,        // 한번에 보여지는 슬라이드 수
        slidesToScroll: 1,      // 한번에 스크롤되는 슬라이드 수
        autoplay: true,         // 자동 재생 기능
        autoplaySpeed: 3000,    // 자동 재생 시 다음 슬라이드 전환 속도
        arrows: false           // 페이지전환 화살표 숨기기
    };
    // **********************************slick settings 끝***********************************//





    // ********************************로그인 시작*************************************//
    const navigate = useNavigate();

    // 1. 로그인, 비밀번호 정보를 저장한다.
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    // 2. 로그인 버튼을 누른 순간 서버로 axios 요청을 보낸다.

    const requestLogin = () => {
        axios.post('/member/mlogin', { id, password })
            .then((response) => {
                // 3. 200번일 경우 로그인성공 alert창 띄우고 홈페이지로 이동
                sessionStorage.setItem('userData', JSON.stringify(response.data));
                alert(`안녕하세요 ${response.data.userName} 님`);
                setLogincheck(!loginCheck);
                navigate('/');
            }).catch((error) => {
                // 4. 그 외일 경우 alert창 띄우고 재 로그인 유도
                alert("로그인 정보가 없습니다. 다시 로그인 해주세요.");
                console.log("login Error occured => " + error)
            })
    }

    let getUserName;
    let getUserID;

    if (sessionStorage.getItem('userData') != null) {
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        getUserName = userData.userName;
        getUserID = userData.userID;
    }
    // ********************************로그인 끝*************************************//
    





    return (
        <div className='homeDetail_container'>
            <div className='homeDetail_items1'>
                <div>
                    <input type="text" placeholder='검색어를 입력해주세요.' />
                    <input type="submit" value='검색' />
                </div>
                <div>
                    <div className='homeDetail_Calenderbox'>
                        <div className='homeDetail_CalendarCaption'>월간일정<TbCalendar className='homeDetail_Icon' /></div>
                        <div className='homeDetail_Calendar'>
                            <div>1월</div>
                            <div>2월</div>
                            <div>3월</div>
                            <div>4월</div>
                            <div>5월</div>
                            <div>6월</div>
                            <div>7월</div>
                            <div>8월</div>
                            <div>9월</div>
                            <div>10월</div>
                            <div>11월</div>
                            <div>12월</div>
                        </div>
                    </div>
                    <div className='slideBox'>
                        <Slider {...settings}>
                            <div>
                                <img className='slide1' src='img/seungnamFC.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/show.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/IU.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/ballleague.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/mainPic1.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/jumuk.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/moon.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/zzanggu.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/snoopy.jpg' />
                            </div>
                        </Slider>
                    </div>
                </div>


            </div>
            <div className='homeDetail_items2'>
                {getUserName == null ?
                    <div className='homeDetail_items2_fir'>
                        <table className='homeDetail_loginbox'>
                            <tbody>
                                <tr>
                                    <th><TbUser className='homeDetail_Icon' /></th>
                                    <td><input type="text" placeholder='아이디를 입력하세요.' onChange={(e) => setId(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <th><TbLock className='homeDetail_Icon' /></th>
                                    <td><input type="password" placeholder='비밀번호를 입력하세요.' onChange={(e) => setPassword(e.target.value)} /></td>
                                </tr>
                                <tr className="homeDetail_login">
                                    <td></td>
                                    <td><input onClick={requestLogin} value="로그인" id='homeDetail_loginbtn' /></td>
                                </tr>
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                        <div className='homeDetail_helpLogin'>
                            <Link to="/FindIDPage">아이디찾기</Link>
                            <Link to="/FindPasswordPage">비밀번호찾기</Link>
                            <Link to="/JoinPage1">회원가입</Link>
                        </div>
                    </div>
                    :
                    <div className='homeDetail_loginDiv'>
                        <div className='homeDetail_loginUserName'>{getUserName} 님</div>
                        <div className='homeDetail_firstMenuBox'>
                            <Link to='/ApplicationDetailsPage' className='homeDetail_firstMenuBox_s1'><CiViewList className='homeDetail_icons'/>신청내역</Link>
                            <Link to='/QRCodePage' span className='homeDetail_firstMenuBox_s2'><BsQrCode className='homeDetail_icons'/>QR코드</Link>
                            <Link to='/ModifyMemberPage'  className='homeDetail_firstMenuBox_s3'><GrContactInfo className='homeDetail_icons'/>내 정보 수정</Link>
                            <Link to='/PasswordChangePage'  className='homeDetail_firstMenuBox_s4'><RiLockPasswordLine className='homeDetail_icons'/>비밀번호 수정</Link>
                        </div>
                        <div className='homeDetail_lastMenuBox'>
                            <span onClick={() => { logout(); setLogincheck(!loginCheck); }}><IoIosLogOut className='homeDetail_icons'/>로그아웃</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};