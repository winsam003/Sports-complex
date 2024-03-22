import Xheader from '../Xheader';
import PageBanner from '../PageBanner';
import XParkingControll from '../XParkingControll';
import Footer from '../Footer';

// 문의게시판 답글등록
export default function XParkingControllPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XParkingControll />
            <Footer />
        </div>
    )
}