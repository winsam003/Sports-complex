import './PasswordChangeDetail.css';

import { TbLock } from "react-icons/tb";

export default function PasswordChangeDetail(){
    return(
        <div className="PasswordChangeDetail_Box">
            <div className='PasswordChangeDetail_Box2'>
                <div className='PasswordChangeDetail_title'>
                    <span className='PasswordChangeDetail_logo'></span>
                    <span className='PasswordChangeDetail_name'>비밀번호 수정</span>
                </div>
                <div className='PasswordChangeDetail_PasswordChange'>현재 비밀번호를 입력해주세요</div>
                <div className='PasswordChangeDetail_input'><TbLock className='PasswordChangeDetail_Icon'  /><input placeholder='비밀번호 입력'/></div>
                <div className='PasswordChangeDetail_Check'><button>확인</button></div>
            </div>
        </div>
    )
}