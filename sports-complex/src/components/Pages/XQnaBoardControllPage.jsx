import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import Submenu from '../Submenu';
import XBoardControllContent from '../XBoardSearchBox';
import XBoardSearchResult from '../XBoardSearchResult';
import XResetDeleteBtn from '../XBtnResetDelete';

// 문의게시판 관리
export default function XQnaBoardControllPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <Submenu />
            <XBoardControllContent />
            <XBoardSearchResult />
            <XResetDeleteBtn />
            <Footer />
        </div>
    )
}