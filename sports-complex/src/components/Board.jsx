import './Board.css'
import Submenu from './Submenu';
import BoardSearchBox from './BoardSearchBox';
import BoardSearchList from './BoardSearchList';

export default function Board() {
    return (
        <div>
            <div className='board_div'>
                <BoardSearchBox />
                <Submenu />
                <BoardSearchList />
            </div>
        </div>
    )
}