import './XlectureRegisterDetail.css';

export default function XlectureRegisterDetail() {
    return (
        <div className='XlectureRegisterDetail_Box'>
            <div className='XlectureRegisterDetail_Container'>
                <form action="/" method='post'>
                    <table>
                        <caption className='XlectureRegisterDetail_Caption'>강사등록</caption>
                        <tr>
                            <th>이름 (실명) <span className='JoinLecture_star'>*</span></th>
                            <td><input type="text" name='name' id='name' /></td>
                        </tr>
                        <tr>
                            <th>생년월일<span className='JoinLecture_star'>*</span></th>
                            <td>
                                <input type="number" name='birth' id='birth' />
                                <input type="radio" id='solar' name='birthChoice' value={'solar'} />
                                <label htmlFor="solar">양력</label>
                                <input type="radio" id='lunar' name='birthChoice' value={'lunar'} />
                                <label htmlFor="lunar">음력</label>
                            </td>
                        </tr>
                        <tr>
                            <th>성별<span className='JoinLecture_star'>*</span></th>
                            <td>
                                <input type="radio" id='men' name='gender' value={'men'} />
                                <label htmlFor="men">남자</label>
                                <input type="radio" id='women' name='gender' value={'women'} />
                                <label htmlFor="women">여자</label>
                            </td>
                        </tr>
                        <tr>
                            <th>휴대전화<span className='JoinLecture_star'>*</span></th>
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
                            <th>보유 자격증</th>
                            <td>
                                <input type="text" name='carNum' id='carNum' />
                            </td>
                        </tr>
                        <tr>
                            <th>계좌번호</th>
                            <td className='email'>
                                <input type="email" name='email' id='email' />
                                <select name="emailAddSelect" id="emailAddSelect">
                                    <option value="농협은행">농협은행</option>
                                    <option value="신한은행">신한은행</option>
                                    <option value="기업은행">기업은행</option>
                                    <option value="하나은행">하나은행</option>
                                    <option value="우리은행">우리은행</option>
                                    <option value="국민은행">국민은행</option>
                                </select>
                            </td>
                        </tr>

                    </table>
                    <div className='JoinLecture_submitBox' >
                        <input type="submit" name='submit' id='submit' value={"강사등록"} />
                    </div>
                </form>
            </div>
        </div>
    )
}