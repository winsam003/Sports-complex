import './EventDetail.css'

export default function EventDetail() {

    return (
        <div className="EventDetailContainor">
            <div className='EventDetail_Box'>
                <div className="EventDetail_menu">
                    <span>행사정보</span>
                    <span>2024 고교야구 주말리그 전반기</span>
                </div>
                <div className="EventDetail_menu">
                    <span>장소</span>
                    <span>FitNest 종합운동장</span>
                </div>
                <div className="EventDetail_menu">
                    <span>구분</span>
                    <span>스포츠경기</span>
                </div>
                <div className="EventDetail_menu">
                    <span>대상</span>
                    <span>전체</span>
                </div>
                <div className="EventDetail_menu">
                    <span>세부페이지</span>
                    <span><a href='https://www.kleague.com/club/club.do?teamId=K08'>https://www.kleague.com/club/club.do?teamId=K08</a></span>
                </div>
                <div className="EventDetail_menu">
                    <span>이용요금</span>
                    <span>무료</span>
                </div>
                <div className="EventDetail_menu">
                    <span>날짜</span>
                    <span>3.16~3.17</span>
                </div>
                <div className="EventDetail_menu">
                    <span>시간</span>
                    <span>08:00~09:00</span>
                </div>
            </div>
        </div>
    )
}