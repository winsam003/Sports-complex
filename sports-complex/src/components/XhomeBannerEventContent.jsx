import './XhomeBannerEventContent.css'

export default function XhomeBannerEventContent({bannernum, event, bannerimage, handleBanner}) {
    return(
        <div className="XhomeBannerEventContent_Box">
            <div className="XhomeBannerEventContent_contents">
                <span><input type="checkbox"
                            value={bannernum}
                            onChange={(e) => handleBanner(bannernum)}
                        /></span>
                <span>{bannernum}</span>
                <span>{event.eventcode}</span>
                <span>{event.eventname}</span>
                <span>{bannerimage}</span>
            </div>
        </div>
    )

    
}

