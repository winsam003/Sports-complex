import PageBanner from '../PageBanner';
import ModifyMemberAndSubMenu from '../ModifyMemberAndSubMenu';

export default function ModifyMemberPage({ getUserID, roleList, token }) {
    
    return (
        <div>
            <PageBanner />
            <ModifyMemberAndSubMenu getUserID={getUserID} roleList={roleList} token={token} />
        </div>
    )
}