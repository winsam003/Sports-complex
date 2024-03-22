import Header from '../Header';
import PageBanner from '../PageBanner';
import FindPassword from '../FindPassword';
import UserTypeAgree from '../UserTypeAgree';
import RegistrationFlow from './../RegistrationFlow';

export default function JoinPage3() {
    
    const nextPage = window.location.pathname.replace("/", "");

    return (
        <div>
            <Header />
            <PageBanner />
            <RegistrationFlow />
            <FindPassword />
            <UserTypeAgree nextPage={nextPage} />

        </div>
    )
}