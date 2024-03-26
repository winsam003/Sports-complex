import PageBanner from '../PageBanner';
import FindPassword from '../FindPassword';
import UserTypeAgree from '../UserTypeAgree';
import RegistrationFlow from './../RegistrationFlow';
import { useLocation } from 'react-router';

export default function JoinPage3() {
    
    const nextPage = window.location.pathname.replace("/", "");
    const location = useLocation();
    const { memberType } = location.state;

    return (
        <div>
            <PageBanner />
            <RegistrationFlow />
            <FindPassword memberType={memberType} />

        </div>
    )
}