import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import JoinMember from '../JoinMember';
import UserTypeAgree from '../UserTypeAgree';

export default function JoinPage4() {
    
    const nextPage = window.location.pathname.replace("/", "");
    return (
        <div>
            <Header />
            <PageBanner />
            <JoinMember />
            <UserTypeAgree nextPage={nextPage} />
            <Footer />
        </div>
    )
}