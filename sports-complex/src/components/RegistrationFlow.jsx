// 회원 가입 현재 위치 표시해주기
import './RegistrationFlow.css'

export default function RegistrationFlow() {
    return (
        <div>
            <ul className="RegistrationFlow_ul">
                <li>
                    <span>Step 1</span>
                    <span>약관동의</span>
                </li>
                <li>
                    <span>Step 2</span>
                    <span>회원유형</span>
                </li>
                <li>
                    <span>Step 3</span>
                    <span>본인확인</span>
                </li>
                <li>
                    <span>Step 4</span>
                    <span>개인정보입력</span>
                </li>
                <li>
                    <span>Step 5</span>
                    <span>가입 완료</span>
                </li>
            </ul>
        </div>
    );
};