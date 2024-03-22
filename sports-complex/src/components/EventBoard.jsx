import './Board.css'
import Submenu from './Submenu';
import XEventSearch from './XEventSearch';
import EventBoardList from './EventBoardList';

export default function EventBoardPage() {
    return (
        <div>
            <div className='board_div'>
                <XEventSearch />
                <Submenu />
                <EventBoardList />
            </div>
        </div>
    )
}