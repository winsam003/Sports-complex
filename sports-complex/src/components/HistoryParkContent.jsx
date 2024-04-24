
export default function HistoryParkContent({myParkapp, cancelParkapp}) {
    return (
        <div>
            {myParkapp.map(({ parkappnum, parkappdate, parkusedate, payment, parkstate, carnum, spacecode }, index) => (
                <div key={index}  className="HistoryPark_content">
                    {/* <span>{parkappnum}</span> */}
                    <span>{parkappdate}</span>
                    <span>{parkusedate}</span>
                    <span>{carnum}</span>
                    <span>{spacecode.spacename}</span>
                    <span>{payment = 'cash' ? '현금' : '카드'}</span>
                    {/* <span>{parkstate = 'ing' ? '이용 중' : parkstate = 'Next' ? '이용 예정' : '이용 종료'}</span> */}
                    <span>
                        {(() => {
                            switch (parkstate) {
                                case 'ing':
                                    return '이용중';
                                case 'Next':
                                    return '이용 예정';
                                case 'end':
                                    return '이용 종료';
                                default:
                                    return '취소'; 
                            }
                        })()}
                    </span>
                    <span>
                        {parkstate === 'Next' ? 
                            <button onClick={() => cancelParkapp(parkappnum, spacecode.spacecode)}>취소</button> 
                            :
                            <button disabled>취소</button>}
                    </span>
                </div>
            ))}

        </div>
    )
}