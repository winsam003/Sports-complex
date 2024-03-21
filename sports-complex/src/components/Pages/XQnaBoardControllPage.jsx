import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XBoardControllContent from '../XBoardSearchBox';
import XBoardSearchResult from '../XBoardSearchResult';
import XResetDeleteBtn from '../XResetDeleteBtn';

// 문의게시판 관리
export default function XQnaBoardControllPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <XBoardControllContent />
            <XBoardSearchResult />
            <XResetDeleteBtn />
            <Footer />
        </div>
    )
}