import Header from '../Header';
import PageBanner from '../PageBanner';
import Submenu from '../Submenu';
import XRentalPlaceSearchBox from '../XRentalPlaceSerachBox';
import XBtnResetSearch from '../XBtnResetSearch';
import XRentalPlaceSearchResult from '../XRentalPlaceSearchResult';
import XBtnResetDelete from '../XBtnResetDelete';
import Footer from '../Footer';

// 대관 신청 관리
export default function XRentalPlaceControllPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <Submenu />
            <XRentalPlaceSearchBox />
            <XBtnResetSearch />
            <XRentalPlaceSearchResult />
            <XBtnResetDelete />
            <Footer />
        </div>
    )
}