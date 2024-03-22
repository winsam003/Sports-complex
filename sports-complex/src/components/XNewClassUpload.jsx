import Submenu from './Submenu';
import './XNewClassUpload.css';
import XlecturerList from './XlecturerList';

export default function XNewClassUpload(){
    return (
        <div className='XNewClassUpload'>
            <Submenu />
            <div className='XNewClassUpload_div'>
                <div className='XNewClassUpload_Title'>신규 수업 등록하기 </div>
                <form action="post">
                    <table className='XNewClassUpload_table'>
                        <tr>
                            <th>강좌 코드</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <th>강좌명</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr className='XNewClassUpload_classAppDate'>
                            <th>강좌 신청 시작날</th>
                            <td><input type="date" /></td>
                        </tr>
                        <tr className='XNewClassUpload_classAppDate'>
                            <th>강좌 신청 마감날 </th>
                            <td><input type="date" /></td>
                        </tr>
                        <tr className='XNewClassUpload_startEnd'>
                            <th>강좌 시작 날짜 </th>
                            <td><input type="date" /></td>
                        </tr>
                        <tr className='XNewClassUpload_startEnd'>
                            <th>강좌 끝나는 날짜 </th>
                            <td><input type="date" /></td>
                        </tr>
                        <tr>
                            <th>강좌 대상 </th>
                            <td>
                                <select name="XNewClassUpload_tarket" id="">
                                    <option value="">어린이(만 12세 이하)</option>
                                    <option value="">청소년(만13세 ~ 18세)</option>
                                    <option value="">성인(만19세 ~ 64세)</option>
                                    <option value="">어르신(만65세 이상)</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>강좌 정원</th>
                            <td>
                                <input type="number" placeholder='숫자만 입력해주세요.' /> 명
                            </td>
                        </tr>
                        {/* 대기인원은 강좌 정원만큼만 받는거 어떤가요? */}
                        <tr>
                            <th>강좌 금액</th>
                            <td>
                                <input type="number" placeholder='숫자만 입력해주세요.' /> 원
                            </td>
                        </tr>
                        <tr>
                            <th>신청현황</th>
                            <td>
                                <select name="XNewClassUpload_appState" id="" >
                                    <option value="">접수가능</option>
                                    <option value="">접수마감</option>
                                    <option value="">예약대기</option>
                                    <option value="">대기마감</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </form>

                <XlecturerList />
            </div>
        </div>
    )
}
