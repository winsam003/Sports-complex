import './UserType.css';
import UserTypeAgree from './UserTypeAgree';

export default function UserType(){
    return(
        <div>
            <div className='UserType_container'>
                <button className='UserType_button UserType_kid'>아동</button>
                <button className='UserType_button UserType_adult'>성인</button>
                <button className='UserType_button UserType_foreigner'>외국인</button>
            </div>
        </div>
    )
}