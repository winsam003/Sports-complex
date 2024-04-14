import './XmainEvent.css'

import Submenu from './Submenu'
import XeventList from './XeventList'
import { useEffect, useState } from 'react'
import XhomeBannerEventList from './XhomeBannerEventList'
import HomeDetail from './HomeDetail'
import App from './../App';
import { apiCall } from '../apiService/apiService'

export default function XmainEvent() {
    
    // 테스트용 객체입니다 테이블 연결 후 테이블 데이터로 교체할 예정입니다.
    const [eventlist, setEventlist] = useState([]);
    const [bannerlist, setBannerlist] = useState([]);

    useEffect(() => {
        let url = "/event/eventlist";

        apiCall(url, 'get', null, null)
            .then((eventlist) => {
                setEventlist(eventlist);
            }).catch((error) => {
                console.log("eventlist error: ", error);
            })

        // 배너 리스트 뽑기
        showBanner();
    }, []);

    const showBanner = () => {
        let url = "/banner/bannerlist";

        apiCall(url, 'get', null, null) 
            .then((bannerlist)=> {
                setBannerlist(bannerlist);
                console.log(bannerlist);
            }).catch((error) => {
                console.log("bannerlist error : ", error);
            })
    }



    const [checkBanner, setCheckBanner ] = useState([]);

    // const insertMainPic = (eventCode, checked) => {
    //     if(checked) {
    //         setIsChecked([...isChecked, eventCode]);
    //     }else {
    //         setIsChecked(isChecked.filter(code => code !== eventCode ))
    //     }
    // }

    return(
        <div className='XmainEvent_box'>
            <Submenu />
            <div className='XmainEvent_main'>
                <div className='XmainEvent_listTitle'>이벤트 게시물 목록 </div>
                < XeventList eventlist={eventlist} />
                <div className='XmainEvent_upload'>
                    <input type="file" />
                    <input type="submit" value={'제출'} 
                    // onClick={'insertMainPic'} 
                    />
                </div>
                <div className='XmainEvent_listTitle'>홈 배너 광고 리스트 </div>
                <XhomeBannerEventList bannerlist={bannerlist} />
                <div className='XmainEvent_delete' >
                    <button >삭제</button>
                </div>

                <div className='XmainEvent_listTitle'>광고 사진 </div>
                <div className='XmainEvent_adPics'>
                    {bannerlist.map((item, index) => (
                        <div key={item.bannerNum}>
                            <p>{index+1} 번</p>
                            <img src={item.bannerImage} alt="bannerImage" />
                        </div>
                    ))}
                    {/* erd 뽑아오는거. 테이블에 없으면.  */}
                </div>
            </div>
        </div>
    )
}