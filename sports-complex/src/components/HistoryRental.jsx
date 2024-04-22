import './HistoryRental.css'
import HistoryRentalContents from './HistoryRentalContents';

export default function HistoryRental({ history, token }) {
    return (
        <div className="HistoryRental_box">
            <div className="HistoryRental_index">
                <span>대관신청번호</span>
                <span>장소명</span>
                <span>신청일자</span>
                <span>금액</span>
                <span>결제방법</span>
                <span>경기신청여부</span>
                <span>상태</span>
            </div>
            <div>
                {history.map((item, index) => (
                    <HistoryRentalContents key={index} {...item} token={token}  />
                ))}
            </div>
        </div>
    )
}