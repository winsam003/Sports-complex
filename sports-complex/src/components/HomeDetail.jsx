import './HomeDetail.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomeDetail(){

    const settings = {
        dots: false,            // 하단 페이지 위치 점 표시
        infinite: true,         // 끝에 도달하면 슬라이드 무한루프
        speed: 500,             // 슬라이드 전환 속도
        slidesToShow: 1,        // 한번에 보여지는 슬라이드 수
        slidesToScroll: 1,      // 한번에 스크롤되는 슬라이드 수
        autoplay: true,         // 자동 재생 기능
        autoplaySpeed: 2000,    // 자동 재생 시 다음 슬라이드 전환 속도
        arrows: true           // 페이지전환 화살표 숨기기
        
    };

    return (
        <div className='homeDetail_container'>
            <div className='homeDetail_items1'>
                <div>
                    <input type="text" />
                    <input type="submit" value='검색'/>
                </div>
                <div>
                    <div>
                        <div className='homeDetail_CalendarCaption'>월간일정</div>
                        <div className='homeDetail_Calendar'>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>10</div>
                            <div>11</div>
                            <div>12</div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div>
                            {/* <img className='sliderImg1' src='' /> */}
                            <h3 className='slide'>Slide 1</h3>
                        </div>
                        <div>
                            <h3 className='slide'>Slide 2</h3>
                        </div>
                        <div>
                            <h3 className='slide'>Slide 3</h3>
                        </div>
                        <div>
                            <h3 className='slide'>Slide 4</h3>
                        </div>
                        <div>
                            <h3 className='slide'>Slide 5</h3>
                        </div>
                        <div>
                            <h3 className='slide'>Slide 6</h3>
                        </div>
                        <div>
                            <h3 className='slide'>Slide 7</h3>
                        </div>
                        <div>
                            <h3 className='slide'>Slide 8</h3>
                        </div>
                        <div>
                            <h3 className='slide'>Slide 9</h3>
                        </div>
                        <div>
                            <h3 className='slide'>Slide 10</h3>
                        </div>
                    </Slider>
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
                                <td><input type="submit" value="로그인" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
};