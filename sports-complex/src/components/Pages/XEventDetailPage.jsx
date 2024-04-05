import PageBanner from '../PageBanner';
import EventBoardDetail from '../EventBoardDetail';
import { useLocation } from 'react-router';
import XEventBoardDetail from '../XEventBoardDetail';

export default function XEventDetailPage(){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const eventcode = searchParams.get('eventcode');


    console.log(`location: `, location);
    console.log(`EventDetailPage 에서의 eventcode : `, eventcode);
    

    return(
        <div>
            <PageBanner />
            <XEventBoardDetail eventcode={eventcode} />
            

        </div>
    )
}