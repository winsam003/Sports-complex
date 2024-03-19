import './PasswordChangeDetail.css';

export default function PasswordChangeDetail(){
    return(
        <div className="PasswordChangeDetail_Box">
            <div className='PasswordChangeDetail_Box2'>
                <div className='PasswordChangeDetail_PasswordChange'>현재 비밀번호를 입력해주세요</div>
                <div><input placeholder='비밀번호 입력'/></div>
            </div>
        </div>
    )
}