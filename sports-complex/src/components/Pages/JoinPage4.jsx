import PageBanner from '../PageBanner';
import JoinMember from '../JoinMember';
import RegistrationFlow from '../RegistrationFlow';

export default function JoinPage4() {
    
    const nextPage = window.location.pathname.replace("/", "");
    return (
        <div>
            <PageBanner />
            <RegistrationFlow />
            <JoinMember />
        </div>
    )
}