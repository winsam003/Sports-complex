import './XuserInfoListContents.css';

export default function XuserInfoListContents({ userID, userName, userBirth, userPhone, userAddress, userCarNum, lectureCheck }){
    return(
        <div className='XuserInfoListContents_Box'>
            <div className='XuserInfoListContents_contents'>
                <span><input type="checkbox" /></span>
                <span>{userID}</span>
                <span>{userName}</span>
                <span>{userBirth}</span>
                <span>{userPhone}</span>
                <span>{userAddress}</span>
                <span>{`${userCarNum === "" ? "차랑미등록" : userCarNum}`}</span>
                <span>{lectureCheck === 'true' ? "강사" : <button>강사등록</button>}</span>
            </div>
        </div>
    )
}