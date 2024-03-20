import './PasswordChangeDetail2.css';

export default function PasswordChangeDetail2(){
    return(
        <div className="PasswordChangeDetail2_Box">
            <div className='PasswordChangeDetail2_Box2'>
                <div className='PasswordChangeDetail2_PasswordChange'>변경 할 비밀번호를 입력해주세요</div>
                <div><input placeholder='비밀번호 입력'/></div>
                <div><input placeholder='비밀번호 확인'/></div>
            </div>
        </div>
    )
}