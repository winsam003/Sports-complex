import './Board.css'
import Submenu from './Submenu';
import BoardSearchBox from './BoardSearchBox';
import EventBoardList from './EventBoardList';

export default function FindIDPage() {
    return (
        <div>
            <div className='board_div'>
                <BoardSearchBox />
                <Submenu />
                <EventBoardList />
            </div>
        </div>
    )
}