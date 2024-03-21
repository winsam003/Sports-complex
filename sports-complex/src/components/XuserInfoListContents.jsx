import './XuserInfoListContents.css';

export default function XuserInfoListContents({ userID, userName, userBirth, userPhone, userAddress, userCarNum, lectureCheck, userDelete }){

    const handleDelete = (e) => {
        userDelete(userID, e.target.checked);
    }


    return(
        <div className='XuserInfoListContents_Box'>
            <div className='XuserInfoListContents_contents'>
                <input type="checkbox" onChange={handleDelete} />
                <span>{userID}</span>
                <span>{userName}</span>
                <span>{userBirth}</span>
                <span>{userPhone}</span>
                <span>{userAddress}</span>
                <span>{`${userCarNum === "" ? "차랑미등록" : userCarNum}`}</span>
                {/* <span>{lectureCheck === 'true' ? "강사" : <button>강사등록</button>}</span> */}
            </div>
        </div>
    )
}