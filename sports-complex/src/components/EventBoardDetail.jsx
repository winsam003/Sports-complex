import Submenu from "./Submenu";
import EventDetail from "./EventDetail";
import './EventBoardDetail.css';

export default function EventBoardDetail(){
    return(
        <div className="EventBoardDetail">
            <Submenu />
            <EventDetail />
        </div>
    )
}