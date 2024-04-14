import './XhomeBannerEventContent.css'

export default function XhomeBannerEventContent({bannerNum, eventcode, bannerImage}) {
    return(
        <div className="XhomeBannerEventContent_Box">
            <div className="XhomeBannerEventContent_contents">
                <span><input type="checkbox" /></span>
                <span>{bannerNum}</span>
                <span>{eventcode}</span>
                {/* <span>{eventName}</span> */}
                <span>{bannerImage}</span>
            </div>
        </div>
    )

    
}

