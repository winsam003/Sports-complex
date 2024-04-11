import PageBanner from '../PageBanner';
import ModifyMemberAndSubMenu from '../ModifyMemberAndSubMenu';

export default function ModifyMemberPage({ getUserID, roleList }) {
    
    return (
        <div>
            <PageBanner />
            <ModifyMemberAndSubMenu getUserID={getUserID} roleList={roleList} />
        </div>
    )
}