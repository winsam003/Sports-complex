import Submenu from "./Submenu";
import QRCodeDetail from "./QRCodeDetail";
import './QRCode.css'

export default function QRCode(){
    return(
        <div className="QRCode_Box">
            <Submenu />
            <QRCodeDetail />
        </div>
    )
}