import PageBanner from "../PageBanner";
import Submenu from "../Submenu";
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function XlectureModifyPage() {
    // 사용자 페이지 접근
    const location = useLocation();
    const { teachData } = location.state;
    const { teachcode, teachname, teachbirth, teachphone, teachlicense, teachaccount } = teachData;

    const [UpdateTeachData, setUpdateTeachData] = useState({
        BT: '',
        ST: '',
    });

    // 강사 목록으로 이동
    const navigate = useNavigate();

    const goToLecturePage = () => {
        navigate('/XlecturePage');
    }

    // 강사 생일 출력 양식
    const formatDate = (teachbirth) => {
        const date = new Date(teachbirth);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    const TeachcodeChange = (e) => {
        const { name, value } = e.target;

        // 코드조합 대분류
        if (name === 'BT') {
            let code = 'CL';
            if (value === '구기') {
                code += 'BA';
            } else if (value === '수상') {
                code += 'WA';
            } else if (value === '댄스') {
                code += 'DC';
            } else if (value === '라켓') {
                code += 'LA';
            } else if (value === '웨이트') {
                code += 'WE';
            }
            setUpdateTeachData({ ...UpdateTeachData, [name]: value, teachcode: code + UpdateTeachData.teachcode.substring(4) });
        } else if (name === 'ST') {
            // 세부종목
            let code = UpdateTeachData.teachcode.substring(0, 4);
            if (value === '농구') {
                code += 'BK';
            } else if (value === '야구') {
                code += 'BS';
            } else if (value === '풋살') {
                code += 'FT';
            } else if (value === '수영') {
                code += 'SW';
            } else if (value === '다이빙') {
                code += 'DI';
            } else if (value === 'K-POP') {
                code += 'KP';
            } else if (value === '벨리댄스') {
                code += 'BD';
            } else if (value === '탁구') {
                code += 'PP';
            } else if (value === '배드민턴') {
                code += 'BM';
            } else if (value === '테니스') {
                code += 'TE';
            } else if (value === '스쿼시') {
                code += 'SQ';
            } else if (value === '클라이밍') {
                code += 'CL';
            } else if (value === '크로스핏') {
                code += 'CR';
            } else if (value === '필라테스') {
                code += 'PI';
            }
            setUpdateTeachData({ ...UpdateTeachData, [name]: value, teachcode: code });
        } else {
            setUpdateTeachData({ ...UpdateTeachData, [name]: value });
        }
    }

    return (
        <div>
            <PageBanner />
            <div className="XlectureInfo_Box">
                <Submenu />
                <div className='XlectureRegisterDetail_Box'>
                    <div className='XlectureRegisterDetail_Container'>
                        <table>
                            <caption className='XlectureRegisterDetail_Caption'>강사정보변경</caption>
                            <tbody>
                                <tr>
                                    <th>대분류</th>
                                    <td><select value={UpdateTeachData.BT} onChange={TeachcodeChange} name="BT" id="BT"
                                        className='newClassesSelect'>
                                        <option value="구기">구기</option>
                                        <option value="수상">수상</option>
                                        <option value="댄스">댄스</option>
                                        <option value="라켓">라켓</option>
                                        <option value="웨이트">웨이트</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <th>세부종목</th>
                                    <td>
                                        {UpdateTeachData.BT == '구기' && (
                                            <select name="ST" id="ST"
                                                value={UpdateTeachData.ST} onChange={TeachcodeChange} className='newClassesSelect'>
                                                <option value="농구">농구</option>
                                                <option value="야구">야구</option>
                                                <option value="풋살">풋살</option>
                                            </select>
                                        )}
                                        {UpdateTeachData.BT == '수상' && (
                                            <select name="ST" id="ST"
                                                value={UpdateTeachData.ST} onChange={TeachcodeChange} className='newClassesSelect'>
                                                <option value="수영">수영</option>
                                                <option value="다이빙">다이빙</option>
                                            </select>
                                        )}
                                        {UpdateTeachData.BT == '댄스' && (
                                            <select name="ST" id="ST"
                                                value={UpdateTeachData.ST} onChange={TeachcodeChange} className='newClassesSelect'>
                                                <option value="K-POP">K-POP</option>
                                                <option value="벨리댄스">벨리댄스</option>
                                            </select>
                                        )}
                                        {UpdateTeachData.BT == '라켓' && (
                                            <select name="ST" id="ST"
                                                value={UpdateTeachData.ST} onChange={TeachcodeChange} className='newClassesSelect'>
                                                <option value="탁구">탁구</option>
                                                <option value="배드민턴">배드민턴</option>
                                                <option value="테니스">테니스</option>
                                                <option value="스쿼시">스쿼시</option>
                                            </select>
                                        )}
                                        {UpdateTeachData.BT == '웨이트' && (
                                            <select name="ST" id="ST"
                                                value={UpdateTeachData.ST} onChange={TeachcodeChange} className='newClassesSelect'>
                                                <option value="클라이밍">클라이밍</option>
                                                <option value="크로스핏">크로스핏</option>
                                                <option value="필라테스">필라테스</option>
                                            </select>
                                        )}
                                    </td>
                                </tr>

                                <tr>
                                    <th className='JoinLecture_title'>강사코드</th>
                                    <input value={teachcode} />
                                </tr>
                                <tr>
                                    <th className='JoinLecture_title'>이름</th>
                                    <input value={teachname} />
                                </tr>
                                <tr>
                                    <th className='JoinLecture_title'>생년월일</th>
                                    <input value={formatDate(teachbirth)} />
                                </tr>
                                <tr>
                                    <th className='JoinLecture_title'>연락처</th>
                                    <input value={teachphone} />
                                </tr>
                                <tr>
                                    <th className='JoinLecture_title'>보유 자격증</th>
                                    <input value={teachlicense} />
                                </tr>
                                <tr>
                                    <th className='JoinLecture_title'>계좌번호</th>
                                    <input value={teachaccount} />
                                </tr>
                            </tbody>
                        </table>
                        <div className='XResetDeleteBtn' >
                            <button className="JoinLecture_submitButton" onClick={goToLecturePage}>목록</button>
                            <button className="JoinLecture_submitButton" >변경</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}