import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XBoardControllContent from '../XBoardControllContent';

// 공지사항 관리
export default function XBoardControllPage() {
    return (
        <div>
            <Header />
            <PageBanner />
            <XBoardControllContent />
            <Footer />
        </div>
    )
}