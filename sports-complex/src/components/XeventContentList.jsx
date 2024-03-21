import './XeventContentList.css';

export default function XeventContentList({eventCode, eventName, cpCode, eventUpload, eventUploadfile, insertMainPic}) {

    const handlePic = (e) => {
        insertMainPic(eventCode, e.target.checked);
    }

    return(
        <div className="XeventContentList_Box">
            <div className="XeventContentList_contents">
                <input type="checkbox" onChange={handlePic} />
                <span>{eventCode}</span>
                <span>{eventName}</span>
                <span>{cpCode}</span>
                <span>{eventUpload}</span>
                <span>{eventUploadfile}</span>
            </div>
        </div>
    )
 
}

