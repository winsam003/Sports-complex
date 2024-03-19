import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import ModifyMember from '../ModifyMember';

export default function JoinPage4() {
    
    const nextPage = window.location.pathname.replace("/", "");
    return (
        <div>
            <Header />
            <PageBanner />
            <ModifyMember />
            <Footer />
        </div>
    )
}