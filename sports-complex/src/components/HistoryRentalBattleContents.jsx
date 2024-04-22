import { apiCall } from '../apiService/apiService';
import './HistoryRentalBattleContents.css'

export default function HistoryRentalBattleContents({ sprnum, spacecode, sprdate, payment, sprstate, token, sprstate2 }) {

    const spaceRentCancel = () => {
        let url = '/spaceRentApp/historyCancel?sprnum=' + sprnum;

        if (window.confirm("정말 취소하시겠습니까?")) {
            apiCall(url, 'get', null, token)
                .then((response) => {
                    alert(sprnum + " 번 신청이 취소되었습니다.");
                    window.location.reload();
                }).catch((error) => {
                    console.log("historyCancel error Occured = " + error);
                })
        }
    }

    const battleCancel = () => {
        let url = '/spaceRentApp/battleCancel?sprnum=' + sprnum;

        apiCall(url, 'get', null, token)
            .then((response) => {
                alert(sprnum + "번 경기가 취소되었습니다.");
            }).catch((error) => {
                console.log("battleCancel error Occured = " + error);
            })
    }
    console.log(sprstate2)

    return (
        <div className="HistoryRentalBattleContents_Box">
            <div className="HistoryRentalBattleContents_list">
                <span>{sprnum}</span>
                <span>{spacecode.spacename}</span>
                <span>{sprdate}</span>
                <span>{spacecode.spaceprice}</span>
                <span>{payment}</span>
                {sprstate2 === '접수중' ?
                    <span>
                        경기신청 접수중
                    </span>
                    :
                    sprstate2 === '경기신청' ?
                        <span>
                            경기신청 취소 <button onClick={battleCancel}>취소</button>
                        </span>
                        :
                        <span>
                            경기신청 만료
                        </span>
                }
                <span>
                    {sprstate === '확정'? "경기신청 접수중" : "경기신청 만료"}
                </span>
            </div>
        </div>
    )
}