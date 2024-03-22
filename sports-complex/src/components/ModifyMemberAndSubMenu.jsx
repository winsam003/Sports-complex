import Submenu from './Submenu';
import ModifyMember from './ModifyMember';
import './ModifyMemberAndSubMenu.css';

export default function ModifyMemberAndSubMenu() {
    return (
        <div className='ModifyMemberAndSubMenu_Box'>
            <Submenu />
            <div className='ModifyMemberAndSubMenu_Box2'>
                <ModifyMember />
            </div>
        </div>
    )
}