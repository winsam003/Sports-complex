import Submenu from './Submenu';
import ModifyMember from './ModifyMember';
import './ModifyMemberAndSubMenu.css';

export default function ModifyMemberAndSubMenu() {
    return (
        <div>
            <div className='ModifyMemberAndSubMenu_Box'>
                <Submenu />
                <ModifyMember />
            </div>
        </div>
    )
}