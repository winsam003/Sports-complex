import './XmainEvent.css'

import Submenu from './Submenu'
import XeventList from './XeventList'
import { useState } from 'react'
import XhomeBannerEventList from './XhomeBannerEventList'
import HomeDetail from './HomeDetail'
import App from './../App';

export default function XmainEvent() {
    
    // 테스트용 객체입니다 테이블 연결 후 테이블 데이터로 교체할 예정입니다.
    const data = [
    {
        "eventCode" : "00001",
        "eventName" : "김수한무두루미 생일잔치",
        "cpCode" : "1",
        "eventUpload" : "24.03.19",
        "eventUploadfile" : "",
    },
    {
        "eventCode" : "00002",
        "eventName" : "장근정 파티",
        "cpCode" : "2",
        "eventUpload" : "24.03.20",
        "eventUploadfile" : "",
    },
    {
        "eventCode" : "00003",
        "eventName" : "리액트리액트 공연",
        "cpCode" : "3",
        "eventUpload" : "24.03.21",
        "eventUploadfile" : "",
    },
    {
        "eventCode" : "00004",
        "eventName" : "이거바이거이거이거",
        "cpCode" : "ㄱㅈ",
        "eventUpload" : "23.03.09",
        "eventUploadfile" : "",
    }
    ]

    // 이미지 있는 더미 데이터
    
    const data2 = [
        {
            "bannerNum" : "11111",
            "eventCode" : "00001",
            "bannerImage" : "img/moon.jpg",

            "eventName" : "김수한무두루미 생일잔치",
            "eventFacility" : "대강당"
        },
        {
            "bannerNum" : "22222",
            "eventCode" : "00002",
            "bannerImage" : "img/zzanggu.jpg",

            "eventName" : "장근정 파티",
            "eventFacility" : "운동장"
        },
        {
            "bannerNum" : "33333",
            "eventCode" : "00003",
            "bannerImage" : "img/jumuk.jpg",

            "eventName" : "리액트리액트 공연",
            "eventFacility" : "그린학원"
        },
        {
            "bannerNum" : "44444",
            "eventCode" : "00004",
            "bannerImage" : "img/ddoddo.gif",

            "eventName" : "리액트리액트 공연",
            "eventFacility" : "그린학원"
        },
        {
            "bannerNum" : "55555",
            "eventCode" : "00005",
            "bannerImage" : "img/jumuk.jpg",

            "eventName" : "리액트리액트 공연",
            "eventFacility" : "그린학원"
        },
        {
            "bannerNum" : "66666",
            "eventCode" : "00006",
            "bannerImage" : "img/jumuk.jpg",

            "eventName" : "리액트리액트 공연",
            "eventFacility" : "그린학원"
        },
        {
            "bannerNum" : "77777",
            "eventCode" : "00007",
            "bannerImage" : "img/jumuk.jpg",

            "eventName" : "리액트리액트 공연",
            "eventFacility" : "그린학원"
        },
        {
            "bannerNum" : "-",
            "eventCode" : "-",
            "bannerImage" : "img/noImage.jpg",

            "eventName" : "-",
            "eventFacility" : "-"
        },
        // {
        //     "bannerNum" : "-",
        //     "eventCode" : "-",
        //     "bannerImage" : "img/noImage.jpg",

        //     "eventName" : "-",
        //     "eventFacility" : "-"
        // },
        // {
        //     "bannerNum" : "-",
        //     "eventCode" : "-",
        //     "bannerImage" : "img/noImage.jpg",

        //     "eventName" : "-",
        //     "eventFacility" : "-"
        // },
    ]



    const [isChecked, setIsChecked] = useState([]);

    const insertMainPic = (eventCode, checked) => {
        if(checked) {
            setIsChecked([...isChecked, eventCode]);
        }else {
            setIsChecked(isChecked.filter(code => code !== eventCode ))
        }
    }

    return(
        <div className='XmainEvent_box'>
            <Submenu />
            <div className='XmainEvent_main'>
                <div className='XmainEvent_listTitle'>이벤트 게시물 목록 </div>
                < XeventList insertMainPic={insertMainPic} data={data} />
                <div className='XmainEvent_upload'>
                    <input type="file" />
                    <input type="submit" value={'제출'} 
                    // onClick={'insertMainPic'} 
                    />
                </div>
                <div className='XmainEvent_listTitle'>홈 배너 광고 리스트 </div>
                <XhomeBannerEventList data2={data2} />
                <div className='XmainEvent_delete' >
                    <button >삭제</button>
                </div>

                <div className='XmainEvent_listTitle'>광고 사진 </div>
                <div className='XmainEvent_adPics'>
                    {data2.map((item, index) => (
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