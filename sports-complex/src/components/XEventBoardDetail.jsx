import Submenu from "./Submenu";
import EventDetail from "./EventDetail";
import './XEventBoardDetail.css';

export default function XEventBoardDetail({eventcode}){
    return(
        <div className="XEventBoardDetail">
            <Submenu />
            <EventDetail eventcode={eventcode}  />
        </div>
    )
}