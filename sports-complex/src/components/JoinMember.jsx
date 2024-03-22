import './JoinMember.css'

export default function JoinMember() {
    return (
        <div className='JoinMember_joinbox'>
            <div className='JoinMember_midbox'>
                <div className='JoinMember_title'>개인정보입력</div>
                <p>회원가입을 위해 아래의 양식에 내용을 입력해주세요.</p>
                <span className='JoinMember_star'>※ * 는 필수입력사항입니다.</span>

                <form action="/" method='post'>
                    <table>
                        <tr>
                            <th>이름 (실명) <span className='JoinMember_star'>*</span></th>
                            <td><input type="text" name='name' id='name' placeholder='본인인증에서 가져오기' readOnly /></td>
                        </tr>
                        <tr>
                            <th>생년월일<span className='JoinMember_star'>*</span></th>
                            <td>
                                
                                <input type="number" name='birth' id='birth' placeholder='본인인증에서 가져오기' readOnly />
                                
                                <input type="radio" id='solar' name='birthChoice' value={'solar'} /> 
                                <label htmlFor="solar">양력</label>
                                <input type="radio" id='lunar' name='birthChoice' value={'lunar'} />
                                <label htmlFor="lunar">음력</label>
                            </td>
                        </tr>
                        <tr>
                            <th>성별<span className='JoinMember_star'>*</span></th>
                            <td>
                                <input type="radio" id='men' name='gender' value={'men'} />
                                <label htmlFor="men">남자</label>
                                <input type="radio" id='women' name='gender' value={'women'} />
                                <label htmlFor="women">여자</label>
                            </td>
                        </tr>
                        <tr>
                            <th>아이디<span className='JoinMember_star'>*</span></th>
                            <td>
                                <input type="text" name='id' id='id' />
                                <a href="./" className='button'>중복확인</a>
                                {/* <button type='button' id='idDup' >중복확인</button> */}
                                <p>4 ~ 12 자의 영문(소문자)과 숫자만 사용할 수 있습니다. </p>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호<span className='JoinMember_star'>*</span></th>
                            <td>
                                <input type="password" name='password' id='password' placeholder='문자, 숫자, 특수문자(@$!%^*#?&)를 포함한 9자리 이상 입력해주십시오.' />
                                <p>9~20자의 영문+숫자+특수문자를 조합하여 사용할 수 있습니다.</p>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호 확인<span className='JoinMember_star'>*</span></th>
                            <td>
                                <input type="password" name='password2' id='password2' />
                                <p>비밀번호를 한번 더 입력하세요. 비밀번호는 잊지 않도록 주의하시기 바랍니다.</p>
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                <a href="./" className='button'>우편번호 찾기</a> <br />
                                <input type="text" name='address1' id='address1' /> <br />
                                <input type="text" name='address2' id='address2' placeholder='상세주소' />
                            </td>
                        </tr>
                        <tr>
                            <th>차량번호</th>
                            <td>
                                <input type="text" name='carNum' id='carNum' />
                                <p>예) 45가1234 와 같이 전체 차량번호를 띄어쓰기 없이 입력 하여 주시기 바랍니다.</p>
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td className='email'>
                                <input type="email" name='email' id='email' />
                                <input type="text" name='emailAdd' id='emailAdd' placeholder='@email.com' />
                                <select name="emailAddSelect" id="emailAddSelect">
                                    <option value="">직접입력</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="yahoo.com">yahoo.com</option>
                                    <option value="dreamwiz.com">dreamwiz.com</option>
                                </select> <br />
                                <input type="checkbox" name='receiveMail' id='receiveMail' />
                                <span><label htmlFor="receiveMail">뉴스레터나 공지이메일을 수신 받겠습니다.</label></span>
                            </td>
                        </tr>
                        <tr>
                            <th>휴대전화<span className='JoinMember_star'>*</span></th>
                            <td>
                                <select name="firstPhoneNum" id="firstPhoneNum">
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="019">019</option>
                                </select>
                                <span>-</span>
                                <input type="text" name='secondPhoneNum' id='secondPhoneNum' />
                                <span>-</span>
                                <input type="text" name='lastPhoneNum' id='lastPhoneNum' />
                                <br />
                                <input type="checkbox" name='receiveMessage' id='receiveMessage' />
                                <span><label htmlFor="receiveMessage">알림문자를 받겠습니다.</label></span>
                            </td>
                        </tr>

                    </table>
                    <div className='JoinMember_submitBox' >
                        <input type="submit" name='submit' id='submit' value={"회원가입"} />
                    </div>
                </form>

            </div>
        </div>
    )
}