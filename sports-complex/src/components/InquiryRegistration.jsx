import './InquiryRegistration.css'

export default function InquiryRegistration() {
    return(
        <div className='InquiryRegistration_box' >
            <div className='InquiryInfo'>

                <h1>고객의 소리</h1>
                <div>
                    <h3>게시판 이용 주의사항</h3>
                    <p>1번. </p>
                    <p>2번. </p>
                    <p>3번. </p>
                </div>

                <h2>개인정보 수집 및 이용에 대한 안내</h2>
                <div>
                    <p>1번</p>
                    <p>2번</p>
                    <p>3번</p>
                </div>
                <div className='InquiryRegistration_check'>
                    <input type="checkbox" name='AgreePersonal' id='AgreePersonal' /> 
                    <span><label htmlFor="AgreePersonal">위의 개인정보 수집이용에 동의합니다.</label></span>
                </div>

                <h2>정보통신망법 등 동의 안내</h2>
                <div>
                    <p>1번</p>
                    <p>2번</p>
                    <p>3번</p>
                </div>
                <div className='InquiryRegistration_check'>
                    <input type="checkbox" name='AgreeInfo' id='AgreeInfo' /> 
                    <span><label htmlFor="AgreeInfo">정보통신망법에 동의합니다.</label></span>
                </div>

                <h2>민원공유동의 안내</h2>
                <div>
                    <p>1번</p>
                    <p>2번</p>
                    <p>3번</p>
                </div>
                <div className='InquiryRegistration_check'>
                    <input type="checkbox" name='AgreeShare' id='AgreeShare' /> 
                    <span><label htmlFor="AgreePersonal">귀하의 민원신청 내용을 공유하는 것에 동의하십니까?</label></span>
                </div>
                <div className='InquiryRegistration_haveto'>
                    <p>※ 글 등록이 안 되시는 분은, 우측의 '보기' 버튼을 클릭하시기 바랍니다. 
                        <a href="/" >보기</a>
                    </p>
                    <p>(*)는 반드시 작성해야 할 필수 항목입니다.</p>
                </div>
            </div>
            <div className='InquiryRegistration_form'>
                <form action="/" method='post'>
                    <table>
                        <tr>
                            <th>작성자</th>
                            <td><input type="text" name='name' id='name' placeholder='본인인증에서 가져오기' readOnly /></td>
                        </tr>
                        <tr>
                            <th>공개/비공개</th>
                            <td>
                                <input type="radio" id='open' name='openOrPrivate' value={'open'} />
                                <label htmlFor="open">공개</label>
                                <input type="radio" id='private' name='openOrPrivate' value={'private'} />
                                <label htmlFor="private">비공개</label>
                            </td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td>
                                <input type="text" name='phoneNum' id='phoneNum'/>
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <input type="text" name='email' id='email'/>
                            </td>
                        </tr>
                        <tr>
                            <th>민원종류</th>
                            <td>
                                <input type="radio" id='unfriendly' name='InqueryType' value={'unfriendly'} />
                                <label htmlFor="unfriendly">불친절</label>
                                <input type="radio" id='proposal' name='InqueryType' value={'proposal'} />
                                <label htmlFor="proposal">진정, 건의</label>
                                <input type="radio" id='question' name='InqueryType' value={'question'} />
                                <label htmlFor="question">단순질의</label>
                            </td>
                        </tr>
                        <tr>
                            <th>이용시설</th>
                            <td>
                                <select name="facilityUsed" id="facilityUsed">
                                    <option value="df">선택하세요</option>
                                    <option value="">종합운동장</option>
                                    <option value="">수강 신청 문의</option>
                                    <option value="">경기 신청 문의</option>
                                    <option value="">대관 문의</option>
                                    <option value="">주차</option>
                                    <option value="">편의시설</option>
                                    <option value="">기타 문의</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            앙 졸려 여기 비밀번호부터 하면 됨. 
                        </tr>


                    </table>
                </form>
            </div>

        </div>
    )
}