import './Board.css'
import Submenu from './Submenu';
import XBoardSearchBox from './XBoardSearchBox';
import BoardSearchList from './BoardSearchList';
import { Link } from 'react-router-dom';

export default function Board() {
    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <div className='board_div_div'>
                    <XBoardSearchBox />
                    <BoardSearchList />
                    <button className='board_writebutton'><Link to="/Inquiry">글쓰기</Link></button>
                </div>
            </div>
        </div>
    )
}