import { useCallback, useEffect, useState } from 'react';
import './JoinMember.css'
import axios from 'axios';

export default function JoinMember({ memberType }) {


    // ==========================전화번호 병합 시작============================//

    const [firstPhoneNum, setFirstPhoneNum] = useState("010");
    const [secondPhoneNum, setSecondPhoneNum] = useState("");
    const [lastPhoneNum, setLastPhoneNum] = useState("");

    const firstNum = (e) => {
        setFirstPhoneNum(e);
        const fullNumber = e + secondPhoneNum + lastPhoneNum;
        setFormData({ 
            ...formData,
            fullPhoneNumber: fullNumber
        });
    }
    const secondNum = (e) => {
        setSecondPhoneNum(e);
        const fullNumber = firstPhoneNum + e + lastPhoneNum;
        setFormData({ 
            ...formData,
            fullPhoneNumber: fullNumber
        });
    }
    const lastNum = (e) => {
        setLastPhoneNum(e);
        const fullNumber = firstPhoneNum + secondPhoneNum + e;
        setFormData({ 
            ...formData,
            fullPhoneNumber: fullNumber
         });
    }
    
    // ==========================전화번호 병합 끝============================//




    // ==========================이메일 병합 시작============================//


    const [firstMemberEmail, setFirstMemberEmail] = useState("");
    const firstEmail = (e) => {
        setFirstMemberEmail(e);
        const fullEmail = e + lastMemberEmail;
        setFormData({
            ...formData,
            email: fullEmail
        });
    }

    const [lastMemberEmail, setLastMemberEmail] = useState("");
    const lastEmail = (e) => {
        setLastMemberEmail(e);
        const fullEmail = firstMemberEmail + e;
        setFormData({
            ...formData,
            email: fullEmail
        });
    }

    // ==========================이메일 병합 끝============================//





    // ==========================서버 송신용 form 정보 병합 시작============================//
    const [formData, setFormData] = useState({
        membercode: memberType,
        name: '',
        birth: '',
        id: '',
        password: '',
        address: '',
        address1: '',
        address2: '',
        carnum: '',
        email: '',
        phonenum: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value });
    };


    // ==========================서버 송신용 form 정보 병합 끝============================//
    console.log(formData);
    // ==========================서버 송신 시작============================//

    const [mJoin, setMjoin] = useState();
    const memberInsert = () => {
        axios.post("/member/mjoin", formData
        ).then((response) => {
            setMjoin(response.data);
        }).catch((error) => {
            console.error("Error fetching member list:", error);
        })
    }
    // ==========================서버 송신 끝============================//






    return (
        <div className='JoinMember_joinbox'>
            <div className='JoinMember_midbox'>
                <div className='JoinMember_title'>개인정보입력</div>
                <p>회원가입을 위해 아래의 양식에 내용을 입력해주세요.</p>
                <span className='JoinMember_star'>※ * 는 필수입력사항입니다.</span>

                <form onSubmit={memberInsert}>
                    <table>
                        <tr className='JoinMember_code'>
                            <th>회원코드</th>
                            <td><input type="text" name='membercode' id='membercode' value={memberType} /></td>
                        </tr>
                        <tr>
                            <th>이름 (실명) <span className='JoinMember_star'>*</span></th>
                            <td><input type="text" name='name' id='name' placeholder='본인인증에서 가져오기를 해야하지만 일단 readonly를 빼고 입력 하겠음' onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>생년월일<span className='JoinMember_star'>*</span></th>
                            <td>

                                <input type="text" name='birth' id='birth' placeholder='본인인증에서 가져오기를 해야하지만 일단 readonly를 빼고 입력 하겠음' onChange={handleChange} />
                            </td>
                        </tr>
                        {/* <tr>
                            <th>성별<span className='JoinMember_star'>*</span></th>
                            <td>
                                <input type="radio" id='men' name='gender' value={'men'} />
                                <label htmlFor="men">남자</label>
                                <input type="radio" id='women' name='gender' value={'women'} />
                                <label htmlFor="women">여자</label>
                            </td>
                        </tr> */}
                        <tr>
                            <th>아이디<span className='JoinMember_star'>*</span></th>
                            <td>
                                <input type="text" name='id' id='id' onChange={handleChange} />
                                <a href="./" className='button'>중복확인</a>
                                {/* <button type='button' id='idDup' >중복확인</button> */}
                                <p>4 ~ 12 자의 영문(소문자)과 숫자만 사용할 수 있습니다. </p>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호<span className='JoinMember_star'>*</span></th>
                            <td>
                                <input type="password" name='password' id='password' placeholder='문자, 숫자, 특수문자(@$!%^*#?&)를 포함한 9자리 이상 입력해주십시오.' onChange={handleChange} />
                                <p>9~20자의 영문+숫자+특수문자를 조합하여 사용할 수 있습니다.</p>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호 확인<span className='JoinMember_star'>*</span></th>
                            <td>
                                <input type="password" />
                                <p>비밀번호를 한번 더 입력하세요. 비밀번호는 잊지 않도록 주의하시기 바랍니다.</p>
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                <a href="./" className='button'>우편번호 찾기</a> <br />
                                <input type="text" name='address' id='address' onChange={handleChange} /> <br />
                                <input type="text" name='address1' id='address1' onChange={handleChange} /> <br />
                                <input type="text" name='address2' id='address2' placeholder='상세주소' onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>차량번호</th>
                            <td>
                                <input type="text" name='carnum' id='carnum' onChange={handleChange} />
                                <p>예) 45가1234 와 같이 전체 차량번호를 띄어쓰기 없이 입력 하여 주시기 바랍니다.</p>
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td className='email'>
                                <input type="text" name='firstEmail' id='firstEmail' onChange={(e) => {firstEmail(e.target.value)}} />
                                <input type="text" name='emailAdd' id='emailAdd' placeholder='@email.com' value={lastMemberEmail} onChange={(e) => { lastEmail(e.target.value) }} />
                                <select name="emailAddSelect" id="emailAddSelect" onChange={(e) => { lastEmail(e.target.value) }} >
                                    <option value="">직접입력</option>
                                    <option value="@gmail.com">gmail.com</option>
                                    <option value="@daum.net">daum.net</option>
                                    <option value="@hotmail.com">hotmail.com</option>
                                    <option value="@naver.com">naver.com</option>
                                    <option value="@nate.com">nate.com</option>
                                    <option value="@yahoo.com">yahoo.com</option>
                                    <option value="@dreamwiz.com">dreamwiz.com</option>
                                </select> <br />
                                {/* <input type="text" name='email' id='email' value={fullMemberEmail} className='femail' /> */}
                                <input type="checkbox" name='emailagr' id='emailagr' onChange={handleChange} />
                                <span><label htmlFor="receiveMail">뉴스레터나 공지이메일을 수신 받겠습니다.</label></span>
                            </td>
                        </tr>
                        <tr>
                            <th>휴대전화<span className='JoinMember_star'>*</span></th>
                            <td>
                                <select name="firstPhoneNum" id="firstPhoneNum" value={firstPhoneNum} onChange={(e) => { firstNum(e.target.value) }}>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="019">019</option>
                                </select>
                                <span>-</span>
                                <input type="text" name='secondPhoneNum' id='secondPhoneNum' onChange={(e) => { secondNum(e.target.value) }} />
                                <span>-</span>
                                <input type="text" name='lastPhoneNum' id='lastPhoneNum' onChange={(e) => { lastNum(e.target.value) }} />
                                {/* <input className='fullPhoneNumber' type="text" name='phonenum' id='phonenum' value={fullPhoneNumber} onChange={handleChange}  /> */}
                                <br />
                                <input type="checkbox" name='snsagr' id='snsagr' onChange={handleChange} />
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