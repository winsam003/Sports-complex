import "./Login.css"
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        
        <div className="login_Page">
            <form action="login" method="post">
                <div className="login_Title">
                    FITNEST 체육 시설을 <br />
                    방문해 주셔서 감사합니다!</div>
                <div className="login_Box">
                    <div>
                        <input type="text" name="id" id="id" size={"50"} placeholder="아이디를 입력해주세요. "/>
                    </div>
                    <div>
                        <input type="password" name="password" id="password" size={"50"} placeholder="비밀번호를 입력해주세요." />
                    </div>
                    <div className="login_submitAndReset">
                        <input type="submit" value={"로그인"} /> &nbsp;&nbsp;
                        <input type="reset" value={"초기화"} />
                    </div>
                    <div>
                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                        <label htmlFor="rememberMe">아이디 저장</label>
                    </div>
                    <div className="login_joinandfind">
                        <Link to="/">회원가입</Link>
                        <Link to="/FindIDPage">아이디 찾기</Link>
                        <Link to="/FindPasswordPage">비밀번호 찾기</Link>
                    </div>
                </div>

            </form>
        </div>
    )
}
