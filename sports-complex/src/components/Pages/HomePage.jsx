import Header from '../Header';
import PageBanner from '../PageBanner';
import HomeDetail from '../HomeDetail';
import MiddleMenu from '../MiddleMenu';
import Footer from '../Footer';

export default function HomePage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <HomeDetail />
            <MiddleMenu />
            <Footer />
        </div>
    )
}