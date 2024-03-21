import './XReantalPlaceNewone.css'

export default function XReantalPlaceNewone() {
    return (
        <div>
            <div className='XReantalPlaceNewone'>
                <p>대관 시설 번호</p>
                <input placeholder='가장 최근 번호 +1/ 변경은 자기 번호 가져오기'></input>
                <p>대관 시설 종류</p>
                <select>
                    <option value="" key="">농구장</option>
                    <option value="" key="">수영장</option>
                    <option value="" key="">풋살장</option>
                </select>
                <p>대관 시설 이름</p>
                <input placeholder='새로 입력하거나, 가져와서 수정'></input>
            </div>
        </div>
    )
}