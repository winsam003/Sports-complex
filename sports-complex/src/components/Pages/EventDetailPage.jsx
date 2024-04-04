import PageBanner from '../PageBanner';
import EventBoardDetail from '../EventBoardDetail';
import { useLocation } from 'react-router';
import XEventBoardDetail from '../XEventBoardDetail';

export default function EventDetailPage(){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const eventcode = searchParams.get('eventcode');

    console.log(`EventDetailPage 에서의 eventcode : `, eventcode);
    

    return(
        <div>
            <PageBanner />
            {/* 사용자인지 관리자인지 삼항 연산자로. EventBoardDetail, XEventBoardDetail */}

            {/* {location.pathname == '' ?
            <EventBoardDetail eventcode={eventcode} />
            :

            } */}

            <XEventBoardDetail eventcode={eventcode} />
        </div>
    )
}