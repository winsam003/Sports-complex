import './XhomeBannerEventContent.css'

export default function XhomeBannerEventContent({bannerNum, eventCode, bannerImage, eventName, eventFacility}) {
    return(
        <div className="XhomeBannerEventContent_Box">
            <div className="XhomeBannerEventContent_contents">
                <span><input type="checkbox" /></span>
                <span>{bannerNum}</span>
                <span>{eventCode}</span>
                <span>{bannerImage}</span>
                <span>{eventName}</span>
                <span>{eventFacility}</span>
            </div>
        </div>
    )

    
}

