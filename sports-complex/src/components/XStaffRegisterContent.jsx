import './XStaffRegisterContent.css';
import axios from 'axios';
import { useState } from 'react';

export default function XStaffRegisterContent() {
    const [staffData, setstaffData] = useState({
        stfId: '',
        stfpassword: '',
        stfdmp: '',
        stflevel: '',
        stfname: '',
        stfpnum: '',
        stfcode: ''
    });

    const handelChange = ((e) => {
        setstaffData({
            ...staffData,
            [e.target.name]: e.target.value
        });
    });

    return (
        <form action="/" method='post'>
            <table className='XStaffRegisterContent_talbe'>
                <caption className='XStaffRegisterContent_Caption'>직원 등록</caption>
                <tr>
                    <th className='JoinStaff_title'> ID <span className='JoinLecture_star'>*</span></th>
                    <td><input className="XStaffRegisterContent_input" type="text" name='id' id='id' /></td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'> 비밀번호 <span className='JoinLecture_star'>*</span></th>
                    <td><input className="XStaffRegisterContent_input" type="text" name='password' id='password' /></td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>소속<span className='JoinLecture_star'>*</span></th>
                    <td>
                        <select className='XStaffRegisterContent_select'>
                            <option value="시설">시설</option>
                            <option value="강좌">강좌</option>
                            <option value="일반">일반</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>직위<span className='JoinLecture_star'>*</span></th>
                    <td>
                        <select className='XStaffRegisterContent_select'>
                            <option value="팀장">팀장</option>
                            <option value="사원">사원</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'> 이름 <span className='JoinLecture_star'>*</span></th>
                    <td><input className="XStaffRegisterContent_input" type="text" name='name' id='name' /></td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>휴대전화<span className='JoinLecture_star'>*</span></th>
                    <td>
                        <select className='XStaffRegisterContent_select' name="firstPhoneNum" id="firstPhoneNum">
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="019">019</option>
                        </select>
                        <span>&nbsp;&nbsp; - &nbsp;&nbsp;</span>
                        <input className="XStaffRegisterContent_input" type="text" name='secondPhoneNum' id='secondPhoneNum' />
                        <span>&nbsp;&nbsp; - &nbsp;&nbsp;</span>
                        <input className="XStaffRegisterContent_input" type="text" name='lastPhoneNum' id='lastPhoneNum' />
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>직원코드</th>
                    <td><input className="XStaffRegisterContent_input" type="text" name='stfcode' id='stfcode' /></td>
                </tr>
            </table>
            <div className='JoinStaff_submitBox' >
                <input className="JoinStaff_submitInput" type="submit" name='submit' id='submit' value={"직원등록"} onClick={handleSubmit} />
            </div>
        </form>
    )
}