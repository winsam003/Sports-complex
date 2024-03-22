import Xheader from '../Xheader';
import Footer from '../Footer';
import PageBanner from '../PageBanner';
import XBoardWriteContent from '../XBoardWriteContent';

// 공지사항 등록
export default function XBoardWritePage() {
    return (
        <div>
            <Xheader />
            <PageBanner />
            <XBoardWriteContent />
            <Footer />
        </div>
    )
}