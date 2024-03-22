import Xheader from '../Xheader';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XBoardControllContent from '../XBoardControllContent';

// 자주하는질문 게시판 관리
export default function XFaqBoardControllPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XBoardControllContent />
            <Footer />
        </div>
    )
}