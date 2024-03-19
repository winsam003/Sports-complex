import './Board.css'
import Submenu from './Submenu';
import BoardSearchBox from './BoardSearchBox';
import BoardSearchList from './BoardSearchList';
import { Link } from 'react-router-dom';

export default function Board() {
    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <BoardSearchBox />
                <BoardSearchList />
                <button className='board_writebutton'><Link to="/Inquiry">글쓰기</Link></button>
            </div>
        </div>
    )
}