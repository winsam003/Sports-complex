import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import FindPassword from '../FindPassword';
import UserTypeAgree from '../UserTypeAgree';

export default function JoinPage3() {
    
    const nextPage = window.location.pathname.replace("/", "");

    return (
        <div>
            <Header />
            <PageBanner />
            <FindPassword />
            <UserTypeAgree nextPage={nextPage} />
            <Footer />
        </div>
    )
}