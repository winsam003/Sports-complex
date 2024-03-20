import "./PhoneAthentication.css"

export default function PhoneAthentication() {
    return (
        <div className="PhoneAthentication_box">
            <img src="img/phoneMark.jpg" alt="" style={{width: "200px", height: "200px"}} />
            <div className="PhoneAthentication_title">핸드폰 인증</div>
            <button>인증하기</button>
            <p className="PhoneAthentication_call">안내 : 1588-2486</p>
            <p>
                본인 명의의 휴대폰으로 실명인증을 할 수 있습니다.
            </p>
        </div>

    )
}

