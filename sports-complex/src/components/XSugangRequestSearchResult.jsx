import './XSugangRequestSearchResult.css'

export default function XSugangRequestSearchResult() {
    return (
        <div>
            <div className='XSugangRequestSearchResult'>
                <div className='XSugangRequestSearchResult_index'>
                    <p>선택</p>
                    <p>수강신청번호</p>
                    <p>강좌명</p>
                    <p>회원번호</p>
                    <p>이름</p>
                    <p>생년월일</p>
                    <p>신청일</p>
                    <p>현재상태</p>
                </div>
                <div className='XSugangRequestSearchResult_content'>
                    <input type='checkbox'></input>
                    <p>999999</p>
                    <p>기초 생활 수영</p>
                    <p>888888</p>
                    <p>생존수영</p>
                    <p>1999.09.09</p>
                    <p>2024.03.22 14:58:32</p>
                    <p>결제완료</p>
                </div>
            </div>
        </div>
    )
}