import Submenu from "./Submenu";
import EventDetail from "./EventDetail";
import './XEventBoardDetail.css';
import { useLocation } from "react-router";

export default function XEventBoardDetail({eventcode}){

    

    return(
        <div className="XEventBoardDetail">
            <Submenu />
            <EventDetail eventcode={eventcode}  />
        </div>
    )
}