import PageBanner from '../PageBanner';
import EventBoardDetail from '../EventBoardDetail';
import { useLocation } from 'react-router';

export default function EventDetailPage(){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const eventcode = searchParams.get('eventcode');

    console.log(`EventDetailPage 에서의 eventcode : `, eventcode);

    return(
        <div>
            <PageBanner />
            <EventBoardDetail eventcode={eventcode} />
        </div>
    )
}