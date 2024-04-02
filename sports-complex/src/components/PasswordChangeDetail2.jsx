import './PasswordChangeDetail2.css';

export default function PasswordChangeDetail2(){

    

    return(
        <div className="PasswordChangeDetail2_Box">
            <div className='PasswordChangeDetail2_Box2'>
                <div className='PasswordChangeDetail2_title'>
                    <span className='PasswordChangeDetail2_logo'></span>
                    <span className='PasswordChangeDetail2_name'>비밀번호 수정</span>
                </div>
                <div className='PasswordChangeDetail2_PasswordChange'>변경 할 비밀번호를 입력해주세요</div>
                <div className='PasswordChangeDetail2_firstdiv'><input className='PasswordChangeDetail2_input' placeholder='비밀번호 입력'/></div>
                <div className='PasswordChangeDetail2_lastdiv'><input className='PasswordChangeDetail2_input' placeholder='비밀번호 확인'/></div>
                <div className='PasswordChangeDetail2_Check'><button>변경</button></div>
            </div>
        </div>
    )
}