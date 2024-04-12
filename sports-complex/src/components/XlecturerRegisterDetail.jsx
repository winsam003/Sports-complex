import './XlecturerRegisterDetail.css';

export default function XlecturerRegisterDetail() {
    return (
        <div className='XlectureRegisterDetail_Box'>
            <div className='XlectureRegisterDetail_Container'>
                <table>
                    <caption className='XlectureRegisterDetail_Caption'>강사등록</caption>
                    <tbody>
                        <tr>
                            <th className='JoinLecture_title'>이름 <span className='JoinLecture_star'>*</span></th>
                            <td><input className="XlectureRegisterDetail_input" type="text" name='name' id='name' /></td>
                        </tr>
                        <tr>
                            <th className='JoinLecture_title'>생년월일<span className='JoinLecture_star'>*</span></th>
                            <td>
                                <input className="XlectureRegisterDetail_input" type="number" name='birth' id='birth' />
                            </td>
                        </tr>
                        <tr>
                            <th className='JoinLecture_title'>휴대전화<span className='JoinLecture_star'>*</span></th>
                            <td>
                                <input className="XlectureRegisterDetail_input" type="text" name='teachphone' id='teachphone' />
                            </td>
                        </tr>
                        <tr>
                            <th className='JoinLecture_title'>보유 자격증</th>
                            <td>
                                <input className="XlectureRegisterDetail_input" type="text" name='carNum' id='carNum' />
                            </td>
                        </tr>
                        <tr>
                            <th className='JoinLecture_title'>계좌번호</th>
                            <td className='email'>
                                <input className="XlectureRegisterDetail_input" type="email" name='email' id='email' />
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
                    </tbody>
                </table>
                <div className='JoinLecture_submitBox' >
                    <input className="JoinLecture_submitInput" type="submit" name='submit' id='submit' value={"강사등록"} />
                </div>
            </div>
        </div>
    )
}