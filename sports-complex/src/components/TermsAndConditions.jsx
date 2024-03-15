// 회원가입 이용약관
import './TermsAndConditions.css'
import RegistrationFlow from './RegistrationFlow'
import BoxScroll from './BoxScroll'

export default function TermsAndConditions() {
    return (
        <div>
            <RegistrationFlow />
            <div className='TermsAndConditions_title_div'>
                <span className='TermsAndConditions_title'>약관동의,회원유형,본인확인,개인정보입력,가입완료 중 뭘까요</span>
            </div>
            <div className='TermsAndConditions_div'>
                <span className='TermsAndConditions_subtitle'>체육시설 약관동의</span>
                <BoxScroll />
                <label>
                    {/* <input id='ckbox1' type='checkbox'>"&#40;필수&#41; 약관에 동의합니다"</input> */}
                </label>
            </div>
            <div className='TermsAndConditions_div'>
                <span className='TermsAndConditions_subtitle'>개인정보 수집 및 이용에 대한 안내</span>
                <BoxScroll />
                <label>
                    {/* <input id='ckbox1' type='checkbox'>"&#40;필수&#41; 개인정보 수집 및 이용안내를 숙지하였습니다"</input> */}
                </label>
            </div>
            <div className='TermsAndConditions_div'>
                <span className='TermsAndConditions_subtitle'>개인정보 제3자 제공에 대한 안내</span>
                <BoxScroll />
                <label>
                    {/* <input id='ckbox1' type='checkbox'>"&#40;필수&#41; 개인정보 제3자 제공에 동의합니다"</input> */}
                </label>
            </div>

            {/* button component 추가 */}
        </div>
    );
};