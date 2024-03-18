import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import UserType from '../UserType';
import UserTypeAgree from '../UserTypeAgree';

export default function JoinPage2() {
    
    const nextPage = window.location.pathname.replace("/", "");

    return (
        <div>
            <Header />
            <PageBanner />
            <UserType />
            <UserTypeAgree nextPage={nextPage}/>
            <Footer />
        </div>
    )
}