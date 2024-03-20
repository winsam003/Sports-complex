import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeDetail.css';

export default function HomeDetail(){

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

    return (
        <div className='homeDetail_container'>
            <div className='homeDetail_items1'>
                <div>
                    <input type="text" placeholder='검색어를 입력해주세요.' />
                    <input type="submit" value='검색'/>
                </div>
                <div>
                    <div  className='homeDetail_Calenderbox'>
                        <div className='homeDetail_CalendarCaption'>월간일정</div>
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
                                <img className='slide1' src='img/성남fc.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/흠뻑쇼.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/IU.jpg' />
                            </div>
                            <div>
                                <img className='slide1' src='img/농구.jpg' />
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
                <div>
                    <form action="/" method="post">
                        <table>
                            <tr>
                                <th>I D</th>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <td><input type="password" /></td>
                            </tr>
                            <tr className="homeDetail_login">
                                <td></td>
                                <td><input type="submit" value="로그인" id='homeDetail_loginbtn' /></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
};