import Header from '../Header';
import PageBanner from '../PageBanner';
import PlaceRentalInfoContent from '../PlaceRentalInfoContent';
import Footer from '../Footer';

// 대관 신청 안내페이지
export default function PlaceRental() {
    return (
        <div>
            <Header />
            <PageBanner />
            <PlaceRentalInfoContent />
            <Footer />
        </div>
    )
}