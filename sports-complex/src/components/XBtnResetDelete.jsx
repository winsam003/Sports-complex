import { useLocation } from 'react-router';
import './XBtnResetDelete.css'

// 초기화 삭제 버튼
export default function XResetDeleteBtn({ del, handleReset}) {

    const location = useLocation();
    return (
        <div>
            <div className='XResetDeleteBtn'>
                <button onClick={handleReset}>초기화</button>
                {location.pathname == "/XParkingControllPage" ?
                    <button onClick={del}>취소</button>
                    :
                    <button onClick={del}>삭제</button>
                }
            </div>
        </div>
    )
}