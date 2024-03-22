import Xheader from '../Xheader';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XBoardControllContent from '../XBoardControllContent';

// 문의게시판 관리
export default function XQnaBoardControllPage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XBoardControllContent />
            <Footer />
        </div>
    )
}