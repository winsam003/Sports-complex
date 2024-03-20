import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import JoinMember from '../JoinMember';
import UserTypeAgree from '../UserTypeAgree';
import RegistrationFlow from '../RegistrationFlow';

export default function JoinPage4() {
    
    const nextPage = window.location.pathname.replace("/", "");
    return (
        <div>
            <Header />
            <PageBanner />
            <RegistrationFlow />
            <JoinMember />
            <Footer />
        </div>
    )
}