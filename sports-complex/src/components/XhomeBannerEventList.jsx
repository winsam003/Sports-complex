import XhomeBannerEventContent from './XhomeBannerEventContent';
import './XhomeBannerEventList.css';

export default function XhomeBannerEventList() {

    const data = [
        {
            "bannerNum" : "11111",
            "eventCode" : "00001",
            "bannerImage" : "moon.jpg",

            "eventName" : "김수한무두루미 생일잔치",
            "eventFacility" : "대강당"
        },
        {
            "bannerNum" : "22222",
            "eventCode" : "00002",
            "bannerImage" : "zzanggu.jpg",

            "eventName" : "장근정 파티",
            "eventFacility" : "운동장"
        },
        {
            "bannerNum" : "33333",
            "eventCode" : "00003",
            "bannerImage" : "moon.jpg",

            "eventName" : "리액트리액트 공연",
            "eventFacility" : "그린학원"
        }
    ]

    return(
        <div className="XhomeBannerEventList">
            <div className="XhomeBannerEventList_div">
                <span>선택</span>
                <span>배너 번호</span>
                <span>이벤트 코드</span>
                <span>배너 이미지</span>
                <span>이벤트 이름</span>
                <span>이용시설 </span>
            </div>
            <div className="XhomeBannerEventList_content">
                {data.map((it, index) => (
                    <XhomeBannerEventContent key={index} {...it} />
                ))}
            </div>
        </div>
    )
}
