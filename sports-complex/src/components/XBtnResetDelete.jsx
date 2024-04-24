import './XBtnResetDelete.css'

// 초기화 삭제 버튼
export default function XResetDeleteBtn({ del, handleReset}) {

    return (
        <div>
            <div className='XResetDeleteBtn'>
                <button onClick={handleReset}>초기화</button>
                <button onClick={del}>삭제</button>
            </div>
        </div>
    )
}