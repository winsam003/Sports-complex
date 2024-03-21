import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XBoardControllContent from '../XBoardSearchBox';
import XBoardSearchResult from '../XBoardSearchResult';
import XBoardButton from '../XBoardButton';

// 자주하는질문 게시판 관리
export default function XFaqBoardControllPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <XBoardControllContent />
            <XBoardSearchResult />
            <XBoardButton />
            <Footer />
        </div>
    )
}