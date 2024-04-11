import { useLocation, useNavigate } from 'react-router';
import './XBoardControllContentDateil2.css'
import { MdFestival } from "react-icons/md";
import { apiCall } from "../apiService/apiService";
import { useState } from 'react';


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

    const [noticeContent, setNoticeContent] = useState('');
    const noticeContentHandler = (e) => {
        setNoticeContent(e.target.value);
    }


    const [selectedFile, setSelectedFile] = useState(receivedInfo.notuploadfile);
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const [modifyOn, setModifyOn] = useState(false);
    const modify = () => {
        setModifyOn(true);
    }
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    let token = userData.token;

    const navigate = useNavigate();
    const noticeModify = () => {
        if (window.confirm("정말 수정하시겠습니까?")) {
            let url = '/notice/noticeModify';
            const formData = new FormData();
            formData.append('file', selectedFile);

            
            let requestData = {
                notnum: receivedInfo.notnum,
                notdetail: noticeContent,
                file: formData.get('file')
            }
            apiCall(url, 'post', requestData, token)
                .then((response) => {
                    alert(response);
                    setModifyOn(false);
                    navigate(`/XBoardControllPage`);
                }).catch((error) => {
                    alert("게시글 수정에 실패하였습니다. 관리자에게 문의해주세요.");
                    console.log('modify error occured = ' + error)
                })
            }
    }


    return (
        <div className='XBoardControllContentDateil2_div'>
            <div className="XBoardControllContentDateil2Containor">
                <div className='XBoardControllContentDateil2_Box'>
                    
                    {location.pathname.indexOf("/FaqControllPageDetailPage") !== -1 ?
                        ""
                    :
                        <div className='XBoardControllContentDateil2_modityBtnBox'>
                            <button className='XBoardControllContentDateil2_modityBtn' onClick={modify}>수정하기</button>
                        </div>
                    }



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
                            {modifyOn ?
                                <input className='test' type="file" name='uploadfilef' id='uploadfilef' onChange={handleFileChange} />
                                :
                                <p className='XBoardControllContentDateil2_file' onClick={fileDownloadLink}>{receivedInfo.notuploadfile}</p>
                            }
                        </div>
                        <div className="XBoardControllContentDateil2_menu">
                            <p>조회수</p>
                            <p>{receivedInfo.notcount}</p>
                        </div>
                    </div>
                    <div className="XBoardControllContentDateil2_contents">
                        {modifyOn ?
                            <textarea className='XBoardControllContentDateil2_modifiedContents' type="text" name='content' id='content' onBlur={noticeContentHandler}>{receivedInfo.notdetail}</textarea>
                            :
                            receivedInfo.notdetail
                        }
                    </div>
                    <div>
                        {/* <img src='../public/img/dora.jpg' alt="이벤트 이미지" /> */}
                    </div>
                </div>



                <div className='XBoardControllContentDateil2_buttonBox'>
                    {modifyOn ?
                        <button className='XBoardControllContentDateil2_button' onClick={noticeModify}>수정하기</button>
                        :
                        ""
                    }
                    <button className='XBoardControllContentDateil2_button' onClick={() => window.history.back()}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}
