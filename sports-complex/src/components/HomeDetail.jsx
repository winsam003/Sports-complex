import './HomeDetail.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomeDetail(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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