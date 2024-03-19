import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import ApplicationDetails from '../ApplicationDetails';

export default function MyPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <ApplicationDetails />
            <Footer />
        </div>
    )
}