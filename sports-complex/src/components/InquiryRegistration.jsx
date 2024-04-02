import './InquiryRegistration.css'
import Submenu from './Submenu'

export default function InquiryRegistration() {
    return (
        <div className='InquiryRegistration_box' >
            <Submenu />
            <div className='InquiryRegistration_InquiryInfo'>

                <h1>문의게시판 등록</h1>
                <div className='InquiryRegistration_infoBox'>
                    {/* <h3>게시판 이용 주의사항</h3> */}
                    <ul>
                        <li>개인정보가 불법적으로 이용되는 것을 막기 위해 이용자께서는 e-메일, 주소, 주민번호, 전화번호 등 개인정보에 관한 사항을 내용에 게시하는것을 주의하시기 바랍니다.</li>
                        <li>이용자가 게시한 자료중 상업적 광고, 불건전한 내용, 특정인에 대한 비방, 명예훼손 등의 우려가 있는 내용, 정치적 목적이나 성향이 있는 게시물, 개인정보가 포함된 게시물 등은 관리자에 의거 사전 통보없이 삭제됩니다.</li>
                    </ul>
                </div>

                <h2 className='InquiryRegistration_miniTitle'>개인정보 수집 및 이용에 대한 안내</h2>
                <div className='InquiryRegistration_infoBox'>
                    <p>피트네스트 는 고객의 소리 등 민원에 대한 소관 업무의 수행을 위하여 다음과 같이 개인정보를 수집 및 이용합니다.</p>
                    <ul>
                        <li>개인정보의 수집·이용목적</li>
                        <ul>
                            <li>관계법령 등에서 정하는 소관 업무의 수행을 위하여 다음과 같이 개인정보를 수집 및 이용합니다.</li>
                            <li>수집된 개인정보는 정해진 목적 이외의 용도로는 이용되지 않습니다.</li>
                        </ul>
                        <li>개인정보의 수집·이용 항목</li>
                        <ul>
                            <li>필수항목 : 성명, 연락처(휴대폰 또는 전화번호 중 택일)</li>
                            <li>선택항목 : 이메일</li>
                        </ul>
                        <li>개인정보의 보유·이용기간 : 3년</li>
                        <li>개인정보 수집을 원하지 않을 경우 동의를 거부할 수 있으며, 이 경우 민원 신청 서비스가 제한됩니다.</li>
                    </ul>
                </div>
                <div className='InquiryRegistration_check'>
                    <input type="checkbox" name='AgreePersonal' id='AgreePersonal' />
                    <span><label htmlFor="AgreePersonal">위의 개인정보 수집이용에 동의합니다.</label></span>
                </div>

                <h2 className='InquiryRegistration_miniTitle'>정보통신망법 등 동의 안내</h2>
                <div className='InquiryRegistration_infoBox'>
                    <p>귀하가 공개하신 내용은 타인이 볼 수도 있습니다. 타인의 개인정보(전자우편 등)를 정보주체의 동의 없이 취득하거나 공개하는 경우, 인권을 침해하는 경우 등은 관련 법에 의해 처리될 수 있습니다.</p>
                    <ul>
                        <li>개인정보보호법</li>
                        <li>정보통신망이용촉진 및 정보보호등에 관한 법률(이하'정보통신망법') 등</li>
                    </ul>
                </div>
                <div className='InquiryRegistration_check'>
                    <input type="checkbox" name='AgreeInfo' id='AgreeInfo' />
                    <span><label htmlFor="AgreeInfo">정보통신망법에 동의합니다.</label></span>
                </div>

                <h2 className='InquiryRegistration_miniTitle'>민원공유동의 안내</h2>
                <div className='InquiryRegistration_infoBox'>
                    <p>동의를 거부할 수 있으며, 거부에 따른 불이익은 없습니다.</p>
                </div>
                <div className='InquiryRegistration_check'>
                    <input type="checkbox" name='AgreeShare' id='AgreeShare' />
                    <span><label htmlFor="AgreeShare">귀하의 민원신청 내용을 공유하는 것에 동의하십니까?</label></span>
                </div>
                <div className='InquiryRegistration_haveto'>
                    <p>※ 글 등록이 안 되시는 분은, 우측의 '보기' 버튼을 클릭하시기 바랍니다.
                        <a href="/" >보기</a>
                        {/* 보기 버튼 누르면 새로운 창 띄워야 됨. */}
                    </p>
                    <p>(<span className='star'>*</span>)는 반드시 작성해야 할 필수 항목입니다.</p>
                </div>
                <div className='InquiryRegistration_form'>
                    <form action="/" method='post'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>작성자 <span className='star'>*</span></th>
                                    <td><input type="text" name='name' id='name' placeholder='본인인증에서 가져오기' readOnly /></td>
                                </tr>
                                <tr>
                                    <th>공개/비공개 <span className='star'>*</span></th>
                                    <td>
                                        <input type="radio" id='open' name='openOrPrivate' value={'open'} />
                                        <label htmlFor="open">공개</label>
                                        <input type="radio" id='private' name='openOrPrivate' value={'private'} />
                                        <label htmlFor="private">비공개</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>연락처 <span className='star'>*</span></th>
                                    <td>
                                        <input type="text" name='phoneNum' id='phoneNum' />
                                    </td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td>
                                        <input type="text" name='email' id='email' />
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
                                        <select name="facilityUsed" id="InquiryRegistration_facilityUsed">
                                            {/* value 값 넣어야 됨. */}
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
                                    <th>비밀번호 <span className='star'>*</span></th>
                                    <td>
                                        <input type="password" name='password' id='password' />
                                    </td>
                                </tr>
                                <tr>
                                    <th>제목 <span className='star'>*</span></th>
                                    <td>
                                        <input type="text" name='title' id='title' />
                                    </td>
                                </tr>
                                <tr>
                                    <th>내용 <span className='star'>*</span></th>
                                    <td>
                                        <input type="text" name='content' id='content' />
                                    </td>
                                </tr>
                                <tr>
                                    <th>첨부파일</th>
                                    <td className='InquiryRegistration_upload'>
                                        <input className='test' type="file" name='uploadfilef' id='uploadfilef' />
                                    </td>
                                </tr>
                                <tr>
                                    <th>작성일</th>
                                    <td>자바스크립트로 실시간 날짜, 시간 넣기. </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>


        </div>


    )
}

