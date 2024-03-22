import Xheader from '../Xheader';
import PageBanner from '../PageBanner';
import XRentalPlaceControll from '../XRentalPlaceControll';
import Footer from '../Footer';

// 대관 신청 관리
export default function XRentalPlaceControllPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XRentalPlaceControll />
            <Footer />
        </div>
    )
}