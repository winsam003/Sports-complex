import Xheader from '../Xheader';
import PageBanner from '../PageBanner';
import XRentalPlaceRequestControll from '../XRentalPlaceRequestControll';
import Footer from '../Footer';

// 대관 신청 관리
export default function XRentalPlaceRequestControllPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XRentalPlaceRequestControll />
            <Footer />
        </div>
    )
}