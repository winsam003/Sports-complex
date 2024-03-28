import './XStaffRegisterContent.css';
import { useState } from 'react';
import axios from 'axios';

export default function XStaffRegisterContent() {
    const [staffData, setstaffData] = useState({
        stfid: '',
        stfpassword: '',
        stfdmp: '시설',
        stflevel: '팀장',
        stfname: '',
        stfpnum: '',
        stfcode: 'STSPBJ'
    });

    // 직원코드조합
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'stfdmp') {
            let code = 'ST';
            if (value === '시설') {
                code += 'SP';
            } else if (value === '강좌') {
                code += 'CL';
            } else if (value === '일반') {
                code += 'GE';
            }
            setstaffData({ ...staffData, [name]: value, stfcode: code + staffData.stfcode.substring(4) });
        } else if (name === 'stflevel') {
            let code = staffData.stfcode.substring(0, 4);
            if (value === '팀장') {
                code += 'BJ';
            } else if (value === '사원') {
                code += 'SF';
            }
            setstaffData({ ...staffData, [name]: value, stfcode: code });
        } else {
            setstaffData({ ...staffData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`joinStaff 전` + staffData);
        joinStaff();
        console.log(`joinStaff 후` + staffData);
    }

    const joinStaff = () => {
        axios.post('/staff/staffInsert', staffData)
            .then(response => {
                console.log(response);
                console.log(staffData);
            }).catch(error => {
                console.error('에러:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <table className='XStaffRegisterContent_talbe'>
                <caption className='XStaffRegisterContent_Caption'>직원 등록</caption>
                <tr>
                    <th className='JoinStaff_title'> ID <span className='JoinLecture_star'>*</span></th>
                    <td><input className="XStaffRegisterContent_input" type="text" name='stfid' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'> 비밀번호 <span className='JoinLecture_star'>*</span></th>
                    <td><input className="XStaffRegisterContent_input" type="text" name='stfpassword' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>소속<span className='JoinLecture_star'>*</span></th>
                    <td>
                        <select className='XStaffRegisterContent_select' name="stfdmp" value={staffData.stfdmp} onChange={handleChange}>
                            <option value="시설">시설</option>
                            <option value="강좌">강좌</option>
                            <option value="일반">일반</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>직위<span className='JoinLecture_star'>*</span></th>
                    <td>
                        <select className='XStaffRegisterContent_select' name="stflevel" value={staffData.stflevel} onChange={handleChange}>
                            <option value="팀장">팀장</option>
                            <option value="사원">사원</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'> 이름 <span className='JoinLecture_star'>*</span></th>
                    <td><input className="XStaffRegisterContent_input" type="text" name='stfname' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>휴대전화<span className='JoinLecture_star'>*</span></th>
                    <td>
                        <input className="XStaffRegisterContent_input" type="text" name="stfpnum" onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>직원코드</th>
                    <td><input className="XStaffRegisterContent_input" type="text" value={staffData.stfcode} readOnly /></td>
                </tr>
            </table>
            <div className='JoinStaff_submitBox' >
                <input className="JoinStaff_submitInput" type="submit" value={"직원등록"} />
            </div>
        </form>
    )
}