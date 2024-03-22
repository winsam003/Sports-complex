import './Board.css'
import Submenu from './Submenu';
import XFaqSearchBox from './XFaqSearchBox';
import BoardSearchList from './BoardSearchList';

export default function FaqBoard() {
    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <XFaqSearchBox />
                <BoardSearchList />
            </div>
        </div>
    )
}