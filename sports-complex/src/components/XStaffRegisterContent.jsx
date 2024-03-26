import './XStaffRegisterContent.css';

export default function XStaffRegisterContent() {
    return (
        <form action="/" method='post'>
            <table className='XStaffRegisterContent_talbe'>
                <caption className='XStaffRegisterContent_Caption'>직원 등록</caption>
                <tr>
                    <th className='JoinStaff_title'>이름 (실명) <span className='JoinLecture_star'>*</span></th>
                    <td><input className="XStaffRegisterContent_input" type="text" name='name' id='name' /></td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>생년월일<span className='JoinLecture_star'>*</span></th>
                    <td>
                        <input className="XStaffRegisterContent_input" type="number" name='birth' id='birth' />
                        <input className="" type="radio" id='solar' name='birthChoice' value={'solar'} />
                        <label htmlFor="solar">양력</label>
                        <input className="" type="radio" id='lunar' name='birthChoice' value={'lunar'} />
                        <label htmlFor="lunar">음력</label>
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>성별<span className='JoinLecture_star'>*</span></th>
                    <td>
                        <input className="" type="radio" id='men' name='gender' value={'men'} />
                        <label htmlFor="men">남자</label>
                        <input className="" type="radio" id='women' name='gender' value={'women'} />
                        <label htmlFor="women">여자</label>
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>휴대전화<span className='JoinLecture_star'>*</span></th>
                    <td>
                        <select className='XStaffRegisterContent_input' name="firstPhoneNum" id="firstPhoneNum">
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="019">019</option>
                        </select>
                        <span>- &nbsp;&nbsp;</span>
                        <input className="XStaffRegisterContent_input" type="text" name='secondPhoneNum' id='secondPhoneNum' />
                        <span>&nbsp;&nbsp; - &nbsp;&nbsp;</span>
                        <input className="XStaffRegisterContent_input" type="text" name='lastPhoneNum' id='lastPhoneNum' />
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>주소</th>
                    <td>
                        <a href="./" className='button'>우편번호 찾기</a> <br />
                        <input className="XStaffRegisterContent_input XStaffRegisterContent_address" type="text" name='address1' id='address1' /> <br />
                        <input className="XStaffRegisterContent_input" type="text" name='address2' id='address2' placeholder='상세주소' />
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>보유 자격증</th>
                    <td>
                        <input className="XlectureRegisterDetail_input" type="text" name='carNum' id='carNum' />
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>직원코드</th>
                    <input className="XlectureRegisterDetail_input" type="email" name='email' id='email' />
                </tr>
            </table>
            <div className='JoinStaff_submitBox' >
                <input className="JoinStaff_submitInput" type="submit" name='submit' id='submit' value={"직원등록"} />
            </div>
        </form>
    )
}