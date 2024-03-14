import "./Login.css"

export default function login() {
    return (
        <div className="loginPage">
            <form action="login" method="post">
                <div>
                    <div>
                        <input type="text" name="id" id="id" size={"50"} placeholder="아이디를 입력해주세요. "/>
                    </div>
                    <div>
                        <input type="password" name="password" id="password" size={"50"} placeholder="비밀번호를 입력해주세요." />
                    </div>
                    <div>
                        <input type="submit" value={"로그인"} /> &nbsp;&nbsp;
                        <input type="reset" value={"취소"} />
                    </div>
                    <div>
                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                        <label htmlFor="rememberMe">아이디 저장</label>
                    </div>
                    <div>
                        <a href="/">회원가입</a>
                        <a href="/">아이디 찾기</a>
                        <a href="/">비밀번호 찾기</a>
                    </div>
                </div>

            </form>
        </div>
    )
}