import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import TermsAndConditions from '../TermsAndConditions';
import UserTypeAgree from '../UserTypeAgree';


export default function JoinPage1(){

    const nextPage = window.location.pathname.replace("/", "");

    return (
        <div>
            <Header />
            <PageBanner />
            <TermsAndConditions />
            <UserTypeAgree nextPage={nextPage}/>
            <Footer />
        </div>
    )
}