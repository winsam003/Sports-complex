import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import Submenu from '../Submenu';
import XBoardControllContent from '../XBoardSearchBox';
import XBoardSearchResult from '../XBoardSearchResult';
import XBoardButton from '../XBoardButton';

// 이벤트 게시글 관리
export default function XEventBoardControllPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <Submenu />
            <XBoardControllContent />
            <XBoardSearchResult />
            <XBoardButton />
            <Footer />
        </div>
    )
}