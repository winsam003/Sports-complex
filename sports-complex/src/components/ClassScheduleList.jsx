import './ClassScheduleList.css';
import ClassScheduleDetail from './ClassScheduleDetail';

export default function ClassSchedule(){
    return(
        <div className="ClassSchedule_Containor">
            <div className='ClassSchedule_Search'>
                <div className='ClassSchedule_Calendar'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                </div>
            </div>
            <div className='ClassSchedule_CheckBox'>
                <label>구기종목</label>
                <input type="checkbox"/>
                <label>수상종목</label>
                <input type="checkbox"/>
                <label>댄스</label>
                <input type="checkbox"/>
                <label>라켓종목</label>
                <input type="checkbox"/>
                <label>웨이트</label>
                <input type="checkbox"/>
            </div>
            <div className='ClassSchedule_List'>
                <div>
                    <span>구분</span>
                    <span>강좌명</span>
                    <span>강좌신청시작</span>
                    <span>강좌신청마감</span>
                    <span>대상</span>
                    <span>정원</span>
                    <span>신청현황</span>
                    <span>대기</span>
                    <span>금액</span>
                    <span>신청</span>
                </div>
                <div>
                    <ClassScheduleDetail />
                </div>
            </div>
        </div>
    )
}