import Header from '../Header';
import PageBanner from '../PageBanner';
import Footer from '../Footer';
import ParkingRequestContent from '../ParkingRequestContent';

// 주차 신청
export default function ParkingRequest() {
    return (
        <div>
            <Header />
            <PageBanner />
            <ParkingRequestContent />
            <Footer />
        </div>
    )
}