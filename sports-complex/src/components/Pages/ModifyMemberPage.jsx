import PageBanner from '../PageBanner';
import ModifyMemberAndSubMenu from '../ModifyMemberAndSubMenu';

export default function ModifyMemberPage({ getUserID }) {
    
    return (
        <div>
            <PageBanner />
            <ModifyMemberAndSubMenu getUserID={getUserID} />
        </div>
    )
}