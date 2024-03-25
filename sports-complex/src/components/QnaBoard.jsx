import './Board.css'
import Submenu from './Submenu';
import XQnaSearchBox from './XQnaSearchBox';
import BoardSearchList from './BoardSearchList';
import { Link } from 'react-router-dom';

export default function QnaBoard() {
    return (
        <div>
            <div className='board_div'>
                <Submenu />
                <div className='board_div_div'>
                    <XQnaSearchBox />
                    <BoardSearchList />
                    <button className='board_writebutton'><Link to="/Inquiry">글쓰기</Link></button>
                </div>
            </div>
        </div>
    )
}