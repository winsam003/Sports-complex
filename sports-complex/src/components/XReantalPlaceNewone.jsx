import './XReantalPlaceNewone.css'

export default function XReantalPlaceNewone() {
    return (
        <div>
            <div className='XReantalPlaceNewone'>
                <p>대관 시설 번호</p>
                <input placeholder='등록이면 가장 최근 번호 +1 / 변경이면 기존번호 가져오기' readOnly></input>
                <p>대관 시설 종류</p>
                <select>
                    <option value="" key="">농구장</option>
                    <option value="" key="">수영장</option>
                    <option value="" key="">풋살장</option>
                </select>
                <p>대관 시설 이름</p>
                <input placeholder='등록이면 새로 입력 / 변경이면 기존이름 가져오기'></input>
            </div>
        </div>
    )
}