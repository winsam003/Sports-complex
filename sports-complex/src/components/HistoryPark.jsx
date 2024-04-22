import './HistoryPark.css'

export default function HistoryPark({myParkapp, token}) {
    console.log(myParkapp[0]);

    myParkapp.map((item, index) => {
        console.log(item);
        return null; // 리액트 컴포넌트에서는 JSX 밖에서는 무언가를 반환해야 하므로 null 반환
    });

    // console.log(myParkapp.parkappnum)


    return (
        <div className="HistoryPark_box">
            <div className="HistoryPark_index">
                <span>주차신청번호</span>
                <span>신청일자</span>
                <span>이용 가능 날짜</span>
                <span>결제방법</span>
                <span>상태</span>
            </div>
            <div className="HistoryPark_content" >
                {/* {myParkapp.map(({ parkappnum }, index) => (
                    <div key={index}>
                        <span>{parkappnum}</span>
                        <span>{item.parkappdate}</span>
                        <span>{item.parkusedate}</span>
                        <span>{item.payment}</span>
                        <span>{item.parkstate}</span>
                    </div>
                ))} */}
            </div>
        </div>
    )
}