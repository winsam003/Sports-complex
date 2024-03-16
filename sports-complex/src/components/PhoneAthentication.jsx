import "./PhoneAthentication.css"

export default function PhoneAthentication() {
    return (
        <div className="PhoneAthentication_box">
            <img src="img/dora.jpg" alt="" style={{width: "200px", height: "200px"}} />
            <div className="PhoneAthentication_title">나이스 아이핀(I-PIN) 인증</div>
            <button>인증하기</button>
            <p className="PhoneAthentication_call">안내 : 1600-1522</p>
            <p>
                본인 명의의 휴대폰으로 실명인증을 할 수 있습니다.
            </p>
        </div>

    )
}

