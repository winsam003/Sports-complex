import './XuserInfoListContents.css';

export default function XuserInfoListContents({ id, name, password, birth, phoneNum, homeNum, address, address1, address2, email, snsAgr, emailAgr, carnum, parkuse, userDelete }){

    const handleDelete = (e) => {
        userDelete(id, e.target.checked);
    }


    return(
        <div className='XuserInfoListContents_Box'>
            <div className='XuserInfoListContents_contents'>
                <input type="checkbox" onChange={handleDelete} />
                <span>{id}</span>
                <span>{name}</span>
                <span>{birth}</span>
                <span>{phoneNum}</span>
                <span>{address}</span>
                <span>{`${carnum === "" ? "차랑미등록" : carnum}`}</span>
                {/* <span>{lectureCheck === 'true' ? "강사" : <button>강사등록</button>}</span> */}
            </div>
        </div>
    )
}