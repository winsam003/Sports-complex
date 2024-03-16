import './UserTypeAgree.css';

export default function UserTypeAgree(){
    return (
        <div className='UserTypeAgree_container'>
            <button className='UserTypeAgree_button UserTypeAgree_Agree'>동의합니다.</button>
            <button className='UserTypeAgree_button UserTypeAgree_Disagree'>동의하지 않습니다.</button>
        </div>
    )
}