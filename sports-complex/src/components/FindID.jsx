import './FindID.css';

export default function FindID() {
    return (
        <div className='FindID_FindIDContainer'>
            <div className='FindID_text'>
                <p>아이디 찾기</p>
                <p>이름(실명)과 휴대전화번호를 입력해주세요</p>
                <form action='findID' method='post'>
                    <div className='FindID_Detail'>
                        <div>
                            <input className = "FindID_data" type="text" placeholder="이름(실명)을 입력해주세요." />
                        </div>
                        <div>
                            <input className="FindID_data" type="text" placeholder="휴대전화번호를 입력해주세요." />
                        </div>
                        <div>
                            <input className="FindID_submit" type="submit" value={"아이디 찾기"} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}