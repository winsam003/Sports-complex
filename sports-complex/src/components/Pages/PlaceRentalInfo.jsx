import Header from '../Header';
import PageBanner from '../PageBanner';
import PlaceRentalInfoContent from '../PlaceRentalInfoContent';

// 대관 신청 안내페이지
export default function PlaceRental() {
    return (
        <div>
            <Header />
            <PageBanner />
            <PlaceRentalInfoContent />
        </div>
    )
}