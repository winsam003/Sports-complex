import { useLocation } from 'react-router';
import './XBoardControllContentDateil2.css'
import { MdFestival } from "react-icons/md";
import { apiCall } from "../apiService/apiService";


export default function XBoardControllContentDateil2() {

    const location = useLocation();
    const receivedInfo = location.state;

    // qadate를 연월일시분 형식으로 표현
    const formattedDate = new Date(receivedInfo.notdate).toLocaleString('ko-KR', {
        timeZone: 'UTC',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 오전/오후 표기를 제거하기 위해
    }).replace(/\./g, '');


    const fileDownloadLink = () => {
        let filePath = `/notice/downloadFile?fileName=${receivedInfo.notuploadfile}`;

        apiCall(filePath, 'get', null, null)
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.blob]));
                const a = document.createElement('a');

                a.href = url;
                a.download = receivedInfo.notuploadfile;

                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            }).catch((error) => {
                console.log("error occured = " + error)
            })
    }



    return (
        <div className='XBoardControllContentDateil2_div'>
            <div className="XBoardControllContentDateil2Containor">
                <div className='XBoardControllContentDateil2_Box'>
                    <div className="XBoardControllContentDateil2_title">
                        <MdFestival className='EventDetail_icon' />
                        <p>{receivedInfo.nottitle}</p>
                    </div>
                    <div className='XBoardControllContentDateil2_twin'>
                        <div className="XBoardControllContentDateil2_menu">
                            <p>게시글 번호</p>
                            <p>{receivedInfo.notnum}</p>
                        </div>
                        <div className="XBoardControllContentDateil2_menu">
                            <p>공지대상</p>
                            <p>{receivedInfo.quest}</p>
                        </div>
                    </div>

                    <div className='XBoardControllContentDateil2_twin'>
                        <div className="XBoardControllContentDateil2_menu">
                            <p>작성자</p>
                            <p>{receivedInfo.stfid}</p>
                        </div>
                        <div className="XBoardControllContentDateil2_menu">
                            <p>작성날짜</p>
                            <p>{formattedDate}</p>
                        </div>
                    </div>

                    {/* 아래는 추가정보 */}
                    <div className='XBoardControllContentDateil2_twin'>
                        <div className="XBoardControllContentDateil2_menu">
                            <p>파일</p>
                            <p className='XBoardControllContentDateil2_file' onClick={fileDownloadLink}>{receivedInfo.notuploadfile}</p>
                        </div>
                        <div className="XBoardControllContentDateil2_menu">
                            <p>조회수</p>
                            <p>{receivedInfo.notcount}</p>
                        </div>
                    </div>
                    {receivedInfo.notdetail}
                    <div>
                        {/* <img src='../public/img/dora.jpg' alt="이벤트 이미지" /> */}
                    </div>
                </div>
                <div className='XBoardControllContentDateil2_buttonBox'>
                    <button className='XBoardControllContentDateil2_button' onClick={() => window.history.back()}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}
