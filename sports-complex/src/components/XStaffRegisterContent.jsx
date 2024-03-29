import './XStaffRegisterContent.css';
import { useState } from 'react';
import axios from 'axios';

export default function XStaffRegisterContent() {
    // 아이디 중복확인
    const [idDuplication, setIdDuplication] = useState(false);

    // 서버에서 staff정보를 받아옴
    const duplication = () => {
        axios.get('/staff/staffList'
        ).then((response) => {
            const stafflist = response.data;

            // 입력한 아이디와 staff id를 비교해 같은 id인지 확인
            const idDuplicationCheck = stafflist.filter((list) => list.stfid === staffData.stfid);

            if (idDuplicationCheck.length > 0) {
                alert("중복된 ID입니다. 다른 아이디를 사용해주세요.");
                setIdMessage("중복된 ID입니다. 다른 아이디를 사용해주세요.");
            } else {
                alert("사용가능한 ID입니다.");
                setIdMessage("사용가능한 ID입니다.");
                setIdDuplication(true);
            }
        }).catch((error) => {
            console.log(`ID중복체크 error = ${error}`);
        })
    }

    // 직원등록 데이터 전송
    const [staffData, setstaffData] = useState({
        stfid: '',
        stfpassword: '',
        stfdmp: '시설',
        stflevel: '팀장',
        stfname: '',
        stfpnum: '',
        stfcode: 'STSPBJ'
    });

    // id 무결성 검사
    const [idMessage, setIdMessage] = useState('');
    const [idcheck, setIdcheck] = useState(false);
    const idSpecial = /^[a-zA-Z0-9]+$/;

    // password 무결성 검사
    const [pwMessage, setPwMessage] = useState('');
    const [pwcheck, setPwcheck] = useState(false);
    const pwSpecial = /[!-*.@]/gi;

    // 직원코드조합
    const handleChange = (e) => {
        const { name, value } = e.target;

        // id 무결성 검사
        if (name == 'stfid') {
            if (value.length < 4 || value.length > 12) {
                setIdMessage('* 4글자 이상 12글자 이하로 입력해주세요.');
                setIdcheck(false);
            } else if (value.replace(idSpecial, '').length > 0) {
                setIdMessage('* 숫자와 영문만 사용가능합니다.');
                setIdcheck(false);
            } else {
                setIdMessage('');
                setIdcheck(true);
            }
        }

        // password 무결성 검사
        if (name == 'stfpassword') {
            if (value.length < 9) {
                setPwMessage('* 9자리 이상으로 입력해주세요.');
                setPwcheck(false);
            } else if (value.replace(pwSpecial, '').length == value.length) {
                setPwMessage('* password는 특수문자를 포함해야 합니다.');
                setPwcheck(false);
            } else {
                setPwMessage('');
                setPwcheck(true);
            }
        }

        // 부서코드조합
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
            // 직위코드조합
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

    // 직원 등록 데이터 보내기
    const joinStaff = () => {
        if (!idDuplication) {
            alert("아이디 중복을 확인해주세요.");
        } else {
            window.confirm("직원을 등록하시겠습니까?");
            axios.post('/staff/staffInsert', staffData)
                .then(response => {
                    console.log(response);
                    console.log(staffData);
                }).catch(error => {
                    alert("직원 등록에 실패하였습니다.")
                    console.error('에러:', error);
                });
        }
    };

    return (
        <form>
            <table className='XStaffRegisterContent_talbe'>
                <caption className='XStaffRegisterContent_Caption'>직원 등록</caption>
                <tr>
                    <th className='JoinStaff_title'> ID <span className='JoinLecture_star'>*</span></th>
                    <td>
                        <input className="XStaffRegisterContent_input" type="text" name='stfid' placeholder='4-12글자 로 입력해주세요.' onChange={handleChange} readOnly={idDuplication ? true : false} />
                        <button type='button' className='idCheck' onClick={() => { duplication() }}>중복확인</button>
                        <div className='Message' style={{ color: idMessage === "사용가능한 ID입니다." ? 'black' : 'red' }}>{idMessage}</div>
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'> 비밀번호 <span className='JoinLecture_star'>*</span></th>
                    <td>
                        <input className="XStaffRegisterContent_input" type="text" name='stfpassword' placeholder='@$!%^*#?&를 포함해 9자리 이상 입력해주세요.' onChange={handleChange} />
                        <div className='Message'>{pwMessage}</div>
                    </td>
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
                        <input className="XStaffRegisterContent_input" type="text" name="stfpnum" placeholder='- 없이 입력해주세요.' onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <th className='JoinStaff_title'>직원코드</th>
                    <td><input className="XStaffRegisterContent_input" type="text" value={staffData.stfcode} readOnly /></td>
                </tr>
            </table>
            <div className='JoinStaff_submitBox' >
                <input className="JoinStaff_submitInput" type="submit" value={"직원등록"} onClick={joinStaff} />
            </div>
        </form>
    )
}