import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import UserType from '../UserType';
import UserTypeAgree from '../UserTypeAgree';
import RegistrationFlow from './../RegistrationFlow';

export default function JoinPage2() {
    
    const nextPage = window.location.pathname.replace("/", "");

    return (
        <div>
            <Header />
            <PageBanner />
            <RegistrationFlow />
            <UserType />
            <UserTypeAgree nextPage={nextPage}/>
            <Footer />
        </div>
    )
}