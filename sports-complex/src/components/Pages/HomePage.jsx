import Header from '../Header';
import PageBanner from '../PageBanner';
import HomeDetail from '../HomeDetail';
import MiddleMenu from '../MiddleMenu';

export default function HomePage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <HomeDetail />
            <MiddleMenu />
        </div>
    )
}